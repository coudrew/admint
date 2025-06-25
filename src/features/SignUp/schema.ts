import { z } from "zod";

export const signUpFormSchema = z.object({
  email: z.string().email({ message: "Must be a valid email address" }),
  password: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,32}$/, {
    message:
      "Password must be 8 - 32 characters, with 1 uppercase, 1 lowercase, and 1 number",
  }),
  organization: z
    .string()
    .min(2, { message: "Organization name must be greater than 2 characters" })
    .max(32, { message: "Organization name must be less than 32 characters" }),
});

export type SignUpFormSchema = z.infer<typeof signUpFormSchema>;
