import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const DEFAULT_LOCALE = "ru";
const LOCALES = ["ru", "en"];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasFileExtension = /\.[a-zA-Z0-9]+$/.test(pathname);

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/_not-found") ||
    pathname.startsWith("/404") ||
    pathname.startsWith("/static") ||
    pathname === "/api" ||
    pathname.startsWith("/api/") ||
    pathname.startsWith("/site_ru.webmanifest") ||
    pathname.startsWith("/site_en.webmanifest") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/fonts") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/yandex_89b9752c1dfcfb0f.html") ||
    pathname.startsWith("/sitemap") ||
    pathname.startsWith("/robots.txt") ||
    pathname.startsWith("/google5fc679d63a4e21ac.html") ||
    pathname.startsWith("/apple-touch-icon.png") ||
    hasFileExtension
  ) {
    return NextResponse.next();
  }

  if (pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = `/${DEFAULT_LOCALE}`;
    return NextResponse.redirect(url, 308);
  }

  const pathnameHasLocale = LOCALES.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) {
    const requestHeaders = new Headers(request.headers);
    const locale = pathname.split("/")[1];
    requestHeaders.set("x-locale", locale);

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${DEFAULT_LOCALE}${pathname}`;
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: "/:path*",
};
