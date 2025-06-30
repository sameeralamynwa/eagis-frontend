"use client";

import { TbActivity } from "react-icons/tb";

export default function HealthSummaryHealthTips() {
  const events = [
    {
      status: "Blood Test",
      date: "15/10/2020 10:30",
      icon: "pi pi-shopping-cart",
      color: "#9C27B0",
      image: "game-controller.jpg",
    },
    {
      status: "Full Body checkup",
      date: "15/10/2020 14:00",
      icon: "pi pi-cog",
      color: "#673AB7",
    },
    {
      status: "Dental Treatment",
      date: "15/10/2020 16:15",
      icon: "pi pi-shopping-cart",
      color: "#FF9800",
    },
    {
      status: "Back bone surgery",
      date: "16/10/2020 10:00",
      icon: "pi pi-check",
      color: "#607D8B",
    },
  ];
  return (
    <div className="p-3 py-6 rounded-2xl bg-base-100 shadow-md">
      <h2 className="flex items-center gap-2  flex-wrap text-xl font-semibold">
        <TbActivity size={20} className="text-secondary" />
        Recent Activities
      </h2>
      <ul className="timeline timeline-vertical timeline-compact ml-14">
        {events.map((e, i) => (
          <li key={i}>
            <div className="timeline-middle text-nowrap text-base text-base-content/70">
              {e.date}
            </div>
            <div className="timeline-end pl-14 pt-4">
              <h3 className="font-bold">{e.status}</h3>
              <p className="text-sm text-base-content/50 font-semibold">
                California, USA
              </p>
              <p className="text-sm text-base-content/50">{e.date}</p>
            </div>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}
