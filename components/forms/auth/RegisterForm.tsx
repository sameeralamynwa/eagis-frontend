// In components/forms/auth/RegisterForm.tsx

"use client";

import useStateForm from "@/hooks/useStateForm";
import { RegisterFormSchema } from "@/utills/dtos/auth";
import { fireToast } from "@/utills/fireToast";
import { routes } from "@/utills/routes";
import { useRouter } from "next/navigation";
import { useState, type FormEventHandler } from "react";
import type { inferFormattedError } from "zod";
import customFetch from "@/hooks/customFetch";

export default function RegisterForm() {
  const [errors, setErrors] = useState<
    undefined | inferFormattedError<typeof RegisterFormSchema>
  >();
  const [loading, setLoading] = useState(false);
  const { form, set, reset } = useStateForm({
    // <<< FIX: The backend's UserRegisterForm expects 'name', not 'fullName'.
    // We will still use 'fullName' in the form state for a better UI field name.
    fullName: "",
    username: "", // Add username to form state
    email: "",
    password: "",
    password_confirmation: "",
  });

  const router = useRouter();

  const submit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors(undefined); // Clear previous errors

    // 1. Client-side validation with Zod
    const validationResult = RegisterFormSchema.safeParse(form);
    if (!validationResult.success) {
      setErrors(validationResult.error.format());
      fireToast({ type: "error", desc: "Please check your input." });
      setLoading(false);
      return;
    }

    // <<< FIX: Replace fake API call with a real one
    // 2. Prepare the data payload for the backend API
    const apiPayload = {
      name: validationResult.data.fullName,
      // Create a simple username from the full name. You can make this more robust later.
      username: validationResult.data.username || validationResult.data.fullName.toLowerCase().replace(/\s+/g, ''),
      email: validationResult.data.email,
      password: validationResult.data.password,
      password_confirmation: validationResult.data.password_confirmation,
    };

    // 3. Make the real API call to your FastAPI backend
    const { data, errorMessage } = await customFetch<{ detail: string }>(
      "/register",
      {
        method: "POST",
        body: apiPayload, // Send the prepared data as a JSON body
      }
    );

    if (errorMessage || !data) {
      // Use the specific error message from the backend if it exists
      fireToast({ type: "error", desc: errorMessage || "Registration Failed!" });
    } else {
      // 4. On success, show the message from the backend and redirect
      fireToast({ type: "success", desc: data.detail });
      reset();
      // Redirect to the login page so they can sign in after verifying their email
      router.push(routes.login());
    }

    setLoading(false);
  };

  return (
    // The rest of your JSX form remains the same.
    // I've updated the input fields to match the new form state.
    <form onSubmit={submit} className="flex flex-col gap-4 mt-4">
      {/* */}
      <div>
        <div>Full Name</div>
        <div
          className={`input input-lg ${
            errors?.fullName?._errors && "is-invalid"
          }`}
        >
          <span className="icon-[tabler--user] text-base-content/80 my-auto me-3 size-5 shrink-0"></span>
          <input
            id="fullName"
            name="fullName"
            placeholder="Full Name"
            value={form.fullName}
            onChange={(e) => set("fullName", e.target.value)}
          />
        </div>
        {errors?.fullName?._errors && (
          <div className="label text-error">
            {errors?.fullName?._errors.join(", ")}
          </div>
        )}
      </div>
      {/* */}
      <div>
        <div>Username</div>
        <div
          className={`input input-lg ${
            errors?.username?._errors && "is-invalid"
          }`}
        >
          <span className="icon-[tabler--at] text-base-content/80 my-auto me-3 size-5 shrink-0"></span>
          <input
            id="username"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={(e) => set("username", e.target.value)}
          />
        </div>
        {errors?.username?._errors && (
          <div className="label text-error">
            {errors?.username?._errors.join(", ")}
          </div>
        )}
      </div>
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

      {/* */}
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

      {/* */}
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
          className="btn btn-lg btn-primary w-full"
          disabled={loading}
        >
          {loading && <span className="loading loading-ring"></span>}
          Register
        </button>
      </div>
    </form>
  );
}