"use client";

import DashboardSideMenu from "./DashboardSideMenu";

export default function DashboardMobileSidebar() {
  return (
    <div
      id="sidebar"
      className="overlay overlay-open:translate-x-0 drawer drawer-start hidden fixed z-[122]"
      role="dialog"
      tabIndex={-1}
    >
      <div className="overflow-clip">
        <DashboardSideMenu />
      </div>
    </div>
  );
}
