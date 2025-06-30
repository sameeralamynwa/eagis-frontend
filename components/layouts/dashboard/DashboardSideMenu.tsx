"use client";

import AppLogo from "@/components/AppLogo";
import { routes } from "@/utills/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import {
  TbBell,
  TbCalendar,
  TbCalendarCheck,
  TbFileAnalytics,
  TbReportMedical,
  TbRobot,
  TbSettings,
  TbX,
} from "react-icons/tb";
import { FaUserDoctor } from "react-icons/fa6";

export default function DashboardSideMenu() {
  const pathname = usePathname();
  return (
    <div className="relative w-full transition-[width]  bg-secondary/10">
      <div className="p-4 pt-8 lg:p-8">
        <div className="flex justify-center">
          <AppLogo />
        </div>
        <div className="h-[calc(100vh-6rem)]">
          <div className="overflow-y-scroll scrollbar-none h-full w-full mt-4 space-y-2">
            <span className="ml-4 block mt-5 text-sm">Dashboard</span>
            <ul className="mt-2 space-y-0.5">
              <li>
                <NavLink
                  href={routes.dashboardHealthSummary()}
                  icon={<TbReportMedical size={19} />}
                  title="Health Summary"
                  selected={pathname.startsWith(
                    routes.dashboardHealthSummary()
                  )}
                />
              </li>
              <li>
                <NavLink
                  href={routes.dashboardAppointments()}
                  icon={<TbCalendar size={19} />}
                  title="Appointments"
                  selected={pathname.startsWith(routes.dashboardAppointments())}
                />
              </li>
              <li>
                <NavLink
                  href={routes.dashboardMeicalRecords()}
                  icon={<TbFileAnalytics size={19} />}
                  title="Medical Records"
                  selected={pathname.startsWith(
                    routes.dashboardMeicalRecords()
                  )}
                />
              </li>
              <li>
                <NavLink
                  href={routes.dashboarSearchDoctors()}
                  icon={<FaUserDoctor size={19} />}
                  title="Search Doctors"
                  selected={pathname.startsWith(routes.dashboarSearchDoctors())}
                />
              </li>
            </ul>
            <span className="ml-4 block mt-5 text-sm">Apps</span>
            <ul className="mt-2 space-y-0.5">
              <li>
                <NavLink
                  href={routes.dashboardSymptomChecker()}
                  icon={<TbRobot size={19} />}
                  title="Ai Symptom Checker"
                  selected={pathname.startsWith(
                    routes.dashboardSymptomChecker()
                  )}
                />
              </li>
              <li>
                <NavLink
                  href={routes.dashboardBookAppointment()}
                  icon={<TbCalendarCheck size={19} />}
                  title="Book Appointment"
                  selected={pathname.startsWith(
                    routes.dashboardBookAppointment()
                  )}
                />
              </li>
            </ul>
            <span className="ml-4 block mt-5 text-sm">Account</span>
            <ul className="mt-2 space-y-0.5">
              <li>
                <NavLink
                  href={routes.dashboardProfileSettings()}
                  icon={<TbSettings size={19} />}
                  title="Profile Settings"
                  selected={pathname.startsWith(
                    routes.dashboardProfileSettings()
                  )}
                />
              </li>
              <li>
                <NavLink
                  href={routes.dashboardNotifications()}
                  icon={<TbBell size={19} />}
                  title="Notifications"
                  selected={pathname.startsWith(
                    routes.dashboardNotifications()
                  )}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <button
        className="absolute lg:hidden top-4 right-4 btn btn-circle btn-soft bg-base-100 text-base-content"
        data-overlay="#sidebar"
      >
        <TbX className="size-6" />
      </button>
    </div>
  );
}

interface NavLinkProps {
  title: string;
  href: string;
  icon: ReactNode;
  selected?: boolean;
}
const NavLink = (props: NavLinkProps) => {
  return (
    <>
      <Link
        href={props.href}
        className={`flex lg:hidden group relative w-full gap-2 items-center ${
          props.selected ? "bg-base-100 font-semibold" : "hover:bg-base-100"
        } px-5 py-1.5 rounded-sm text-base-content overflow-clip`}
        data-overlay="#sidebar"
      >
        <div
          className={`absolute left-0 top-0  w-3 h-full ${
            props.selected ? "bg-primary" : "group-hover:bg-primary"
          }`}
        >
          {" "}
        </div>
        {props.icon} {props.title}
      </Link>
      <Link
        href={props.href}
        className={`group relative w-full hidden lg:flex gap-2 items-center ${
          props.selected ? "bg-base-100 font-semibold" : "hover:bg-base-100"
        } px-5 py-1.5 rounded-sm text-base-content overflow-clip`}
      >
        <div
          className={`absolute left-0 top-0  w-3 h-full ${
            props.selected ? "bg-primary" : "group-hover:bg-primary"
          }`}
        >
          {" "}
        </div>
        {props.icon} {props.title}
      </Link>
    </>
  );
};
