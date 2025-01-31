import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "resu.me",
  description: "Create your own resume easily",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="container mx-auto grid min-h-screen grid-cols-2 gap-8 bg-slate-300 p-4 md:grid-cols-3">
        {children}
      </body>
    </html>
  );
}
