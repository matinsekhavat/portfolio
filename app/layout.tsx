// for host npx next dev -H 192.168.1.2
import type { Metadata } from "next";
import "./globals.css";
import { dana } from "@/public/fonts/font";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Script from "next/script";
import GoogleTagManager from "./_lib/GoogleTagManager";

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
      <head>
        {/* Google Tag Manager Script */}
        <Script
          id="gtm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PKDDKZLJ');
            `,
          }}
        />
      </head>
      <body
        className={`  bg-primary-900 text-white font-dana ${dana.variable}`}
      >
        {/* App Layout */}
        <div className="min-h-dvh grid grid-rows-[auto_1fr_auto]">
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-PKDDKZLJ"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
          {/* <Script
          id="mu-chat"
          strategy="afterInteractive"
          type="module"
          dangerouslySetInnerHTML={{
            __html: `
              import Chatbox from 'https://cdn.mu.chat/embeds/dist/chatbox/index.js?v=2';
              Chatbox.initBubble({
                agentId: 'cm0ozf3q802e69fcak851bjsw',
                interface: {
                 position: 'right',
                },
              loadingStrategy: 'SEO_FRIENDLY',
              });
            `
          }}
        /> */}

          <Script
            id="muchat-agent"
            type="module"
            dangerouslySetInnerHTML={{
              __html: `import Chatbox from 'https://cdn.mu.chat/embeds/dist/chatbox/index.js?v=2';
             
   Chatbox.initBubble({
   agentId: 'cm0ozf3q802e69fcak851bjsw',
      });`,
            }}
          />
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
