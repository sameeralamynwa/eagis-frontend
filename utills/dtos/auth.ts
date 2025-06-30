import { z } from "zod";

export const LoginFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Not a valid email"),
  password: z.string().min(1, { message: "Password is required" }),
});

export const RegisterFormSchema = z
  .object({
    fullName: z
      .string()
      .min(1, { message: "Field requires atleast 02 charectors" }),
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email("Not a valid email"),
    password: z.string().min(1, { message: "Password is required" }),
    password_confirmation: z.string().min(1, {
      message: "Field is required",
    }),
  })
  .superRefine((fields, ctx) => {
    if (fields.password !== fields.password_confirmation) {
      ctx.addIssue({
        code: "custom",
        path: ["password_confirmation"],
        message: "Password dont match",
      });
    }
  });

export const ForgotPasswordFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Not a valid email"),
});

export const ResetPasswordFormSchema = z
  .object({
    password: z.string().min(8, {
      message: "Password is required, Must have atleast 08 charectors",
    }),
    password_confirmation: z.string().min(1, {
      message: "Field is required",
    }),
  })
  .superRefine((fields, ctx) => {
    if (fields.password !== fields.password_confirmation) {
      ctx.addIssue({
        code: "custom",
        path: ["password_confirmation"],
        message: "Password dont match",
      });
    }
  });

export const ResendVerificationEmailFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Not a valid email"),
});
