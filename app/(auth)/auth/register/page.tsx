import RegisterForm from "@/components/forms/auth/RegisterForm";
import appConfig from "@/utills/appConfig";
import createMetadata from "@/utills/createMetadata";
import { routes } from "@/utills/routes";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = createMetadata({
  title: `Register - ${appConfig.appName}`,
  description:
    "Your Personal Health Companion – Powered by AI, Track symptoms, consult doctors, book appointments, and get expert health tips – all in one place.",
  keywords: "Ai Healthcare",
  authorNpublisher: appConfig.appName,
  imageUrl: "/logo.png",
  canoical: appConfig.appUrl + routes.register(),
});

export default function RegisterPage() {
  return (
    <div className="px-2 sm:px-4  max-w-lg w-full">
      <div className="text-center sm:text-start">
        <h4 className="text-2xl font-bold mb-1">Register New Account</h4>
        <p className="mb-0">
          Be part of {appConfig.appName} family and access Ai Health services.
        </p>
      </div>
      <RegisterForm />
      <br />
      <div className="mb-1 flex flex-col text-primary">
        <div className="text-sm">
          Already Have Account?{" "}
          <Link href={routes.login()} className="link link-secondary">
            Login here
          </Link>
        </div>
      </div>
    </div>
  );
}
