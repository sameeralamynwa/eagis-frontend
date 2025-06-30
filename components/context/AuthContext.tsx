"use client";

import { IAuthContext } from "@/utills/types/IAuthContext";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

import { getCookie, deleteCookie, setCookie } from "cookies-next";

// @ts-ignore
const AuthContext = createContext<{
  authContext: IAuthContext;
  signInLocal: (ctx: IAuthContext, expiringDateTime: Date) => void;
  signOutLocal: () => void;
  // <<< FIX: Add a new function to update the user state
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
    const cookieOptions = {
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

  // <<< FIX: Add the new function to update the user in the context and cookie
  const updateUserInContext = (newUser: IAuthContext["user"]) => {
    if (newUser) {
      // 1. Update the React state
      setAuthContext((prevContext) => ({
        ...prevContext,
        user: newUser,
      }));
      // 2. Update the cookie with the fresh data
      const tokenCookie = getCookie("auth_token");
      if (tokenCookie) {
        // We just update the user cookie, keeping the existing token cookie
        setCookie("auth_user", JSON.stringify(newUser), {
          sameSite: "lax",
          path: "/",
        });
      }
    }
  };


  useEffect(() => {
    loadContextFromCookies();
  }, []);

  return (
    <AuthContext.Provider
      // <<< FIX: Provide the new function through the context
      value={{ authContext, signInLocal, signOutLocal, updateUserInContext }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuthConext = () => useContext(AuthContext);