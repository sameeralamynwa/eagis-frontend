import AccountPreferencesForm from "@/components/forms/account/AccountPreferencesForm";
import ChangeAccountEmailForm from "@/components/forms/account/ChangeAccountEmailForm";
import ChangeAccountPasswordForm from "@/components/forms/account/ChangeAccountPasswordForm";
import DeleteAccountForm from "@/components/forms/account/DeleteAccountForm";
import UpdateAccountDetailForm from "@/components/forms/account/UpdateAccountDetailForm";
import appConfig from "@/utills/appConfig";
import createMetadata from "@/utills/createMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: `Profile Settings - ${appConfig.appName}`,
  robots: "noindex, nofollow",
});

export default function ProfileSettingsPage() {
  return (
    <div className="min-h-96 px-5 w-full ">
      <h1 className="text-3xl">Profile Settings</h1>
      <br />
      <div className=" max-w-5xl">
        <div className="bg-base-100 p-5 rounded-2xl shadow-md">
          <UpdateAccountDetailForm />
        </div>
        <br />
        <div className="divider"></div>
        <br />
        <div className="bg-base-100 p-5 rounded-2xl shadow-md">
          <ChangeAccountPasswordForm />
        </div>
        <br />
        <div className="divider"></div>
        <br />
        <div className="bg-base-100 p-5 rounded-2xl shadow-md">
          <ChangeAccountEmailForm />
        </div>
        <br />
        <div className="divider"></div>
        <br />
        <div className="bg-base-100 p-5 rounded-2xl shadow-md">
          <AccountPreferencesForm />
        </div>
        <br />
        <div className="divider"></div>
        <br />
        <div className="bg-base-100 p-5 rounded-2xl shadow-md">
          <DeleteAccountForm />
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}
