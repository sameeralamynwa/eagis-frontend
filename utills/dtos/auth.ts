// In utills/dtos/auth.ts

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
      .min(1, { message: "Field requires at least 1 character" }),
    // <<< FIX: Add the username field to the schema.
    // We make it optional because our form logic can create it from the fullName if it's empty.
    username: z.string().optional(),
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email("Not a valid email"),
    password: z.string().min(8, { message: "Password must be at least 8 characters" }),
    password_confirmation: z.string().min(1, {
      message: "Field is required",
    }),
  })
  .superRefine((fields, ctx) => {
    if (fields.password !== fields.password_confirmation) {
      ctx.addIssue({
        code: "custom",
        path: ["password_confirmation"],
        message: "Passwords do not match",
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
      message: "Password is required, Must have at least 8 characters",
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
        message: "Passwords do not match",
      });
    }
  });

export const ResendVerificationEmailFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Not a valid email"),
});