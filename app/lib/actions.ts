"use server";

const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();

export async function createLogin(formData) {
  const response = await db.user.create({
    data: {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      password: formData.get("password"),
    },
  });
}

export async function getLogin(formData) {
  const response = await db.user.findUnique({
    where: {
      email: formData.get("email"),
    },
  });
  console.log(response);
}
