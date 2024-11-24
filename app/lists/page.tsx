import { cookies } from "next/headers";
import { redirect } from 'next/navigation'
import { JWTPayload } from "jose";

import Lists from "@/app/ui/lists/lists";
import { decrypt } from "../lib/sessions";


const accessToken = process.env.ACCESS_TOKEN;

export default async function page() {

  if (!accessToken) {
    throw new Error("ACCESS_TOKEN environment variable is not defined");
  }

  const cookieStore = cookies();
  const session = cookieStore.get(accessToken)?.value;
  const res = await decrypt(session);

  if (!res) {
    redirect('/');
  }

  const { userId } = res;

  return <Lists userId={userId} />
}
