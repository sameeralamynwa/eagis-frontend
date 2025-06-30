"use client";

// import { changeAccountEmailAction } from "@/actions/account";

import useStateForm from "@/hooks/useStateForm";
import { ChangeAccountEmailSchema } from "@/utills/dtos/account";
import { fakeApiCall } from "@/utills/fakeApiCall";
import { fireToast } from "@/utills/fireToast";
import { useState, type FormEventHandler } from "react";
import { inferFormattedError } from "zod";

export default function ChangeAccountEmailForm() {
  const [errors, setErrors] = useState<
    undefined | inferFormattedError<typeof ChangeAccountEmailSchema>
  >();
  const [loading, setLoading] = useState(false);
  const { form, set, reset } = useStateForm({
    email: "",
  });

  const submit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await ChangeAccountEmailSchema.safeParseAsync(form);
    if (!result.success) {
      setErrors(result.error.format());
      fireToast({ type: "error", desc: "VAlidation Failed" });
    } else {
      await fakeApiCall();
      fireToast({ type: "success", desc: "Account Email Updated" });
      reset();
    }
    setLoading(false);
  };

  return (
    <form onSubmit={submit} className="flex flex-col gap-4">
      <div>
        <h2 className="text-xl font-medium leading-6">Change Account Eamil</h2>
        <p className="mt-1 text-sm text-warning">
          Caution! Changing account email requires re verification of email.
        </p>
      </div>
      {/* <!-- New Email --> */}
      <div className="relative">
        <label htmlFor="email" className="label">
          New Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className={`input input-lg ${errors?.email?._errors && "is-invalid"}`}
          placeholder="New Email"
          value={form.email}
          onChange={(e) => set("email", e.target.value)}
        />
        {errors?.email?._errors && (
          <label className="lable text-error">
            {errors?.email?._errors.join(", ")}
          </label>
        )}
      </div>

      <div className="text-end">
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading && <span className="loading loading-ring"></span>}
          Change Email
        </button>
      </div>
    </form>
  );
}
