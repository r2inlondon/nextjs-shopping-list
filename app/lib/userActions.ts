"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import bcrypt from "bcrypt";
import prisma from "./prisma";

import { createSession } from "./session";

export interface IRegisterState {
  errors?: {
    firstName?: string[];
    lastName?: string[];
    email?: string[];
    password?: string[];
    confirmPassword?: string[];
  };
  message?: string | null;
}

const registerSchema = z
  .object({
    firstName: z.string().min(2, "First name must be at least 2 characters."),
    lastName: z.string().min(2, "Last name must be at least 2 characters."),
    email: z.string().email("Invalid email address."),
    password: z.string().min(6, "Password must be at least 6 characters."),
    confirmPassword: z
      .string()
      .min(6, "Password must be at least 6 characters."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export async function createLogin(prevState: ILoginState, formData: FormData) {
  const validatedFields = registerSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to create user.",
    };
  }

  const { firstName, lastName, email, password } = validatedFields.data;

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await prisma.user.create({
    data: {
      firstName,
      lastName,
      email,
      password: hashedPassword,
    },
  });

  if (!newUser) {
    return {
      message: "An error occurred while creating your account.",
    };
  }

  console.log("********", newUser);

  await createSession(newUser.id);

  redirect("/lists");
}

export interface ILoginState {
  errors?: {
    email?: string[];
    password?: string[];
  };
  message?: string | null;
}

const LoginSchema = z.object({
  email: z.string().email("Invalid email address."),
  password: z.string().min(6, "Invalid Password"),
});

export async function getLogin(prevState: ILoginState, formData: FormData) {
  const validatedFields = LoginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to login.",
    };
  }

  const { email, password } = validatedFields.data;

  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!existingUser) {
      throw new Error("User not found");
    }

    const validPassword = await bcrypt.compare(password, existingUser.password);

    if (!validPassword) {
      throw new Error("Invalid login credentials.");
    }

    await createSession(existingUser.id);
  } catch (error) {
    return {
      message: "Database Error: Failed to login.",
    };
  }

  redirect("/lists");
}
