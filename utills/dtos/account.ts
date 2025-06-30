// utills/dtos/account.ts

import { z } from "zod";

// <<< FIX: Restored username and about fields, and changed fullName to name
export const UpdateAccountDetailSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name is required. At least 3 characters." }),
  username: z
    .string()
    .min(3, { message: "Username is required. At least 3 characters." }),
  about: z.string().optional(),
});


// --- Other schemas below are unchanged ---

export const ChangeAccountPasswordSchema = z
  .object({
    password: z.string().min(8, {
      message: "Password is required, Must have atleast 08 charectors",
    }),
    new_password: z.string().min(8, {
      message: "Password is required, Must have atleast 08 charectors",
    }),
    password_confirmation: z.string().min(1, {
      message: "Field is required",
    }),
  })
  .superRefine((fields, ctx) => {
    if (fields.new_password !== fields.password_confirmation) {
      ctx.addIssue({
        code: "custom",
        path: ["password_confirmation"],
        message: "Password dont match",
      });
    }
  });

export const ChangeAccountEmailSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Not a valid email"),
});