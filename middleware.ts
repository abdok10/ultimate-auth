import { auth } from "@auth";

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  console.log("Route ======== ", req.nextUrl.pathname);
  console.log("Logged In ==== ", isLoggedIn);
});


export const config = {
  // NOTE - Clerk previous matcher
  // matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
