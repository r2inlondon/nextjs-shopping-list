import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "./app/lib/sessions";

const protectedRoutes = ["/lists"];
const publicRoutes = ["/login", "/register", "/"];

export default async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  const cookie = request.cookies.get("SHOPPING_LIST_TOKEN")?.value;
  const session = await decrypt(cookie);
  console.log("***** middleWare");

  if (isProtectedRoute && !session?.userId) {
    console.log("***** should redirect to home");
    return NextResponse.redirect(new URL("/", request.url));
  }

  // if (!currentUser && !request.nextUrl.pathname.startsWith("/login")) {
  //   return Response.redirect(new URL("/login", request.url));
  // }

  // 5. Redirect to /dashboard if the user is authenticated
  if (
    isPublicRoute &&
    session?.userId &&
    !request.nextUrl.pathname.startsWith("/lists")
  ) {
    console.log("***** protected route OK");
    return NextResponse.redirect(new URL("/lists", request.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/lists",
};
