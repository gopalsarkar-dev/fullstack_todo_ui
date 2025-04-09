import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { jwtVerify } from "jose";
import { env } from "./env/client";

// This function can be marked `async` if using `await` inside
export const middleware = async (request: NextRequest) => {
  const secretkeyencode = new TextEncoder().encode(env.NEXT_PUBLIC_SECRET_KEY);

  const cookie = request.cookies.get("directus_session_token")?.value;
  //   console.log(cookie);

  if (cookie === undefined || cookie === "") {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  try {
    await jwtVerify(cookie, secretkeyencode);
  } catch (error) {
    console.log(error);

    const coustomRes = NextResponse.redirect(
      new URL("/auth/login", request.url),
    );
    coustomRes.cookies.delete("directus_session_token");

    return coustomRes;
  }
};

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/profile", "/completedall", "/incompletedall"],
};
