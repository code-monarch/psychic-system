import { NextRequest, NextResponse } from "next/server";
import { COOKIE_TOKEN } from "./lib/constants/index.constants";

export const config = {
  matcher: [
    "/wallet/:path*",
    "/dashboard/:path*",
    "/requests/:path*",
    "/transactions/:path*",
    "/currency-manager/:path*",
  ],
};

export default function middleware(req: NextRequest) {
  const token = req.cookies.get(COOKIE_TOKEN);
  const url = req.nextUrl.pathname;

  // if user is not logged in and is on the wallet route redirect user back to login page
  if (!token && url.startsWith("/wallet/")) {
    return NextResponse.redirect(`${req.nextUrl.origin}/auth/login`);
  }

  // if user is not logged in and is on the dashboard route redirect user back to login page
  if (!token && url.startsWith("/dashboard/")) {
    return NextResponse.redirect(`${req.nextUrl.origin}/auth/login`);
  }

  // if user is not logged in and is on the requests route redirect user back to login page
  if (!token && url.startsWith("/requests/")) {
    return NextResponse.redirect(`${req.nextUrl.origin}/auth/login`);
  }

  // if user is not logged in and is on the transactions route redirect user back to login page
  if (!token && url.startsWith("/transactions/")) {
    return NextResponse.redirect(`${req.nextUrl.origin}/auth/login`);
  }

  // if user is not logged in and is on the currency-manager route redirect user back to login page
  if (!token && url.startsWith("/currency-manager/")) {
    return NextResponse.redirect(`${req.nextUrl.origin}/auth/login`);
  }
}
