import Image from "next/image";
import React from "react";
import CertificateItem from "./CertificateItem";

function Certificate() {
  return (
    <div className="bg-primary-850 grid grid-cols-2  ">
      <CertificateItem
        logoSrc="/google-logo.webp"
        logoAlt="google logo"
        title="گواهینامه Google Digital Garage"
        description="اصول دیجیتال مارکتینگ (1390)"
      />
    </div>
  );
}

export default Certificate;
