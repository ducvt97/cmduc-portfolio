import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/styles/css/global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Duc Chu Minh - Professional Web Developer",
  description: "Personal Portfolio of Chu Minh Duc - ducvt97",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
