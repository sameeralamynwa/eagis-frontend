import ContactUsForm from "@/components/forms/ContactUsForm";
import SocialLinks from "@/components/SocialLinks";
import appConfig from "@/utills/appConfig";
import createMetadata from "@/utills/createMetadata";
import { routes } from "@/utills/routes";
import type { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: `Contact - ${appConfig.appName}`,
  description:
    "Your Personal Health Companion – Powered by AI, Track symptoms, consult doctors, book appointments, and get expert health tips – all in one place.",
  keywords: "Ai Healthcare",
  authorNpublisher: appConfig.appName,
  imageUrl: "/logo.png",
  canoical: appConfig.appUrl + routes.contact(),
});

export default function ContactPage() {
  return (
    <section className="body-font relative">
      <div className="max-w-7xl mx-auto px-5 py-16">
        <div className="mb-12 flex w-full flex-col text-center">
          <h1 className="title-font mb-4 text-2xl font-bold sm:text-3xl">
            Contact Us
          </h1>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3">
            Feel free to reach out to us! Whether you have a question, feedback,
            or a collaboration proposal, we&apos;d love to hear from you.
          </p>
        </div>

        <div className="mx-auto md:w-2/3 lg:w-1/2">
          {/* <!-- htmlForm --> */}
          <ContactUsForm />

          {/* <!-- footer --> */}
          <div className="mt-8 w-full border-t border-gray-800 p-2 pt-8 text-center">
            <a className="link link-secondary" href={appConfig.social.email}>
              {appConfig.social.email.replace("mailto:", "")}
            </a>
            <p className="my-5 leading-normal">{appConfig.social.address}</p>
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
}
