import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value; // Get token from cookies
  const loginPage = "/login";

  const protectedRoutes = ["/dashboard", "/profile", "/events"]; // Define protected routes
  const isProtectedRoute = protectedRoutes.some((route) =>
    req.nextUrl.pathname.startsWith(route),
  );

  // 🔹 If the user is NOT authenticated and trying to access a protected route -> Redirect to login
  if (!token && isProtectedRoute) {
    return NextResponse.redirect(new URL(loginPage, req.url));
  }

  // 🔹 If the user IS authenticated and trying to access the login page -> Redirect to dashboard
  if (token && req.nextUrl.pathname === loginPage) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

// 🔹 Apply middleware to all routes except API routes and static files
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
