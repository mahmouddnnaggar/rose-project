// ^ هعمله وقت تاني لإن حاولت فيه لما فصلت ومش عارف، لما أذاكر سيشنز م. مقبل للآخر لإني لسا مخلصتهاش هبص فيه تاني

// import { NextResponse } from 'next/server';
// import createMiddleware from 'next-intl/middleware';
// import { withAuth } from 'next-auth/middleware';
// import { getToken } from 'next-auth/jwt';

// const LOCALES = ['en', 'fr', 'ar'];
// const routing = {
//   defaultLocale: 'en',
//   locales: LOCALES,
// };

// const publicPages = [
//   '/', //
//   '/store-location',
//   '/contact',
//   '/delivery',
//   '/categories',
//   '/policy',
//   '/faqs',
//   '/auth/login',
//   '/auth/register',
// ];

// const authPages = ['/auth/login', '/auth/register'];

// const handleI18nRouting = createMiddleware(routing);

// const authMiddleware = withAuth(
//   function onSuccess(req) {
//     return handleI18nRouting(req);
//   },
//   {
//     callbacks: {
//       authorized: ({ token }) => token != null,
//     },
//     pages: {
//       signIn: '/auth/login',
//       error: '/auth/login',
//     },
//   }
// );

// export default async function middleware(req) {
//   const token = await getToken({ req });

//   const publicPathRegex = RegExp(
//     `^(/(${LOCALES.join('|')}))?(${publicPages
//       .map(p => p.replace(/^\//, ''))
//       .join('|')})(/.*)?$`,
//     'i'
//   );

//   const authPathRegex = RegExp(
//     `^(/(${LOCALES.join('|')}))?(${authPages
//       .map(p => p.replace(/^\//, ''))
//       .join('|')})(/.*)?$`,
//     'i'
//   );

//   const isPublicPage = publicPathRegex.test(req.nextUrl.pathname);
//   const isAuthPage = authPathRegex.test(req.nextUrl.pathname);

//   if (isPublicPage) {
//     if (token && isAuthPage) {
//       return NextResponse.redirect(new URL('/dashboard', req.nextUrl));
//     }
//     return handleI18nRouting(req);
//   } else {
//     if (!token) {
//       return NextResponse.redirect(new URL('/auth/login', req.nextUrl));
//     }
//     return authMiddleware(req);
//   }
// }

// export const config = {
//   matcher: ['/((?!api|_next|static|favicon.ico).*)'],
// };
