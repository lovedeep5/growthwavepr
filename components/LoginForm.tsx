"use client";
import React, { useState, useTransition } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CardWrapper from "@/components/CardWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormItem,
  FormField,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { LoginSchema } from "@/schemas";
import FormError from "@/components/FormError";
import FormSucess from "@/components/FormSucess";
import { login } from "@/actions/login";

const LoginForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [sucess, setsucess] = useState<string | undefined>("");
  const [isPending, startTransistion] = useTransition();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submitHandler = (values: z.infer<typeof LoginSchema>) => {
    setError(undefined);
    setsucess(undefined);

    startTransistion(() => {
      login(values).then((data) => {
        setError(data?.error);
        setsucess(data?.success);
      });
    });
  };
  return (
    <div className="">
      <CardWrapper
        heading="Salon24"
        message="Welcome back again"
        backButton="Do not have an account? Create new account"
        backLink="/register"
        showSocial
      >
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(submitHandler)}
            className="space-y-6"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Email" {...field} />
                  </FormControl>
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
                    <Input type="password" placeholder="******" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormError message={error} />
            <FormSucess message={sucess} />
            <Button
              type="submit"
              size="lg"
              variant="default"
              className="w-full"
              disabled={isPending}
            >
              Login
            </Button>
          </form>
        </Form>
      </CardWrapper>
    </div>
  );
};

export default LoginForm;
