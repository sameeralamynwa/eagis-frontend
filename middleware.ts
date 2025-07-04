import { NextRequest, NextResponse } from "next/server";

export default async function middleware(request: NextRequest) {
  const authUser = request.cookies.get("auth_user")?.value;
  const protectedPaths = ["/account", "/dashboard"];
  const guestPaths = ["/auth"];

  if (
    !authUser &&
    protectedPaths.some((path) => request.nextUrl.pathname.startsWith(path))
  ) {
    const newUrl = new URL("/auth/login", request.nextUrl.origin);
    return Response.redirect(newUrl);
  }

  if (
    authUser &&
    guestPaths.some((path) => request.nextUrl.pathname.startsWith(path))
  ) {
    const newUrl = new URL("/", request.nextUrl.origin);
    return Response.redirect(newUrl);
  }

  return NextResponse.next();
}
