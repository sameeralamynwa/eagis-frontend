import Accordian from "@/components/Accordian";
import Tabs from "@/components/Tabs";
import { faqData } from "@/data/faqData";

export default function FaqPage() {
  return (
    <div className="container max-w-7xl mx-auto p-5 min-h-96">
      <br />
      <br />
      <h1 className="text-3xl font-bold text-center">
        Frequently Asked Questions
      </h1>
      <br />
      <br />
      <div>
        <Tabs
          type="pill"
          items={[
            {
              id: "general-information-accordian",
              header: "General Information",
              content: (
                <div className="mt-10">
                  <Accordian items={faqData["generalInfo"]} />
                </div>
              ),
            },
            {
              id: "users-patients-accordian",
              header: "Users & Patients",
              content: <Accordian items={faqData["users-patients"]} />,
            },
            {
              id: "healthcare-providers-accordian",
              header: "Healthcare Providers",
              content: <Accordian items={faqData["healthcare-providers"]} />,
            },
            {
              id: "clinics-booking-accordian",
              header: "Clinics & Bookings",
              content: <Accordian items={faqData["clinics-booking"]} />,
            },
            {
              id: "medical-reports-accordian",
              header: "Medical Reports",
              content: <Accordian items={faqData["medical-reports"]} />,
            },
            {
              id: "technical-accordian",
              header: "Technical",
              content: <Accordian items={faqData["technical"]} />,
            },
          ]}
        />
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
