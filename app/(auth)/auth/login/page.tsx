import LoginForm from "@/components/forms/auth/LoginForm";
import appConfig from "@/utills/appConfig";
import createMetadata from "@/utills/createMetadata";
import { routes } from "@/utills/routes";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = createMetadata({
  title: `Login - ${appConfig.appName}`,
  description:
    "Your Personal Health Companion – Powered by AI, Track symptoms, consult doctors, book appointments, and get expert health tips – all in one place.",
  keywords: "Ai Healthcare",
  authorNpublisher: appConfig.appName,
  imageUrl: "/logo.png",
  canoical: appConfig.appUrl + routes.login(),
});

export default function LoginPage() {
  return (
    <div className="px-2 sm:px-4  max-w-lg w-full">
      <LoginForm />
      <div className="mb-1 flex flex-col gap-0.5 text-primary">
        <div className="text-sm">
          Dont have an account?{" "}
          <Link href={routes.register()} className="link link-secondary">
            Register Here?
          </Link>
        </div>
        <Link
          href={routes.forgotPassword()}
          className="link link-secondary text-sm"
        >
          Forgot Password?
        </Link>
        <Link
          href={routes.resendVerifyEmail()}
          className="link link-secondary text-sm"
        >
          Resend Verification Email?
        </Link>
      </div>
    </div>
  );
}
