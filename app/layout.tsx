import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  title: "پورتفولیو متین سخاوت",
  description:
    "متین سخاوت برنامه نویس و توسعه دهنده فرانت اند با بیش از 2 سال سابقه در این حوزه",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body className="bg-primary-900 text-white">
        {/* App Layout */}
        <div className="min-h-dvh grid grid-rows-[auto_1fr_auto]">
          <Header />
          <main>
            <div>{children}</div>
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
