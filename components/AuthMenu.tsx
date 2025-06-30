"use client";

import Link from "next/link";
import Image from "next/image";
import appConfig from "@/utills/appConfig";
import { routes } from "@/utills/routes";
import { fireToast } from "@/utills/fireToast";
import { useRouter } from "next/navigation";
import { useAuthConext } from "./context/AuthContext";
import Dropdown from "./Dropdown";
import { TbLogout } from "react-icons/tb";
import { useState, useEffect } from "react";

export default function AuthMenu() {
  const {
    authContext: { user },
    signOutLocal,
  } = useAuthConext();
  const router = useRouter();

  // <<< FIX: This state will act as our "gate"
  const [hasMounted, setHasMounted] = useState(false);

  // <<< FIX: This effect runs only on the client, after the first render
  useEffect(() => {
    setHasMounted(true);
  }, []);

  const handleSignout = () => {
    signOutLocal();
    fireToast({
      type: "success",
      desc: "Logout successful",
    });
    // Redirect to home page after signing out
    router.push(routes.home());
  };

  // <<< FIX: If the component has not mounted on the client yet, render nothing.
  // This guarantees that the server and client HTML will match.
  if (!hasMounted) {
    return null; // Or you can return a loading skeleton placeholder
  }

  // After mounting, hasMounted becomes true, and we can safely render the real UI.
  if (user) {
    return (
      <div className="flex justify-center items-center gap-2">
        <Dropdown
          id="auth-menu-dropdown"
          btn={
            <button
              id="auth-menu-dropdown"
              type="button"
              className="dropdown-toggle avatar cursor-pointerr rounded-full "
              aria-haspopup="menu"
              aria-expanded="false"
              aria-label="Dropdown"
            >
              <div className="size-8 rounded-full">
                <Image
                  src={user?.avatar || appConfig.dummyAvatar}
                  alt="User profile picture"
                  title="Profile Picture"
                  height={50}
                  width={50}
                />
              </div>
            </button>
          }
          list={[
            <Link
              href={routes.dashboardProfileSettings()}
              key={1}
              className="cursor-pointer flex items-center gap-2 text-base"
            >
              <span className="icon-[tabler--user] size-5"></span>
              Account
            </Link>,
            <Link
              href={routes.dashboardHealthSummary()}
              key={2}
              className="cursor-pointer flex items-center gap-2 text-base"
            >
              <span className="icon-[tabler--leaf] size-5"></span>
              Health Hub
            </Link>,
            <button key={3} onClick={handleSignout} className="text-base ">
              <TbLogout className="size-5 inline" /> Logout
            </button>,
          ]}
        />
      </div>
    );
  } else {
    return (
      <Link href={routes.login()} className="btn btn-soft text-sm">
        <span className="icon-[tabler--user-circle] size-5  shrink-0"></span>{" "}
        Login
      </Link>
    );
  }
}