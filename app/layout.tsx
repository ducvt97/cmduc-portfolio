import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import "@/assets/styles/css/globals.css";
import "@/assets/styles/scss/index.scss"

import Header from "@/components/Header";
import Footer from "@/components/Footer";

config.autoAddCss = false

const inter = Epilogue({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
