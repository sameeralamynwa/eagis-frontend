"use client";

import { fakeApiCall } from "@/utills/fakeApiCall";
import { fireToast } from "@/utills/fireToast";
import { routes } from "@/utills/routes";
import { useRouter } from "next/navigation";
import { useState, type FormEventHandler } from "react";

export default function DeleteAccountForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const submit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = confirm(
      "Confirm account delete action! This axction will permanentaly remove your account, would like to proceed?"
    );
    if (!result) {
      return;
    } else {
      await fakeApiCall();
      fireToast({ type: "success", desc: "Account Deleted" });
      router.push(routes.home());
    }
    setLoading(false);
  };

  return (
    <>
      <form onSubmit={submit}>
        <h2 className="text-xl mb-6 font-semibold">Delete My Acccount</h2>
        <div className="text-end">
          <button
            type="submit"
            className="btn btn-error btn-soft"
            disabled={loading}
          >
            {loading && <span className="loading loading-ring"></span>}Delete My
            Account
          </button>
        </div>
      </form>
    </>
  );
}
