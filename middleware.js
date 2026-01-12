import { NextResponse } from 'next/server';

export function middleware(request) {
  const token = request.cookies.get('auth_token');
  const { pathname } = request.nextUrl;

  // যদি কেউ /add-item এ যেতে চায় এবং লগইন না থাকে
  if (pathname.startsWith('/add-item') && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/add-item/:path*'], // শুধু এই রাউটেই কাজ করবে
};