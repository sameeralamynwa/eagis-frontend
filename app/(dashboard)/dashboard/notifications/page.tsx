import AccountNotificationList from "@/components/views/dashboard/account/AccountNotificationList";
import appConfig from "@/utills/appConfig";
import createMetadata from "@/utills/createMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: `Notifications - ${appConfig.appName}`,
  robots: "noindex, nofollow",
});

export default function NotificationsPage() {
  return (
    <div className="min-h-96 px-5 w-full mt-4">
      <h1 className="text-xl font-semibold">Notifications</h1>
      <br />
      <AccountNotificationList />
    </div>
  );
}
