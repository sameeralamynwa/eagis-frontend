// components/forms/account/UpdateAccountDetailForm.tsx

"use client";

import { useAuthConext } from "@/components/context/AuthContext";
import customFetch from "@/hooks/customFetch";
import useStateForm from "@/hooks/useStateForm";
import appConfig from "@/utills/appConfig";
import { UpdateAccountDetailSchema } from "@/utills/dtos/account";
import { fireToast } from "@/utills/fireToast";
import Image from "next/image";
import { useState, type FormEventHandler, useEffect, useRef } from "react";
import type { inferFormattedError } from "zod";

export default function UpdateAccountDetailForm() {
  const [errors, setErrors] = useState<
    undefined | inferFormattedError<typeof UpdateAccountDetailSchema>
  >();
  const [loading, setLoading] = useState(false);
  const { authContext, updateUserInContext } = useAuthConext();
  const user = authContext.user;

  const avatarFileRef = useRef<HTMLInputElement>(null);

  const { form, set } = useStateForm({
    name: "",
    username: "",
    about: "",
  });

  useEffect(() => {
    if (user) {
      set("name", user.name || "");
      set("username", user.username || "");
      set("about", user.profile?.about || "");
    }
  }, [user, set]);

  const submit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors(undefined);

    const validationResult = UpdateAccountDetailSchema.safeParse(form);
    if (!validationResult.success) {
      setErrors(validationResult.error.format());
      fireToast({ type: "error", desc: "Validation Failed" });
      setLoading(false);
      return;
    }
    
    const formData = new FormData();
    formData.append("name", validationResult.data.name);
    
    if (validationResult.data.about) {
      formData.append("about", validationResult.data.about);
    }

    // --- DEBUGGING LOGS START HERE ---
    console.log("--- [DEBUG] Checking for avatar file ---");

    const avatarFile = avatarFileRef.current?.files?.[0];
    
    console.log("[DEBUG] File Input Element:", avatarFileRef.current);
    console.log("[DEBUG] Selected file object:", avatarFile);

    if (avatarFile) {
      console.log(`[DEBUG] File found: '${avatarFile.name}'. Appending to FormData.`);
      formData.append("avatar", avatarFile);
    } else {
      console.log("[DEBUG] No file selected.");
    }
    
    console.log("[DEBUG] Final FormData content before sending:");
    // FormData is tricky to log directly, so we iterate over it.
    for (const pair of formData.entries()) {
      console.log(`  - ${pair[0]}:`, pair[1]);
    }
    console.log("--- [DEBUG] End of file check ---");
    // --- DEBUGGING LOGS END HERE ---

    const { data, errorMessage } = await customFetch<IAuthContext['user']>(
      "/account/update", 
      {
        method: "PUT",
        body: formData,
      }
    );

    if (errorMessage) {
      fireToast({ type: "error", desc: errorMessage });
    } else if (data) {
      fireToast({ type: "success", desc: "Account Details Updated!" });
      updateUserInContext(data);
    }
    
    setLoading(false);
  };

  return (
    // The JSX part of your form is unchanged.
    <form onSubmit={submit}>
      <div>
        <h2 className="text-xl font-medium leading-6">Profile</h2>
        <p className="mt-1 text-sm">
          This information will be displayed publicly so be careful what you
          share.
        </p>
      </div>
      <div className="mt-6 flex flex-col lg:flex-row">
        <div className="flex-grow space-y-6">
          <div className="relative">
            <label htmlFor="name" className="label">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={`input input-lg ${
                errors?.name?._errors && "is-invalid"
              }`}
              placeholder="Full Name"
              value={form.name}
              onChange={(e) => set("name", e.target.value)}
            />
            {errors?.name?._errors && (
              <label className="lable text-error">
                {errors?.name?._errors.join(", ")}
              </label>
            )}
          </div>
          
          <div className="relative">
            <label htmlFor="about" className="label">
              About
            </label>
            <textarea
              id="about"
              name="about"
              rows={4}
              className={`textarea textarea-bordered w-full ${errors?.about?._errors && "is-invalid"}`}
              placeholder="About"
              value={form.about}
              onChange={(e) => set("about", e.target.value)}
            />
            {errors?.about?._errors && (
              <label className="lable text-error">
                {errors?.about?._errors.join(", ")}
              </label>
            )}
          </div>
        </div>
        <div className="mt-6 flex-grow lg:mt-0 lg:ml-6 lg:flex-shrink-0 lg:flex-grow-0 space-y-2">
          <p className="text-sm font-medium text-base-content/70">
              Photo
          </p>
          <div className="avatar">
            <div className="size-20 rounded-full">
              <Image
                key={user?.avatar}
                src={user?.avatar || appConfig.dummyAvatar}
                alt="Avatar"
                width={200}
                height={200}
              />
            </div>
          </div>
          <input
            ref={avatarFileRef}
            type="file"
            className="file:btn file:btn-primary file:btn-sm block text-sm file:me-3 file:rounded-full file:uppercase"
            accept="image/*"
            aria-label="file-input"
          />
        </div>
      </div>
      <br />
      <div className="text-end">
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading && <span className="loading loading-ring"></span>}
          Save
        </button>
      </div>
    </form>
  );
}