import { DoctorFiltersContextProvider } from "@/components/context/DoctorFiltersContext";
import SharedDoctorSearch from "@/components/views/shared/SharedDoctorSearch";
import appConfig from "@/utills/appConfig";
import createMetadata from "@/utills/createMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: `Appointment Schedular - ${appConfig.appName}`,
  robots: "noindex, nofollow",
});

export default function AppointmentSchedularPage() {
  return (
    <div className="min-h-96 px-5 w-full mt-4">
      <DoctorFiltersContextProvider>
        <SharedDoctorSearch title="Book Appointment" />
      </DoctorFiltersContextProvider>
    </div>
  );
}
