import { z } from "zod";

export const signUpFormSchema = z.object({
  email: z.string().email({ message: "Must be a valid email address" }),
  password: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/),
  organization: z
    .string()
    .min(2, { message: "Organization name must be greater than 2 characters" })
    .max(32, { message: "Organization name must be less than 32 characters" }),
});

export type SignUpFormSchema = z.infer<typeof signUpFormSchema>;
