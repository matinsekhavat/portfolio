// for host npx next dev -H 192.168.1.2
import type { Metadata } from "next";
import "./globals.css";
import { dana } from "@/public/fonts/font";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Script from "next/script";

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
       <Script
          id="mu-chat"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              import Chatbox from 'https://muchat-develop-widget.liara.run/embeds/dist/chatbox/index.js';
              const widget = await Chatbox.initBubble({
                agentId: 'cm1lstpon0002sk19xpn8u8cy',
              });
            `,
          }}
          type="module"
        />
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
