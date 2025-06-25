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
import { SignInFormSchema, signInFormSchema } from "./schema";
import { Button } from "@/components/ui/button";

export default function SignInForm() {
  const form = useForm({
    resolver: zodResolver(signInFormSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (formData: SignInFormSchema) => {};

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
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
                <Input type="password" {...field} />
              </FormControl>
              <FormDescription className="sr-only">
                Your account password
              </FormDescription>
            </FormItem>
          )}
        />
        <Button className="bg-slate-500 hover:bg-slate-500/90" type="submit">
          Sign In
        </Button>
      </form>
    </Form>
  );
}
