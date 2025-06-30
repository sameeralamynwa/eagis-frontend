import HealthSummaryRecentActivities from "@/components/views/dashboard/health-summary/HealthSummaryHealthTips";
import HealthSummaryHealthTips from "@/components/views/dashboard/health-summary/HealthSummaryRecentActivities";
import HealthSummarySideNotifications from "@/components/views/dashboard/health-summary/HealthSummarySideNotifications";
import HealthSummaryWeeklyAppointments from "@/components/views/dashboard/health-summary/HealthSummaryWeeklyAppointments";
import appConfig from "@/utills/appConfig";
import createMetadata from "@/utills/createMetadata";
import { Metadata } from "next";
import { TbAlertCircle, TbCircleCheck } from "react-icons/tb";

export const metadata: Metadata = createMetadata({
  title: `Health Summary - ${appConfig.appName}`,
  robots: "noindex, nofollow",
});

export default function DashboardHealthSummaryPage() {
  return (
    <div className="min-h-96 w-full p-3 pb-16">
      <div className="bg-primary rounded-lg text-primary-content p-5 mb-4 shadow-md">
        <h1 className="text-3xl">
          Welcome <strong>John Doe</strong>,
        </h1>
        <br />
        <div className="alert alert-primary" role="alert">
          <ul className="w-full space-y-1 text-primary-content/70">
            <li className="">
              <TbCircleCheck className="inline text-success" size={22} /> Your
              last checkup was normal
            </li>
            <li className="">
              {" "}
              <TbAlertCircle className="inline text-warning" size={22} /> High
              cholestrol detected
            </li>
          </ul>
        </div>
      </div>
      <div className="flex gap-6">
        <div className="lg:w-2/3 ">
          <HealthSummaryWeeklyAppointments />
          <br />
          <HealthSummaryRecentActivities />
          <br />
          <HealthSummaryHealthTips />
        </div>
        <HealthSummarySideNotifications />
      </div>
    </div>
  );
}
