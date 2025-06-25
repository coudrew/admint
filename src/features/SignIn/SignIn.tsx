"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { SignInFormSchema, signInFormSchema } from "./schema";
import { Button } from "@/components/ui/button";
import { signInAction } from "./actions";
import { startTransition, useTransition } from "react";

export default function SignInForm() {
  const form = useForm({
    resolver: zodResolver(signInFormSchema),
    mode: "onBlur",
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (formData: SignInFormSchema) => {
    startTransition(async () => {
      const response = await signInAction(formData);

      if (response.error) {
        form.setError("root", { message: response.details || response.error });
      }
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="email@example.com" {...field} />
              </FormControl>
              <FormDescription className="sr-only">
                Your account User name
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormDescription className="sr-only">
                Your account password
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          disabled={!form.formState.isValid || form.formState.isSubmitting}
          className="bg-slate-500 hover:bg-slate-500/90"
          type="submit"
        >
          {form.formState.isSubmitting ? "Loading" : "Sign In"}
        </Button>
      </form>
    </Form>
  );
}
