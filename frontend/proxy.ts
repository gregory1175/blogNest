import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const token = request.cookies.get('access_token')?.value;
  const { pathname } = request.nextUrl;

  if (token && pathname === '/registration') {
    return NextResponse.redirect(new URL('/profile', request.url));
  }

  if (!token && pathname.startsWith('/profile')) {
    return NextResponse.redirect(new URL('/registration', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/profile/:path*', '/registration'],
};
