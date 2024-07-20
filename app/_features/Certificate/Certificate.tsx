import React from "react";
import CertificateItem from "./CertificateItem";

function Certificate() {
  return (
    <div className="container-fluid py-12">
      <div className="bg-primary-850 grid grid-cols-2 md:grid-cols-3 gap-4 ">
        <CertificateItem
          logoSrc="/google-logo.webp"
          logoAlt="google logo"
          title="گواهینامه Google Digital Garage"
          description="اصول دیجیتال مارکتینگ (1390)"
        />{" "}
        <CertificateItem
          logoSrc="/mihan-logo.webp"
          logoAlt="mihan wordpress logo"
          title="گواهینامه اصول طراحی UX و UI"
          description="آکادمی میهن وردپرس (1390)"
        />
        <CertificateItem
          logoSrc="/coursera-logo.webp"
          logoAlt="coursera logo"
          title="گواهینامه Coursera"
          description="HTML5 پیشرفته (1391)"
        />
        <CertificateItem
          logoSrc="/sololearn-logo.webp"
          logoAlt="coursera logo"
          title="گواهینامه Sololearn"
          description="مباحث پیشرفته در HTML و وب (1394)"
        />
        <CertificateItem
          logoSrc="/digital-logo.webp"
          logoAlt="coursera logo"
          title="گواهینامه چالش های دیجیتال"
          description="اصول دیجیتال مارکتینگ (1390)"
        />
        <CertificateItem
          logoSrc="/garage-logo.webp"
          logoAlt="google digital garage logo"
          title="گواهینامه Google Digital Garage"
          description="اصول دیجیتال مارکتینگ (1390)"
        />
      </div>
    </div>
  );
}

export default Certificate;
