"use client";

import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

export default function ActiveRoute(
  props: PropsWithChildren<{
    routName: string;
  }>
) {
  const path = usePathname();

  return (
    <div className={path.startsWith(props.routName) ? "group active" : ""}>
      {props.children}
    </div>
  );
}
