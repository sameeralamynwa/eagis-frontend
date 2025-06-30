import appConfig from "@/utills/appConfig";
import createMetadata from "@/utills/createMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: `Medical Records - ${appConfig.appName}`,
  robots: "noindex, nofollow",
});

export default function MedicalRecordsPage() {
  return (
    <div className="min-h-96 px-5 w-full ">
      <h1 className="text-3xl">Medical Records</h1>
      <br />
    </div>
  );
}
