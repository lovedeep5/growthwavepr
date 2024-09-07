"use server";
import * as z from "zod";
import { LoginSchema } from "@/schemas";
import { signIn } from "@/auth";
import { DEFAULT_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  // Perform validation on the server side
  const validateFields = LoginSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid Fields!!" };
  }
  const { email, password } = validateFields.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_REDIRECT,
    });
  } catch (err) {
    // TODO: Return error case

    if (err instanceof AuthError) {
      switch (err.type) {
        case "CredentialsSignin":
          return { error: "Invalid Credentails" };
        default:
          return { error: "Something went wrong." };
      }
    }
    throw err;
  }
  // return { success: "Email Sent!!" };
};
