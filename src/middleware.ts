import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const DEFAULT_LOCALE = 'ru';
const LOCALES = ['ru', 'en'];

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/static') ||
        pathname.startsWith('/api') ||
        pathname.startsWith('/site_ru.webmanifest') ||
        pathname.startsWith('/site_en.webmanifest') ||
        pathname.startsWith('/images') ||
        pathname.startsWith('/fonts') ||
        pathname.startsWith('/favicon') ||
        pathname.startsWith('/yandex_89b9752c1dfcfb0f.html') ||
        pathname.startsWith('/sitemap') ||
        pathname.startsWith('/apple-touch-icon.png')
    ) {
        return NextResponse.next();
    }

    if (pathname === '/') {
        const url = request.nextUrl.clone();
        url.pathname = `/${DEFAULT_LOCALE}`;
        return NextResponse.redirect(url);
    }

    const pathnameHasLocale = LOCALES.some(
        locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) {
        return NextResponse.next();
    }

    const url = request.nextUrl.clone();
    url.pathname = `/${DEFAULT_LOCALE}${pathname}`;
    return NextResponse.redirect(url);
}

export const config = {
    matcher: '/:path*'
};