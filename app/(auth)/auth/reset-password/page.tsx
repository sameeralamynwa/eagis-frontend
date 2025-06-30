import ResetPasswordForm from "@/components/forms/auth/ResetPasswordForm";
import appConfig from "@/utills/appConfig";
import createMetadata from "@/utills/createMetadata";
import { routes } from "@/utills/routes";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = createMetadata({
  title: `Reset Password - ${appConfig.appName}`,
  description:
    "Your Personal Health Companion – Powered by AI, Track symptoms, consult doctors, book appointments, and get expert health tips – all in one place.",
  keywords: "Ai Healthcare",
  authorNpublisher: appConfig.appName,
  imageUrl: "/logo.png",
  canoical: appConfig.appUrl + routes.resetPassword(),
});

export default function ResetPasswordPage() {
  return (
    <div className="px-2 sm:px-4  max-w-lg w-full">
      <div className="text-center sm:text-start">
        <h4 className="text-2xl font-bold mb-1">Choose New Password!</h4>
        <p className="mb-0">Please enter your new password</p>
      </div>
      <ResetPasswordForm />
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
