import { SymptomCheckerContextProvider } from "@/components/context/SymptomCheckerContext";
import SymptomChekcer from "@/components/symptom-checker/SymptomChecker";
import appConfig from "@/utills/appConfig";
import createMetadata from "@/utills/createMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: `Symptom Checker - ${appConfig.appName}`,
  robots: "noindex, nofollow",
});

export default function SymptomCheckerPage() {
  return (
    <div className="min-h-96 px-5 w-full ">
      <div className="relative min-h-[50vh] h-[85vh] max-w-5xl">
        <SymptomCheckerContextProvider>
          <SymptomChekcer />
        </SymptomCheckerContextProvider>
      </div>
    </div>
  );
}
