"use client";

import useStateForm from "@/hooks/useStateForm";
import { ChangeAccountPasswordSchema } from "@/utills/dtos/account";
import { fakeApiCall } from "@/utills/fakeApiCall";
import { fireToast } from "@/utills/fireToast";
import { useState, type FormEventHandler } from "react";
import type { inferFormattedError } from "zod";

export default function ChangeAccountPasswordForm() {
  const [errors, setErrors] = useState<
    undefined | inferFormattedError<typeof ChangeAccountPasswordSchema>
  >();
  const [loading, setLoading] = useState(false);
  const { form, set, reset } = useStateForm({
    password: "",
    new_password: "",
    password_confirmation: "",
  });

  const submit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await ChangeAccountPasswordSchema.safeParseAsync(form);
    if (!result.success) {
      setErrors(result.error.format());
      fireToast({ type: "error", desc: "VAlidation Failed" });
    } else {
      await fakeApiCall();
      fireToast({ type: "success", desc: "Account Password Updated" });
      reset();
    }
    setLoading(false);
  };

  return (
    <form onSubmit={submit} className="flex flex-col gap-4">
      <div>
        <h2 className="text-xl font-medium leading-">
          Change Account Password
        </h2>
        <p className="mt-1 text-sm">
          Please enter your account password and choose new password
        </p>
      </div>
      {/* <!-- Old password --> */}
      <div className="relative">
        <label htmlFor="password" className="label">
          Account Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className={`input input-lg ${
            errors?.password?._errors && "is-invalid"
          }`}
          placeholder="Account Password"
          value={form.password}
          onChange={(e) => set("password", e.target.value)}
        />
        {errors?.password?._errors && (
          <label className="lable text-error">
            {errors?.password?._errors.join(", ")}
          </label>
        )}
      </div>
      {/* <!-- Old password --> */}
      <div className="relative">
        <label htmlFor="new_password" className="label">
          New Password
        </label>
        <input
          type="password"
          id="new_password"
          name="new_password"
          className={`input input-lg ${
            errors?.new_password?._errors && "is-invalid"
          }`}
          placeholder="New Password"
          value={form.new_password}
          onChange={(e) => set("new_password", e.target.value)}
        />
        {errors?.new_password?._errors && (
          <label className="lable text-error">
            {errors?.new_password?._errors.join(", ")}
          </label>
        )}
      </div>

      {/* <!-- Confirm password --> */}
      <div className="relative">
        <label htmlFor="password_confirmation" className="label">
          Confirm Password
        </label>
        <input
          type="password"
          id="password_confirmation"
          name="password_confirmation"
          className={`input input-lg ${
            errors?.password_confirmation?._errors && "is-invalid"
          }`}
          placeholder="Confirm Password"
          value={form.password_confirmation}
          onChange={(e) => set("password_confirmation", e.target.value)}
        />
        {errors?.password_confirmation?._errors && (
          <label className="lable text-error">
            {errors?.password_confirmation?._errors.join(", ")}
          </label>
        )}
      </div>

      <div className="text-end">
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading && <span className="loading loading-ring"></span>}
          Change Password
        </button>
      </div>
    </form>
  );
}
