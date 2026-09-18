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

          {/* <Script
            id="muchat-agent"
            type="module"
            dangerouslySetInnerHTML={{
              __html: `import Chatbox from 'https://cdn.mu.chat/embeds/dist/chatbox/index.js?v=2';
             
   Chatbox.initBubble({
   agentId: 'cm0ozf3q802e69fcak851bjsw',
      });`,
            }}
          /> */}

<Script id="muchat-sdk" strategy="lazyOnload">
          {`
           (function (d, t) {
    var BASE_URL = "https://widget.mu.chat";
    var g = d.createElement(t);
    var s = d.getElementsByTagName(t)[0];

    g.src = BASE_URL + "/sdk.js";
    g.async = true;
    s.parentNode.insertBefore(g, s);

    g.onload = function () {
      window.muchatSDK.run({
        websiteToken: "SJIEF0wuHnoD",
        baseUrl: BASE_URL
      });
    };
  })(document, "script");
          `}


        </Script>




        {/* <Script id="test" strategy="afterInteractive">
{
  `
  
    window.chatwootSettings = {"position":"right","type":"standard","launcherTitle":""};
  (function(d,t) {
    var BASE_URL="https://app.chatwoot.com";
    var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
    g.src=BASE_URL+"/packs/js/sdk.js";
    g.async = true;
    s.parentNode.insertBefore(g,s);
    g.onload=function(){
      window.chatwootSDK.run({
        websiteToken: 'xH7BnY5EgYFMVCQdxMgS63Yk',
        baseUrl: BASE_URL
      })
    }
  })(document,"script");
  `
}

          </Script> */}


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
