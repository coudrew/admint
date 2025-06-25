"use server";

import { createClient } from "@/lib/supabase";
import { SignUpFormSchema, signUpFormSchema } from "./schema";
import { redirect } from "next/navigation";

export async function signUpWithEmailAndPassword(formData: SignUpFormSchema) {
  const validationResult = signUpFormSchema.safeParse(formData);

  if (!validationResult.success) {
    return {
      error: "Malformed credentials",
      code: "AUTH_ERROR",
    };
  } else {
    const { email, password, organization } = validationResult.data;
    const supabase = await createClient();

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { organization } },
    });

    if (error) {
      return {
        error: "Signup error",
        code: "AUTH_ERROR",
        details: error.message,
      };
    }
  }

  redirect("/");
}
