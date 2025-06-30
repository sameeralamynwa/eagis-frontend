"use client";

import { routes } from "@/utills/routes";
import Link from "next/link";
import { TbBell, TbClockCheck, TbX } from "react-icons/tb";

export default function HealthSummarySideNotifications() {
  return (
    <>
      <div className="hidden lg:block lg:w-1/3  h-max ">
        <Reminders />
        <br />
        <Notifications />
      </div>
      <div className="fixed top-[45vh] right-0 lg:hidden z-10">
        <button
          className="btn btn-square btn-lg"
          data-overlay="#notification-sidebar"
        >
          <TbBell size={28} />
        </button>
      </div>
      <div
        id="notification-sidebar"
        className="overlay overlay-open:translate-x-0 drawer drawer-end hidden fixed z-[122]"
        role="dialog"
        tabIndex={-1}
      >
        <div className="p-3 mt-8 overflow-y-scroll scrollbar-none">
          <Reminders />
          <br />
          <Notifications />
        </div>
        <button
          className="absolute lg:hidden top-2 right-2 btn btn-circle btn-soft bg-base-100 text-base-content"
          data-overlay="#notification-sidebar"
        >
          <TbX className="size-6" />
        </button>
      </div>
    </>
  );
}

const Reminders = () => {
  return (
    <div className="bg-base-100 shadow-md rounded-2xl p-3">
      <h2 className="flex items-center gap-2 flex-wrap text-lg font-semibold">
        <TbClockCheck size={20} className="text-secondary" />
        <span>Reminders</span>
      </h2>
      <div className="divider mt-2 mb-4"></div>
      <div className="space-y-4">
        <div className="border p-2 rounded-lg border-base-content/10">
          <p className="leading-4 text-base">
            Dental Appointment{" "}
            <i className="text-base-content/50 text-xs text-end">
              {" "}
              on Sunday 17 May 2025
            </i>
          </p>

          <div className="text-end">
            <button className="btn btn-xs btn-warning btn-text">
              Reschedule
            </button>
            <button className="btn btn-xs btn-success btn-text">Confirm</button>
          </div>
        </div>
        <div className="border p-2 rounded-lg border-base-content/10">
          <p className="leading-4 text-base">
            Blood Test{" "}
            <i className="text-base-content/50 text-xs text-end">
              {" "}
              on Sunday 17 May 2025
            </i>
          </p>

          <div className="text-end">
            <button className="btn btn-xs btn-warning btn-text">
              Reschedule
            </button>
            <button className="btn btn-xs btn-success btn-text">Confirm</button>
          </div>
        </div>
        <div className="border p-2 rounded-lg border-base-content/10">
          <p className="leading-4 text-base">
            Dental Appointment on{" "}
            <i className="text-base-content/50 text-xs text-end">
              {" "}
              Sunday 17 May 2025
            </i>
          </p>

          <div className="text-end">
            <button className="btn btn-xs btn-warning btn-text">
              Reschedule
            </button>
            <button className="btn btn-xs btn-success btn-text">Confirm</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Notifications = () => {
  return (
    <div className="bg-base-100 shadow-md rounded-2xl p-3">
      <h2 className="flex items-center justify-between gap-2 flex-wrap text-lg font-semibold">
        <span className="flex items-center gap-2 ">
          <TbBell size={20} className="text-secondary" />
          <span>Notifications</span>
        </span>
        <Link
          href={routes.dashboardNotifications()}
          className="text-secondary text-base font-normal"
        >
          View All
        </Link>
      </h2>
      <div className="divider mt-2 mb-4"></div>

      <ul className="space-y-2">
        <li>
          <Notification
            message="Medical Report from Aster Hostpital"
            title="Medical Report"
            date="10:30, 17 May"
          />
        </li>
        <li>
          <Notification
            message="Your appointment on 17 may was canceled"
            title="Appointment Canceled"
            date="10:30, 17 May"
          />
        </li>
        <li>
          <Notification
            title="Critical Health Issue"
            message="Your Blood cholestrol is high, Get Health Sugestion from AI"
            date="10:30, 17 May"
          />
        </li>
      </ul>
    </div>
  );
};

const Notification = ({
  date,
  message,
  title,
}: {
  title: string;
  message: string;
  date: string;
}) => {
  return (
    <Link
      href={routes.dashboardNotifications()}
      className="flex flex-col gap-1 hover:bg-base-200 p-2 rounded-lg border border-base-content/10"
    >
      <span className="font-semibold">{title}</span>
      <span className="text-base-content/70 text-sm">{message}</span>
      <span className="text-xs text-base-content/70 self-end">{date}</span>
    </Link>
  );
};
