import DoctorDetailSection1 from "@/components/views/DoctorDetail/DoctorDetailSection1";
import appConfig from "@/utills/appConfig";
import createMetadata from "@/utills/createMetadata";
import { routes } from "@/utills/routes";
import type { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: `Doctor detail - ${appConfig.appName}`,
  description:
    "Your Personal Health Companion – Powered by AI, Track symptoms, consult doctors, book appointments, and get expert health tips – all in one place.",
  keywords: "Ai Healthcare",
  authorNpublisher: appConfig.appName,
  imageUrl: "/logo.png",
  canoical: appConfig.appUrl + routes.contact(),
});

export default function DoctorDetailPage() {
  return (
    <section className="bg-secondary/15">
      <div className="max-w-7xl mx-auto px-5 py-14">
        <DoctorDetailSection1 />
      </div>
    </section>
  );
}
