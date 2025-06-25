import { z } from "zod";

export const signInFormSchema = z.object({
  email: z.string().email({ message: "Must be a valid email address" }),
  password: z.string(),
});

export type SignInFormSchema = z.infer<typeof signInFormSchema>;
