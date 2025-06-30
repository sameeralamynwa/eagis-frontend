import { globalJsonLdSchema } from "@/data/jsonLd/globalJsonLdSchema";
import JsonLd from "@/components/JsonLd";
import WebNavbar from "@/components/layouts/weblayout/WebNavbar";
import WebFooter from "@/components/layouts/weblayout/WebFooter";
import SymptomCheckerFloatting from "@/components/symptom-checker/SymptomCheckerFloatting";
import { SymptomCheckerContextProvider } from "@/components/context/SymptomCheckerContext";

export default function WebSiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <JsonLd schema={globalJsonLdSchema} />
      <SymptomCheckerContextProvider>
      <div className="flex flex-col justify-center min-h-screen">
        <WebNavbar />
        <main className="grow">{children}</main>
        <WebFooter />
      </div>
      <SymptomCheckerFloatting />
      </SymptomCheckerContextProvider>
    </>
  );
}