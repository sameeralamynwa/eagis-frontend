"use client";

import {
  useCallback,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";
import DashboardSideMenu from "./DashboardSideMenu";

export default function DashboardDesktopSidebar(props: PropsWithChildren) {
  const [visible, setVisible] = useState(true);
  const togel = useCallback(() => {
    setVisible((state) => !state);
  }, []);

  useEffect(() => {
    const element = document.getElementById("desktop-sidebar");

    if (element) {
      element.addEventListener("click", togel);
    }

    return () => {
      element?.removeEventListener("click", togel);
    };
  }, []);
  return (
    <>
      <div
        className={`fixed top-0 left-0 h-screen w-0 opacity-0 ${
          visible ? "lg:w-[20rem] opacity-100" : ""
        } overflow-clip transition-[width,opacity] border-r border-base-content/20`}
      >
        <DashboardSideMenu />
      </div>
      <div
        className={`w-full ${
          visible
            ? "lg:w-[calc(100vw-21.1rem)] lg:translate-x-[20rem] lg:pl-5"
            : ""
        }  transition-[translate,width] bg-linear-to-r from-secondary/5 to-secondary/0 scrollbar-none`}
      >
        {props.children}
      </div>
    </>
  );
}
