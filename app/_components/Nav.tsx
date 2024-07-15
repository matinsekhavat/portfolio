"use client";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import Overlay from "./Overlay";

function Nav() {
  const [isMobileNavShow, setIsMobileNavShow] = useState<boolean>(false);
  return (
    <div>
      {/* Mobile Design */}
      <button
        className="p-2 bg-purple-600 rounded-xl mr-20 inline-block lg:hidden"
        onClick={() => setIsMobileNavShow(true)}
      >
        <AlignJustify size={30} cursor="pointer" />
      </button>
      {/* overlay */}
      {isMobileNavShow && (
        <div className="">
          <Overlay show={isMobileNavShow}>
            <div className="  fixed top-0 right-0 bottom-0 w-[300px] bg-white z-50">
              <div className="flex flex-col gap-2 h-full w-full  space-y-4">
                <h1 className="text-3xl text-primary-900 font-semibold border-b border-b-primary-900 pb-4 px-8 py-4">
                  اهورا
                </h1>
                <ul className=" px-8 py-4 text-primary-900">
                  <li>test</li>
                  <li>test</li>
                  <li>test</li>
                  <li>test</li>
                </ul>
              </div>
            </div>
          </Overlay>
        </div>
      )}
      {/* Desktop design */}
      <div className="hidden  mr-8 lg:block">
        <ul className="flex items-center gap-4">
          <li>
            <Link href="/">صفحه اصلی</Link>
          </li>
          <li>
            <Link href="/">صفحه اصلی</Link>
          </li>
          <li>
            <Link href="/">صفحه اصلی</Link>
          </li>
          <li>
            <Link href="/">صفحه اصلی</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
