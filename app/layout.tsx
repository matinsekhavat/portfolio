import type { Metadata } from "next";
import "./globals.css";
import { dana } from "@/public/fonts/font";
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
    <html lang="en" dir="rtl" className="scroll-smooth scroll-p-8">
      <body
        className={`  bg-primary-900 text-white font-dana ${dana.variable}`}
      >
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
