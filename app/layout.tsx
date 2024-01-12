import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import Script from "next/script";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CENTRAL SPORTS HUB",
  description:
    "A HUB FOR BUYING SPORTS TICKETS",
  openGraph: { images: ["/og.png"] },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body
          className={`${inter.className} min-h-screen flex flex-col`}
        >
          <header className="flex items-center h-20 gap-4 px-4 border-b border-black border-solid sm:px-8 border-opacity-20">
            <Link href="/" className="flex items-center h-20 gap-2 sm:gap-4">
              GO HOME
            </Link>
            <div className="grow" />
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>

            <SignedOut>
              <div className="px-8 py-20 md:px-20 lg:py-48">
                <div className="flex gap-2 mt-8">
                  <Link
                    href="/dashboard"
                    className="flex content-center gap-2 px-4 py-2 font-semibold text-white transition-colors duration-200 rounded-lg bg-primary-600 hover:bg-primary-700"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </SignedOut>
          </header>

          <main>{children}</main>

        </body>
      </ClerkProvider>

      <Script src="https://cdn.jsdelivr.net/npm/prismjs@1/components/prism-core.min.js" />
      <Script src="https://cdn.jsdelivr.net/npm/prismjs@1/plugins/autoloader/prism-autoloader.min.js" />
    </html>
  );
}
