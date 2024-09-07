"use server";
import bcrypt from "bcryptjs";
import * as z from "zod";
import { SignUp } from "@/schemas";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

export const Register = async (values: z.infer<typeof SignUp>) => {
  const validateFields = SignUp.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid Fields." };
  }

  const { name, email, password } = validateFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already in use." };
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  // TODO: send verification token
  return { success: "User registered successfully." };
};
