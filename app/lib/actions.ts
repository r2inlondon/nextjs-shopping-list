"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { capitalize } from "lodash";
import { ListType } from "./definitions";

const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();

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

  // create user in database
  try {
    await db.user.create({
      data: {
        firstName,
        lastName,
        email,
        password,
      },
    });
  } catch (error) {
    return {
      message: "Database Error: Failed to create user.",
    };
  }
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
    const response = await db.user.findUnique({
      where: {
        email: email,
      },
    });
  } catch (error) {
    return {
      message: "Database Error: Failed to login.",
    };
  }

  redirect("/lists");
}

export async function createList(userId: string, name: string) {
  const capitalized = capitalize(name);
  try {
    const response = await db.list.create({
      data: {
        userId,
        name: capitalized,
      },
    });
    console.log(response);
  } catch (error) {
    console.error(error);
    return {
      message: "Database Error: Failed to create list.",
    };
  }

  revalidatePath("/lists");
}

export async function deleteList(listId: string) {
  try {
    const response = await db.list.delete({
      where: {
        id: listId,
      },
    });
    console.log(response);
  } catch (error) {
    console.error(error);
    return {
      message: "Database Error: Failed to delete list.",
    };
  }

  revalidatePath("/lists");
}

export async function getLists(userId: string) {
  try {
    const response: ListType[] = await db.list.findMany({
      where: {
        userId,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function updateList(listId: string, name: string) {
  const capitalized = capitalize(name);
  try {
    const response = await db.list.update({
      where: {
        id: listId,
      },
      data: {
        name: capitalized,
      },
    });
    console.log(response);
  } catch (error) {
    console.error(error);
    return {
      message: "Database Error: Failed to update list.",
    };
  }

  revalidatePath("/lists");
}
