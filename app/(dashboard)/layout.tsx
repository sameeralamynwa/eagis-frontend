import AuthMenu from "@/components/AuthMenu";
import DashboardDesktopSidebar from "@/components/layouts/dashboard/DashboardDesktopSidebar";
import DashboardMobileSidebar from "@/components/layouts/dashboard/DashboardMobileSidebar";
import appConfig from "@/utills/appConfig";
import { routes } from "@/utills/routes";
import Link from "next/link";
import { TbBell, TbMenu2, TbMessage, TbSettings } from "react-icons/tb";

export default function DashboardLayout(
  props: Readonly<{
    children: React.ReactNode;
  }>
) {
  return (
    <>
      <div className="bg-[url(/img/dashboard-bg.png)] bg-no-repeat bg-base-100 flex h-full min-h-screen w-full">
        <DashboardDesktopSidebar>
          <div className="max-w-7xl mx-auto">
            <nav className="h-20 flex items-center justify-between p-3">
              <div className="flex justify-center items-center gap-2">
                <button
                  data-overlay="#sidebar"
                  className="btn btn-square lg:hidden"
                >
                  <TbMenu2 size={24} />
                </button>
                <button
                  id="desktop-sidebar"
                  className="btn btn-square hidden lg:flex"
                >
                  <TbMenu2 size={24} />
                </button>
                <p className="hidden sm:block text-base-content">
                  {appConfig.appName} Dashbaord
                </p>
              </div>
              <div className="flex items-center gap-3 text-base-content">
                <Link
                  href={routes.dashboardNotifications()}
                  className="btn btn-circle btn-sm btn-soft"
                >
                  <TbBell size={20} />
                </Link>
                <Link
                  href={routes.dashboardNotifications()}
                  className="btn btn-circle btn-sm btn-soft"
                >
                  <TbMessage size={20} />
                </Link>
                <Link
                  href={routes.dashboardProfileSettings()}
                  className="btn btn-circle btn-sm btn-soft"
                >
                  <TbSettings size={20} />
                </Link>
                <ul className="menu menu-xs">
                  <li>
                    <AuthMenu />
                  </li>
                </ul>
              </div>
            </nav>
            {props.children}
          </div>
        </DashboardDesktopSidebar>
      </div>
      <DashboardMobileSidebar />
    </>
  );
}
