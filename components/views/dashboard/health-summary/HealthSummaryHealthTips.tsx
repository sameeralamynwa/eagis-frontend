"use client";

import { TbHandFingerRight, TbHeartPlus } from "react-icons/tb";

export default function HealthSummaryRecentActivities() {
  return (
    <div className="p-3 rounded-2xl py-6 shadow-md bg-base-100">
      <h2 className="flex items-center gap-2 mb-4  flex-wrap text-xl font-semibold">
        <TbHeartPlus size={20} className="text-secondary" />
        Health Tips
      </h2>
      <div className="px-5">
        <h3 className="font-semibold">
          <TbHandFingerRight className="inline text-secondary" /> To Stay
          healthy, Eat Healthy
        </h3>
        <ul className="list-disc ml-12 mb-2 py-2 [&>li]:text-base-content/70 text-base">
          <li>Include whole fruits instead of fruit juice</li>
          <li>Include whole wheat flour instead of refine flour</li>
          <li>Exclude extra salt and salted snacks</li>
          <li>Include small and frequent meals</li>
        </ul>
        <h3 className="text-lg font-semibold">
          <TbHandFingerRight className="inline text-secondary" /> Essential Tips
          for a Happier life
        </h3>
        <ul className="list-disc ml-12 mb-2 py-2 [&>li]:text-base-content/70 text-base">
          <li>Priortize sleep, Sleep at least for 8 hours</li>
          <li>Excercise Regularly</li>
          <li>Drink more water and fewer sweet drinks</li>
          <li>Spend more time with nature</li>
          <li>Reduce your stress</li>
        </ul>
      </div>
    </div>
  );
}
