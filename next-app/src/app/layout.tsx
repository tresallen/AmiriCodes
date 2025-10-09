import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AmiriCodes",
  description: "Portfolio website showcasing my projects and skills as a full-stack developer specializing in modern web technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
