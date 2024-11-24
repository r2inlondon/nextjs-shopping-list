import "server-only";
import { cookies } from "next/headers";
import { encrypt, decrypt } from "./sessions";

const accessToken = process.env.ACCESS_TOKEN;

export async function createSession(userId: string) {
  const expiresAt = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000);
  const session: string = await encrypt({ userId, expiresAt });

  if (!accessToken) {
    throw new Error("ACCESS_TOKEN environment variable is not defined");
  }

  cookies().set(accessToken, session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}

export async function updateSession() {
  if (!accessToken) {
    throw new Error("ACCESS_TOKEN environment variable is not defined");
  }

  let cookieStore = cookies();
  const session = cookieStore.get(accessToken)?.value;

  const payload = await decrypt(session);

  if (!session || !payload) {
    return null;
  }

  const expires = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000);

  cookieStore = cookies();

  cookieStore.set("SHOPPING_LIST_TOKEN", session, {
    httpOnly: true,
    secure: true,
    expires: expires,
    sameSite: "lax",
    path: "/",
  });
}

export async function deleteSession() {
  if (!accessToken) {
    throw new Error("ACCESS_TOKEN environment variable is not defined");
  }

  const cookieStore = cookies();
  cookieStore.delete(accessToken);
}
