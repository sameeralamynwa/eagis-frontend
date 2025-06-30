"use client";

export default function useWeeklyAppointmentsData() {
  const todayDate = new Date();

  const getNewDate = (opt: { addDays?: number; addHours?: number }) => {
    const date = new Date(todayDate);
    if (opt.addDays) {
      date.setDate(date.getDate() + opt.addDays);
    }
    if (opt.addHours) {
      date.setHours(date.getHours() + opt.addHours);
    }

    return date.toISOString();
  };

  const getWeeklyAppointments = async () => {
    const appointements = {
      [getNewDate({ addDays: 2 })]: [
        {
          title: "Ultrasound at Aster Hospital",
          status: "confirmed",
          time: "10:00",
          duration: "1 Hour",
        },
        {
          title: "Full body Checkup",
          status: "confirmed",
          time: "14:00",
          duration: "1 Hour",
        },
      ],

      [getNewDate({ addDays: 4 })]: [
        {
          title: "Dental Appointment",
          status: "pending",
          time: "10:00",
          duration: "1 Hour",
        },
      ],
      [getNewDate({ addDays: 6 })]: [
        {
          title: "Dental Appointment",
          status: "pending",
          time: "14:00",
          duration: "1 Hour",
        },
      ],
    };
    return appointements;
  };
  return { getWeeklyAppointments };
}
