"use client";

import { IAuthContext } from "@/utills/types/IAuthContext";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

// <<< FIX: Import the OptionsType for cookies
import { getCookie, deleteCookie, setCookie, OptionsType } from "cookies-next";

// @ts-ignore
const AuthContext = createContext<{
  authContext: IAuthContext;
  signInLocal: (ctx: IAuthContext, expiringDateTime: Date) => void;
  signOutLocal: () => void;
  updateUserInContext: (user: IAuthContext["user"]) => void;
}>();

export const AuthContextProvider = (props: PropsWithChildren) => {
  const [authContext, setAuthContext] = useState<IAuthContext>({
    token: null,
    user: null,
  });

  const loadContextFromCookies = () => {
    let user: IAuthContext["user"] = null;
    let token: IAuthContext["token"] = null;

    const userCookie = getCookie("auth_user");
    if (userCookie && typeof userCookie === "string" && userCookie !== "undefined") {
      try {
        user = JSON.parse(userCookie);
      } catch (e) {
        console.error("Failed to parse auth_user cookie:", e);
        deleteCookie("auth_user", { path: "/" });
      }
    }

    const tokenCookie = getCookie("auth_token");
    if (tokenCookie && typeof tokenCookie === "string" && tokenCookie !== "undefined") {
      try {
        token = JSON.parse(tokenCookie);
      } catch (e) {
        console.error("Failed to parse auth_token cookie:", e);
        deleteCookie("auth_token", { path: "/" });
      }
    }
    
    setAuthContext({ user, token });
  };

  const signInLocal = (ctx: IAuthContext, expiringDateTime: Date) => {
    // <<< FIX: Define the type for cookieOptions to satisfy TypeScript
    const cookieOptions: OptionsType = {
      expires: expiringDateTime,
      sameSite: "lax",
      path: "/",
    };
    
    if (ctx.user && ctx.token) {
        setCookie("auth_user", JSON.stringify(ctx.user), cookieOptions);
        setCookie("auth_token", JSON.stringify(ctx.token), cookieOptions);
        setAuthContext({ user: ctx.user, token: ctx.token });
    }
  };

  const signOutLocal = () => {
    deleteCookie("auth_user", { path: "/" });
    deleteCookie("auth_token", { path: "/" });
    setAuthContext({ user: null, token: null });
  };

  const updateUserInContext = (newUser: IAuthContext["user"]) => {
    if (newUser) {
      setAuthContext((prevContext) => ({
        ...prevContext,
        user: newUser,
      }));
      const tokenCookie = getCookie("auth_token");
      if (tokenCookie) {
        // Here we define the options again with no expiry to update a session cookie
        const cookieOptions: OptionsType = {
          sameSite: "lax",
          path: "/",
        }
        setCookie("auth_user", JSON.stringify(newUser), cookieOptions);
      }
    }
  };

  useEffect(() => {
    loadContextFromCookies();
  }, []);

  return (
    <AuthContext.Provider
      value={{ authContext, signInLocal, signOutLocal, updateUserInContext }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuthConext = () => useContext(AuthContext);