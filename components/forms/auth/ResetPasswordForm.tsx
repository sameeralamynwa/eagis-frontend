"use client";

import useStateForm from "@/hooks/useStateForm";
import { ResetPasswordFormSchema } from "@/utills/dtos/auth";
import { fakeApiCall } from "@/utills/fakeApiCall";
import { fireToast } from "@/utills/fireToast";
import { routes } from "@/utills/routes";
import { useRouter } from "next/navigation";
import { useState, type FormEventHandler } from "react";
import type { inferFormattedError } from "zod";

export default function ResetPasswordForm() {
  const [errors, setErrors] = useState<
    undefined | inferFormattedError<typeof ResetPasswordFormSchema>
  >();
  const [loading, setLoading] = useState(false);
  const { form, set, reset } = useStateForm({
    password: "",
    password_confirmation: "",
  });

  const router = useRouter();

  const submit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await ResetPasswordFormSchema.safeParseAsync(form);
    if (!result.success) {
      setErrors(result.error.format());
      fireToast({ type: "error", desc: "VAlidation Failed" });
    } else {
      await fakeApiCall();
      fireToast({ type: "success", desc: "Password Reset Successfull" });
      reset();
      router.push(routes.login());
    }
    setLoading(false);
  };

  return (
    <form onSubmit={submit} className="flex flex-col gap-4 mt-4">
      {/* <!-- password --> */}
      <div>
        <div>Password</div>
        <div
          className={`input input-lg ${
            errors?.password?._errors && "is-invalid"
          }`}
        >
          <span className="icon-[tabler--lock] text-base-content/80 my-auto me-3 size-5 shrink-0"></span>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => set("password", e.target.value)}
          />
        </div>
        {errors?.password?._errors && (
          <div className="label text-error">
            {errors?.password?._errors.join(", ")}
          </div>
        )}
      </div>
      {/* <!-- password confirmation --> */}
      <div>
        <div>Confirm Password</div>
        <div
          className={`input input-lg ${
            errors?.password_confirmation?._errors && "is-invalid"
          }`}
        >
          <span className="icon-[tabler--lock] text-base-content/80 my-auto me-3 size-5 shrink-0"></span>
          <input
            type="password"
            id="password_confirmation"
            name="password_confirmation"
            placeholder="Confirm Password"
            value={form.password_confirmation}
            onChange={(e) => set("password_confirmation", e.target.value)}
          />
        </div>
        {errors?.password_confirmation?._errors && (
          <div className="label text-error">
            {errors?.password_confirmation?._errors.join(", ")}
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
          Change Password
        </button>
      </div>
    </form>
  );
}
