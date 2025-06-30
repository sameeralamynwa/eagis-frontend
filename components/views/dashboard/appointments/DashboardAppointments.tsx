"use client";

import { routes } from "@/utills/routes";
import Link from "next/link";
import { TbPlus } from "react-icons/tb";
import HealthSummaryWeeklyAppointments from "../health-summary/HealthSummaryWeeklyAppointments";
import CalendarView from "./CalendarView";

export default function DashBoardAppontments() {
  return (
    <div className="min-h-96 px-5 w-full ">
      <div className="flex justify-between gap-4 flex-wrap mt-2">
        <h1 className="text-3xl">Appointments</h1>
        <Link
          href={routes.dashboardBookAppointment()}
          className="btn btn-primary text-nowrap"
        >
          <TbPlus /> New Appointment
        </Link>
      </div>
      <br />
      <br />
      <HealthSummaryWeeklyAppointments hideViewAllLink />
      <br />
      <br />

      <div className="">
        <CalendarView
        // currentMonthDate={selectedMonthDate}
        // appontments={appointmentsData}
        />
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}
