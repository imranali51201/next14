import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
    let response = NextResponse.next();

    const token = request.cookies.get("token")?.value;

    if (token) {
        response.cookies.set({
            name: "token",
            value: token
        })
    } else if (request.nextUrl.pathname.includes("dashboard")) {
        response = NextResponse.redirect(new URL("/auth", request.url))
    }

    return response
}

export const config = {
    matcher: [
        // This is to prevent the middleware from running on the API routes and during development
        '/((?!api|_next/static|_next/image|favicon.ico|favicon.svg).*)',
    ],
};
