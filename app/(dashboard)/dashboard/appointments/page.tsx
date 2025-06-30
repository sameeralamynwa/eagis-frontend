import appConfig from "@/utills/appConfig";
import createMetadata from "@/utills/createMetadata";
import type { Metadata } from "next";
import DashBoardAppontments from "@/components/views/dashboard/appointments/DashboardAppointments";

export const metadata: Metadata = createMetadata({
  title: `Appointments - ${appConfig.appName}`,
  robots: "noindex, nofollow",
});

export default function AppointmentsPage() {
  return <DashBoardAppontments />;
}
