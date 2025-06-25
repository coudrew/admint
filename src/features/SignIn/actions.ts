"use server";

import { redirect } from "next/navigation";
import { signInFormSchema, SignInFormSchema } from "./schema";
import { createClient } from "@/lib/supabase";

export async function signInAction(formData: SignInFormSchema) {
  const validationResult = signInFormSchema.safeParse(formData);

  if (!validationResult.success) {
    return {
      error: "Malformed credentials",
      code: "AUTH_ERROR",
    };
  } else {
    const supabase = await createClient();

    const { error } = await supabase.auth.signInWithPassword(
      validationResult.data,
    );

    if (error) {
      return {
        error: "Invalid credentials",
        code: "AUTH_ERROR",
        details: "Invalid credentials",
      };
    }
  }

  redirect("/");
}
