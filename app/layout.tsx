import type { Metadata } from "next";
import "./globals.css";

import { auth } from "@auth";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@components/ui/sonner";

export const metadata: Metadata = {
  title: "Ultimate Auht Guide",
  description: "An ultimate guide for authentication using Auth.js V5",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <Toaster />
        <body>{children}</body>
      </html>
    </SessionProvider>
  );
}
