"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timegrid from "@fullcalendar/timegrid";
import listGrid from "@fullcalendar/list";
import useWeeklyAppointmentsData from "../health-summary/useWeeklyAppointmentsData";
import { useEffect, useState } from "react";

interface AppointmentData {
  date: string;
  title: string;
  status: string;
  time: string;
  duration: string;
}

export default function CalendarView() {
  const { getWeeklyAppointments } = useWeeklyAppointmentsData();
  const [appointments, setAppointments] = useState<AppointmentData[]>([]);

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
    <div className="card flex not-prose p-4 w-full">
      <FullCalendar
        plugins={[dayGridPlugin, timegrid, listGrid]}
        initialView="dayGridMonth"
        events={appointments.map((evt) => ({
          title: evt.title,
          date: new Date(evt.date).toISOString().split("T")[0],
        }))}
        eventContent={EventContent}
        headerToolbar={{
          left: "prev,next title",
          right: "today,dayGridMonth,timeGridWeek,timeGridDay,listMonth",
        }}
        buttonText={{
          month: "Month",
          week: "Week",
          day: "Day",
          list: "List",
        }}
      />
    </div>
  );
}

function EventContent(eventInfo: Record<string, any>) {
  return (
    <div className="w-full overflow-clip">
      <b>{eventInfo?.event?.title}</b>
      <i>{eventInfo?.event?.date}</i>
    </div>
  );
}
