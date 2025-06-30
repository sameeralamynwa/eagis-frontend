"use client";

import useStateForm from "@/hooks/useStateForm";
import { LoginFormSchema } from "@/utills/dtos/auth";
import { fireToast } from "@/utills/fireToast";
import { routes } from "@/utills/routes";
import { useRouter } from "next/navigation";
import { useState, type FormEventHandler } from "react";
import { type inferFormattedError } from "zod";
import { MdOutlinePersonalInjury } from "react-icons/md";
import { TbBrandApple, TbBrandGoogle, TbHospital } from "react-icons/tb";
import appConfig from "@/utills/appConfig";
import { useAuthConext } from "@/components/context/AuthContext";
import customFetch from "@/hooks/customFetch";
import { IAuthContext } from "@/utills/types/IAuthContext";

export default function LoginForm() {
  const [errors, setErrors] = useState<
    undefined | inferFormattedError<typeof LoginFormSchema>
  >();
  const [loading, setLoading] = useState(false);
  const { form, set, reset } = useStateForm({
    loginType: "user" as "user" | "healthcare",
    email: "",
    password: "",
  });
  const { signInLocal } = useAuthConext();
  const router = useRouter();

  const submit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors(undefined);

    const validationResult = LoginFormSchema.safeParse(form);
    if (!validationResult.success) {
      setErrors(validationResult.error.format());
      fireToast({ type: "error", desc: "Please check your input." });
      setLoading(false);
      return;
    }

    // <<< FIX: Prepare a simple JSON object for the request body
    const body = {
      email: validationResult.data.email,
      password: validationResult.data.password,
    };
    
    // Make the real API call to your FastAPI backend
    const { data, errorMessage } = await customFetch<{
      access_token: string, 
      token_type: string,
      user: IAuthContext['user']
    }>('/login', {
      method: "POST",
      // <<< FIX: Pass the JSON object directly. customFetch will handle stringifying it.
      body: body,
      // No need to set Content-Type, customFetch handles it for JSON.
    });

    if (errorMessage || !data) {
      fireToast({ type: "error", desc: errorMessage || "Login Failed! Invalid credentials." });
    } else {
      const expiryDate = new Date(new Date().getTime() + 1000 * 60 * 60 * 24); 
      signInLocal(
        {
          user: data.user,
          token: data.access_token,
        },
        expiryDate
      );
      fireToast({ type: "success", desc: "Login Successful!" });
      reset();
      router.push(routes.dashboardHealthSummary()); 
    }
    
    setLoading(false);
  };

  return (
    // The rest of your JSX form is correct and does not need changes.
    <form onSubmit={submit} className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-2">
        <label
          className={`w-full flex flex-row md:flex-col items-center md:items-start gap-1 font-bold border border-base-content/20 p-3 md:p-5 bg-base-200 rounded-2xl cursor-pointer text-sm md:text-base ${
            form.loginType === "user"
              ? "bg-secondary text-primary-content "
              : ""
          }`}
        >
          <input
            type="radio"
            name="radio-18"
            className="radio radio-primary checked:radio-secondary mt-2 hidden"
            checked={form.loginType === "user"}
            value={"user"}
            onChange={(e) => set("loginType", e.target.value)}
          />

          <MdOutlinePersonalInjury className="size-4 md:size-6" />

          <span>Patient Service</span>
        </label>
        <label
          className={`w-full flex flex-row md:flex-col items-center md:items-start gap-1 font-bold border border-base-content/20 p-3 md:p-5 bg-base-200 rounded-2xl cursor-pointer text-sm md:text-base ${
            form.loginType === "healthcare"
              ? "bg-secondary text-primary-content "
              : ""
          }`}
        >
          <input
            type="radio"
            name="radio-18"
            className="radio radio-primary checked:radio-secondary mt-2 hidden"
            checked={form.loginType === "healthcare"}
            value={"healthcare"}
            onChange={(e) => set("loginType", e.target.value)}
          />
          <TbHospital className="size-4 md:size-6" />

          <span>Healthcare Service</span>
        </label>
      </div>
      <div className="py-3 text-center sm:text-start">
        {form.loginType === "user" && (
          <>
            <h1 className="text-lg font-bold mb-1">Patient Login</h1>
            <p className="text-sm">
              Please use your patient credentials below to access{" "}
              {appConfig.appName} application
            </p>
          </>
        )}

        {form.loginType === "healthcare" && (
          <>
            <h1 className="text-lg font-bold">Healthcare Providers Login</h1>
            <p className="text-sm">
              Please use your patient credentials below to access{" "}
              {appConfig.appName} Healthcare Provider services
            </p>
          </>
        )}
      </div>
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
      <div>
        <button
          type="submit"
          className="btn btn-primary btn-lg w-full "
          disabled={loading}
        >
          {loading && <span className="loading loading-ring"></span>}
          Login
        </button>
      </div>
      <div className="divider my-1" />
      <div className="flex justify-center gap-2 mb-4">
        <a className="btn btn-lg btn-soft">
          <TbBrandGoogle className="size-6" />
          Google Login
        </a>
        <a className="btn btn-lg btn-soft">
          <TbBrandApple className="size-6" />
          Apple Login
        </a>
      </div>
    </form>
  );
}