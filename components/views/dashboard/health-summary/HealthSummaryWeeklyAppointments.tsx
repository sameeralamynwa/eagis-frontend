"use client";

import { useEffect, useState } from "react";
import { TbArrowRight, TbCalendarMonth } from "react-icons/tb";
import useWeeklyAppointmentsData from "./useWeeklyAppointmentsData";
import Link from "next/link";
import { routes } from "@/utills/routes";

interface HealthSummaryWeeklyAppointmentsProps {
  hideViewAllLink?: boolean;
}

interface AppointmentData {
  date: string;
  title: string;
  status: string;
  time: string;
  duration: string;
}

export default function HealthSummaryWeeklyAppointments(
  props: HealthSummaryWeeklyAppointmentsProps
) {
  const { getWeeklyAppointments } = useWeeklyAppointmentsData();
  const [appointments, setAppointments] = useState<AppointmentData[]>();

  useEffect(() => {
    getWeeklyAppointments().then((res) => {
      if (res) {
        const newaAppointments: AppointmentData[] = [];
        for (const [date, data] of Object.entries(res)) {
          data.forEach((evt) => {
            newaAppointments.push({
              date: date,
              duration: evt.duration,
              status: evt.status,
              time: evt.time,
              title: evt.title,
            });
          });
        }
        setAppointments(newaAppointments);
      }
    });
  }, []);

  return (
    <div className="p-3 py-6 rounded-2xl bg-base-100 shadow-md">
      <h2 className="flex items-center justify-between gap-2 mb-4 flex-wrap text-xl font-semibold">
        <span className="flex items-center gap-2">
          <TbCalendarMonth size={20} className="text-secondary" />
          <span>
            Appointments
            <i className="text-base-content/70 text-sm"> (in 7 days) </i>
          </span>
        </span>
        {!props.hideViewAllLink ? (
          <Link
            href={routes.dashboardAppointments()}
            className="text-secondary font-normal text-base"
          >
            View All <TbArrowRight className="inline" />
          </Link>
        ) : (
          <span className="hidden"></span>
        )}
      </h2>
      {appointments &&
        appointments?.map((evnt, i) => (
          <ul key={i} className="list-inside list-disc ml-4">
            <li className="mb-2">
              <span className="text-primary">{evnt.title}</span>{" "}
              <div
                className={`inline badge badge-sm ${
                  evnt.status === "confirmed"
                    ? "badge-success"
                    : "badge-warning"
                }`}
              >
                {evnt.status}
              </div>
              <br />
              <div className="ml-5 text-sm text-base-content/70">
                {evnt.time}Hrs - {new Date(evnt.date).toDateString()}
              </div>
            </li>
          </ul>
        ))}
    </div>
  );
}
