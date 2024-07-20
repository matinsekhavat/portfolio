import Image from "next/image";
import React from "react";

function Certificate() {
  return (
    <div className="bg-primary-850 grid grid-cols-2  ">
      <div className="flex items-center gap-2 border border-accent-200 rounded-3xl p-4 overflow-hidden">
        <div className="w-20">
          <Image
            src="/google-logo.webp"
            width={70}
            height={70}
            alt="google logo"
          />
        </div>
        <div className="flex-1 flex flex-col ">
          <h1 className="text-lg font-bold text-white">
            گواهینامه Google Digital Garage
          </h1>
          <p className="text-accent-800 text-sm">
            اصول دیجیتال مارکتینگ (1390)
          </p>
        </div>
      </div>
    </div>
  );
}

export default Certificate;
