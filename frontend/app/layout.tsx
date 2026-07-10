import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BlogNext",
  description: "App for create blogs on nest + next + postgress",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html
      lang="eng"
    >
        <body>{children}</body>
    </html>
  );
}
