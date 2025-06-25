"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { SignUpFormSchema, signUpFormSchema } from "./schema";
import { Button } from "@/components/ui/button";
import { signUpWithEmailAndPassword } from "./actions";

export default function SignUpForm() {
  const form = useForm({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: { email: "", password: "", organization: "" },
  });

  const onSubmit = async (formData: SignUpFormSchema) => {
    const error = await signUpWithEmailAndPassword(formData);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="organization"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Organization</FormLabel>
              <FormControl>
                <Input placeholder="organization" {...field} />
              </FormControl>
              <FormDescription className="sr-only">
                Your organization name
              </FormDescription>
            </FormItem>
          )}
        />
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
                <Input autoComplete="new-password" type="password" {...field} />
              </FormControl>
              <FormDescription className="sr-only">
                Your account password
              </FormDescription>
            </FormItem>
          )}
        />
        <Button
          disabled={!form.formState.isValid}
          className="bg-slate-500 hover:bg-slate-500/90"
          type="submit"
        >
          Sign Up
        </Button>
      </form>
    </Form>
  );
}
