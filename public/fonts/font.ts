import localFont from "next/font/local";

const dana = localFont({
  src: [
    {
      path: "/dana/Dana-Hairline.woff",
      weight: "10",
    },
    {
      path: "/dana/Dana-Thin.woff",
      weight: "100",
    },
    {
      path: "/dana/Dana-UltraLight.woff",
      weight: "200",
    },
    {
      path: "/dana/Dana-Light.woff",
      weight: "300",
    },
    {
      path: "/dana/Dana-Medium.woff",
      weight: "500",
    },
    {
      path: "/dana/Dana-DemiBold.woff",
      weight: "600",
    },
    {
      path: "/dana/Dana-ExtraBold.woff",
      weight: "800",
    },
    {
      path: "/dana/Dana-Black.woff",
      weight: "900",
    },
    {
      path: "/dana/Dana-Regular.woff",
      weight: "normal",
    },
    {
      path: "/dana/Dana-ExtraBold.woff",
      weight: "bold",
    },
  ],
  variable: "--font-dana",
});

export { dana };
