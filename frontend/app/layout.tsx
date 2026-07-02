import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BlogNext",
  description: "mini app on nest + next + postgress",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
    >
        <body>{children}</body>
    </html>
  );
}
