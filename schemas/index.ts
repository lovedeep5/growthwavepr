"use client";

import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Invalid Email.",
  }),
  password: z.string().min(1),
});

export const SignUp = z
  .object({
    name: z.string(),
    email: z.string().email({
      message: "Invalid email.",
    }),
    password: z
      .string()
      .min(6, { message: "Must be 6 character long" })
      .max(15, { message: "Must be 15 or fewer character" }),
    cfmPassword: z
      .string()
      .min(6, { message: "Must be 6 character long" })
      .max(15, { message: "Must be 15 or fewer character" }),
  })
  .refine((data) => data.password === data.cfmPassword, {
    path: ["cfmPassword"],
    message: "Password does not match.",
  });
