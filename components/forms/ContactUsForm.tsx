"use client";

import useStateForm from "@/hooks/useStateForm";
import { ContactUsFormSchema } from "@/utills/dtos/contact";
import { fakeApiCall } from "@/utills/fakeApiCall";
import { fireToast } from "@/utills/fireToast";
import { type FormEventHandler, useState } from "react";
import type { inferFormattedError } from "zod";

export default function ContactUsForm() {
  const [errors, setErrors] = useState<
    undefined | inferFormattedError<typeof ContactUsFormSchema>
  >();
  const [loading, setLoading] = useState(false);
  const { form, set, reset } = useStateForm({
    name: "",
    email: "",
    message: "",
  });

  const submit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await ContactUsFormSchema.safeParseAsync(form);
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
    <form onSubmit={submit} className="-m-2 flex flex-wrap">
      <div className="w-1/2 p-2">
        <div className="relative">
          <label htmlFor="name" className="label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className={`input input-lg ${
              errors?.name?._errors && "is-invalid"
            }`}
            placeholder="Name"
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
          />
          {errors?.name?._errors && (
            <label className="lable text-error">
              {errors?.name?._errors.join(", ")}
            </label>
          )}
        </div>
      </div>
      <div className="w-1/2 p-2">
        <div className="relative">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className={`input input-lg ${
              errors?.email?._errors && "is-invalid"
            }`}
            placeholder="Email"
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
          />
          {errors?.email?._errors && (
            <label className="lable text-error">
              {errors?.email?._errors.join(", ")}
            </label>
          )}
        </div>
      </div>
      <div className="mt-4 w-full p-2">
        <div className="relative">
          <label htmlFor="message" className="label">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className={`textarea textarea-lg ${
              errors?.message?._errors && "is-invalid"
            }`}
            placeholder="Message"
            value={form.message}
            onChange={(e) => set("message", e.target.value)}
          ></textarea>
          {errors?.message?._errors && (
            <label className="lable text-error">
              {errors?.message?._errors.join(", ")}
            </label>
          )}
        </div>
      </div>
      <div className="w-full p-2 text-center">
        <button className="btn btn-primary btn-lg !px-10" disabled={loading}>
          {loading && <span className="loading loading-ring"></span>}
          Contact
        </button>
      </div>
    </form>
  );
}
