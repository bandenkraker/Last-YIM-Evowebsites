import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  locales: ['nl', 'en'],
  defaultLocale: 'nl'
});
 
export const config = {
  matcher: ['/', '/(nl|en)/:path*']
};
