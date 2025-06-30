import ForgotPasswordForm from "@/components/forms/auth/ForgotPasswordForm";
import appConfig from "@/utills/appConfig";
import createMetadata from "@/utills/createMetadata";
import { routes } from "@/utills/routes";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = createMetadata({
  title: `Forgot Password - ${appConfig.appName}`,
  description:
    "Your Personal Health Companion – Powered by AI, Track symptoms, consult doctors, book appointments, and get expert health tips – all in one place.",
  keywords: "Ai Healthcare",
  authorNpublisher: appConfig.appName,
  imageUrl: "/logo.png",
  canoical: appConfig.appUrl + routes.forgotPassword(),
});

export default function ForgotPasswordPage() {
  return (
    <div className="px-2 sm:px-4  max-w-lg w-full">
      <div className="text-center sm:text-start">
        <h4 className="text-2xl font-bold mb-1">Forgot Password ?</h4>
        <p className="mb-0">
          Enter your registered Username or Email address below.
        </p>
      </div>
      <ForgotPasswordForm />
      <br />
      <div className="mb-1 flex flex-col text-primary">
        <div className="text-sm">
          Dont have an account?{" "}
          <Link href={routes.register()} className="link link-secondary">
            Register Here?
          </Link>
        </div>
        <div className="text-sm">
          or{" "}
          <Link href={routes.login()} className="link link-secondary">
            Login Here?
          </Link>
        </div>
      </div>
    </div>
  );
}
