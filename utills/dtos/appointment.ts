import { z } from "zod";

export const bookAppointmentSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: "Firstname is required. Atleat 03 charectors" }),
  lastName: z
    .string()
    .min(3, { message: "Lastname is required. Atleat 03 charectors" }),
  email: z.string().email({ message: "Invalid Email" }),
  phone: z.string().min(9, "Phone Number incomplete"),
  dob: z.string(),
  firstTime: z.coerce.boolean(),
  callBackTime: z.string(),
  reason: z.string(),
  insurance: z.coerce.boolean(),
});
