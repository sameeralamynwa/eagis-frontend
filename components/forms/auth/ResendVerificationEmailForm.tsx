"use client";

import useStateForm from "@/hooks/useStateForm";
import { ResendVerificationEmailFormSchema } from "@/utills/dtos/auth";
import { fireToast } from "@/utills/fireToast";
import { routes } from "@/utills/routes";
import { useRouter } from "next/navigation";
import { useState, type FormEventHandler } from "react";
import type { inferFormattedError } from "zod";
// <<< FIX: Import the REAL customFetch
import customFetch from "@/hooks/customFetch";

export default function ResendVerificationEmailForm() {
  const [errors, setErrors] = useState<
    undefined | inferFormattedError<typeof ResendVerificationEmailFormSchema>
  >();
  const [loading, setLoading] = useState(false);
  const { form, set, reset } = useStateForm({
    email: "",
  });

  const router = useRouter();

  const submit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors(undefined); // Clear previous errors

    const result = ResendVerificationEmailFormSchema.safeParse(form);
    if (!result.success) {
      setErrors(result.error.format());
      fireToast({ type: "error", desc: "Please check your input." });
      setLoading(false);
      return;
    }

    // <<< FIX: Replace fake API call with a real one
    const { data, errorMessage } = await customFetch<{ detail: string }>(
      "/re-verfiy-email", // Note the typo in the URL path from your backend
      {
        method: "POST",
        body: {
          email: result.data.email,
        },
      }
    );

    if (errorMessage) {
      fireToast({ type: "error", desc: errorMessage });
    } else if (data) {
      fireToast({ type: "success", desc: data.detail });
      reset();
      // On success, redirect to login so the user can try signing in again
      router.push(routes.login());
    }
    
    setLoading(false);
  };

  return (
    <form onSubmit={submit} className="flex flex-col gap-4 mt-4">
      {/* */}
      <div>
        <div>Email</div>
        <div
          className={`input input-lg ${errors?.email?._errors && "is-invalid"}`}
        >
          <span className="icon-[tabler--mail] text-base-content/80 my-auto me-3 size-5 shrink-0"></span>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
          />
        </div>
        {errors?.email?._errors && (
          <div className="label text-error">
            {errors?.email?._errors.join(", ")}
          </div>
        )}
      </div>

      <div>
        <button
          type="submit"
          className="btn btn-primary btn-lg w-full"
          disabled={loading}
        >
          {loading && <span className="loading loading-ring"></span>}
          Resend Verification Email
        </button>
      </div>
    </form>
  );
}