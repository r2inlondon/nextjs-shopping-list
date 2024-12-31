"use server";

import { capitalize } from "lodash";
import { revalidatePath } from "next/cache";
import prisma from "./prisma";
import { ListType } from "./definitions";

export async function createList(userId: string, name: string) {
  const capitalized = capitalize(name);
  try {
    const response = await prisma.list.create({
      data: {
        userId,
        name: capitalized,
      },
    });
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
    const response = await prisma.list.delete({
      where: {
        id: listId,
      },
    });
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
    const response: ListType[] = await prisma.list.findMany({
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
    const response = await prisma.list.update({
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
