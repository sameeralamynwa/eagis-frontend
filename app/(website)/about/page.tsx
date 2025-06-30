import AboutOurTeam from "@/components/views/about/AboutOurTeam";
import AboutSection1 from "@/components/views/about/AboutSection1";
import appConfig from "@/utills/appConfig";
import createMetadata from "@/utills/createMetadata";
import { routes } from "@/utills/routes";
import type { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: `About - ${appConfig.appName}`,
  description:
    "Your Personal Health Companion – Powered by AI, Track symptoms, consult doctors, book appointments, and get expert health tips – all in one place.",
  keywords: "Ai Healthcare",
  authorNpublisher: appConfig.appName,
  imageUrl: "/logo.png",
  canoical: appConfig.appUrl + routes.about(),
});

export default function AboutPage() {
  return (
    <div>
      <AboutSection1 />
      <AboutOurTeam />
    </div>
  );
}
