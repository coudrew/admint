import { z } from "zod";

export const signInFormSchema = z.object({
  email: z.string().email({ message: "Must be a valid email address" }),
  password: z
    .string()
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,32}$/, {
      message:
        "Password must be 8 - 32 characters, with 1 uppercase, 1 lowercase, and 1 number",
    }),
});

export type SignInFormSchema = z.infer<typeof signInFormSchema>;
