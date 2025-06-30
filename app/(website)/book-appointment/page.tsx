import { DoctorFiltersContextProvider } from "@/components/context/DoctorFiltersContext";
import SharedDoctorSearch from "@/components/views/shared/SharedDoctorSearch";
import appConfig from "@/utills/appConfig";
import createMetadata from "@/utills/createMetadata";
import { routes } from "@/utills/routes";
import type { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: `Book Appointment - ${appConfig.appName}`,
  description:
    "Your Personal Health Companion – Powered by AI, Track symptoms, consult doctors, book appointments, and get expert health tips – all in one place.",
  keywords: "Ai Healthcare",
  authorNpublisher: appConfig.appName,
  imageUrl: "/logo.png",
  canoical: appConfig.appUrl + routes.contact(),
});

export default function BookAppointmentPage() {
  return (
    <section className="max-w-7xl mx-auto px-5 py-14">
      <DoctorFiltersContextProvider>
        <SharedDoctorSearch title="Book Appointment" />
      </DoctorFiltersContextProvider>
    </section>
  );
}
