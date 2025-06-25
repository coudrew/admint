"use server";

import { createClient } from "@/lib/supabase";
import { SignUpFormSchema, signUpFormSchema } from "./schema";
import { redirect } from "next/navigation";

export async function signUpWithEmailAndPassword(formData: SignUpFormSchema) {
  const validationResult = signUpFormSchema.safeParse(formData);

  try {
    if (validationResult.success) {
      const { email, password, organization } = validationResult.data;
      const supabase = await createClient();

      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { organization } },
      });

      if (error) {
        throw new Error(error.message);
      }
    } else {
      throw new Error(validationResult.error.message);
    }
  } catch (e) {
    if (e instanceof Error) {
      return { message: e.message };
    }
  }
  redirect("/");
}
