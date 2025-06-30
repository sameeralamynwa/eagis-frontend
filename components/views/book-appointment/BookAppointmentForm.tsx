"use client";

import useStateForm from "@/hooks/useStateForm";
import { bookAppointmentSchema } from "@/utills/dtos/appointment";
import { fakeApiCall } from "@/utills/fakeApiCall";
import { fireToast } from "@/utills/fireToast";
import { FormEventHandler, useState } from "react";
import { inferFormattedError } from "zod";

export default function BookAppointmentForm() {
  const [errors, setErrors] = useState<
    undefined | inferFormattedError<typeof bookAppointmentSchema>
  >();
  const [loading, setLoading] = useState(false);

  const { form, set, reset } = useStateForm({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    firstTime: true,
    callBackTime: "",
    reason: "",
    insurance: true,
  });

  const submit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await bookAppointmentSchema.safeParseAsync(form);
    if (!result.success) {
      setErrors(result.error.format());
      fireToast({ type: "error", desc: "VAlidation Failed" });
    } else {
      await fakeApiCall();
      fireToast({
        type: "success",
        desc: "Your Message has been recieved. We will contact you shortly",
      });
      reset();
    }
    setLoading(false);
  };

  return (
    <form onSubmit={submit}>
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6">Your Information</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div>
            <label htmlFor="firstName" className="label">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className={`input input-lg ${
                errors?.firstName?._errors && "is-invalid"
              }`}
              placeholder="Your First NAme"
              value={form.firstName}
              onChange={(e) => set("firstName", e.target.value)}
            />
            {errors?.firstName?._errors && (
              <label className="lable text-error">
                {errors?.firstName?._errors.join(", ")}
              </label>
            )}
          </div>
          <div>
            <label htmlFor="lastName" className="label">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className={`input input-lg ${
                errors?.lastName?._errors && "is-invalid"
              }`}
              placeholder="Your Last Name"
              value={form.lastName}
              onChange={(e) => set("lastName", e.target.value)}
            />
            {errors?.lastName?._errors && (
              <label className="lable text-error">
                {errors?.lastName?._errors.join(", ")}
              </label>
            )}
          </div>
          <div className="hidden md:block"></div>
          <div>
            <label htmlFor="email" className="label">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`input input-lg ${
                errors?.email?._errors && "is-invalid"
              }`}
              placeholder="abcd@example.com"
              value={form.email}
              onChange={(e) => set("email", e.target.value)}
            />
            {errors?.email?._errors && (
              <label className="lable text-error">
                {errors?.email?._errors.join(", ")}
              </label>
            )}
          </div>
          <div>
            <label htmlFor="phone" className="label">
              Phone Number
            </label>
            <input
              type="number"
              id="phone"
              name="phone"
              className={`input input-lg ${
                errors?.phone?._errors && "is-invalid"
              }`}
              placeholder="9874467896"
              value={form.phone}
              onChange={(e) => set("phone", e.target.value)}
            />
            {errors?.phone?._errors && (
              <label className="lable text-error">
                {errors?.phone?._errors.join(", ")}
              </label>
            )}
          </div>
          <div className="hidden md:block"></div>
          <div>
            <label htmlFor="dob" className="label">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              className={`input input-lg ${
                errors?.dob?._errors && "is-invalid"
              }`}
              placeholder="9874467896"
              value={form.dob}
              onChange={(e) => set("dob", e.target.value)}
            />
            {errors?.dob?._errors && (
              <label className="lable text-error">
                {errors?.dob?._errors.join(", ")}
              </label>
            )}
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-6">Appointment Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label htmlFor="firstTime" className="label block">
              Is this your first time visiting with Dr. Sara Sayed Talib Osman?
            </label>
            <div className="flex flex-none gap-4 md:col-span-2">
              <label
                className={`btn w-16 ${
                  form.firstTime == true
                    ? "btn-primary "
                    : "bg-base-200 text-base-content border-base-content/20"
                }`}
              >
                <input
                  type="radio"
                  name="firstTime"
                  className="radio radio-primary checked:radio-secondary mt-2 hidden"
                  checked={form.firstTime == true}
                  value={"true"}
                  onChange={() => set("firstTime", true)}
                />

                <span>Yes</span>
              </label>
              <label
                className={`btn w-16 ${
                  form.firstTime == false
                    ? "btn-primary "
                    : "bg-base-200 text-base-content border-base-content/20"
                }`}
              >
                <input
                  type="radio"
                  name="radio-18"
                  className="radio radio-primary checked:radio-secondary mt-2 hidden"
                  checked={form.firstTime == false}
                  value={"false"}
                  onChange={() => set("firstTime", false)}
                />

                <span>No</span>
              </label>
            </div>
          </div>
          <div className="hidden lg:block"></div>
          <div className="md:col-span-2">
            <label className="label-text" htmlFor="callBackTime">
              Preferred Callback Time
            </label>
            <select
              className="select select-lg"
              id="callBackTime"
              value={form.callBackTime}
              onChange={(e) => set("callBackTime", e.target.value)}
            >
              <option>Select preferred callback time</option>
              <option>Morning (9AM - 12AM)</option>
              <option>Afternoon (1PM - 4PM)</option>
              <option>Evening (5PM - 8PM)</option>
            </select>
            {errors?.callBackTime?._errors && (
              <label className="lable text-error">
                {errors?.callBackTime?._errors.join(", ")}
              </label>
            )}
          </div>
          <div className="hidden lg:block"></div>
          <div className="md:col-span-2">
            <label htmlFor="reason" className="label">
              Reason for the Visit
            </label>
            <textarea
              id="reason"
              name="reason"
              className={`textarea textarea-lg ${
                errors?.reason?._errors && "is-invalid"
              }`}
              placeholder="abcd@example.com"
              value={form.reason}
              onChange={(e) => set("reason", e.target.value)}
              rows={5}
            />
            {errors?.reason?._errors && (
              <label className="lable text-error">
                {errors?.reason?._errors.join(", ")}
              </label>
            )}
          </div>
          <div className="hidden lg:block"></div>

          <div className="space-y-2">
            <label htmlFor="insurance" className="label block">
              Are you insured?
            </label>
            <div className="flex flex-none gap-4 md:col-span-2">
              <label
                className={`btn w-16 ${
                  form.insurance == true
                    ? "btn-primary "
                    : "bg-base-200 text-base-content border-base-content/20"
                }`}
              >
                <input
                  type="radio"
                  name="insurance"
                  className="radio radio-primary checked:radio-secondary mt-2 hidden"
                  checked={form.insurance == true}
                  value={"true"}
                  onChange={() => set("insurance", true)}
                />

                <span>Yes</span>
              </label>
              <label
                className={`btn w-16 ${
                  form.insurance == false
                    ? "btn-primary "
                    : "bg-base-200 text-base-content border-base-content/20"
                }`}
              >
                <input
                  type="radio"
                  name="radio-18"
                  className="radio radio-primary checked:radio-secondary mt-2 hidden"
                  checked={form.insurance == false}
                  value={"false"}
                  onChange={() => set("insurance", false)}
                />

                <span>No</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <button
          type="submit"
          className="btn btn-primary btn-xl !px-10"
          disabled={loading}
        >
          {" "}
          {loading && <span className="loading loading-ring"></span>} Submit
        </button>
      </div>
    </form>
  );
}
