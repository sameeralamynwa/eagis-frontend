import { z } from "zod";

export const ContactUsFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name is required. Atleat 03 charectors" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Not a valid email"),
  message: z
    .string()
    .min(10, { message: "Message is required. Atleat 10 charectors" }),
});
