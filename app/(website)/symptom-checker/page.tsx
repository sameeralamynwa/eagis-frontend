import SymptomChecker from "@/components/symptom-checker/SymptomChecker";
import appConfig from "@/utills/appConfig";
import createMetadata from "@/utills/createMetadata";
import { routes } from "@/utills/routes";
import type { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: `Symptom Cheker - ${appConfig.appName}`,
  description: "Get Health tips",
  keywords: "Health tips, health articals",
  authorNpublisher: appConfig.appName,
  imageUrl: "/logo.png",
  canoical: appConfig.appUrl + routes.symptomChecker(),
});

export default async function SymptomCheckerPage() {
  return (
    <div className="max-w-4xl mx-auto mb-16 mt-4 px-5 h-[87vh]">
      <SymptomChecker />
    </div>
  );
}
