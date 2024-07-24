"use client";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import React, { useRef, useState } from "react";
import Overlay from "./Overlay";
import useDetectOutsideClick from "../_hooks/useOutsideClick";
import NavList from "./NavList";

function Nav() {
  const navRef = useRef<HTMLDivElement | null>(null);
  const [isMobileNavShow, setIsMobileNavShow] = useState<boolean>(false);
  function closeMobileNav() {
    setIsMobileNavShow(false);
  }
  useDetectOutsideClick(navRef, closeMobileNav);
  return (
    <div>
      {/* Mobile Design */}
      <button
        className=" p-2 bg-purple-600 rounded-xl mr-20 inline-block lg:hidden"
        onClick={() => setIsMobileNavShow(true)}
      >
        <AlignJustify size={30} cursor="pointer" />
      </button>
      {/* mobile overlay */}
      <div className="">
        <Overlay show={isMobileNavShow}>
          <div
            ref={navRef}
            className={`fixed top-0 ${
              isMobileNavShow ? "right-0" : "-right-[300px]"
            } bottom-0  bg-white z-50 transition-all duration-300  w-[300px]`}
          >
            <div className="flex flex-col gap-2 h-full w-full  space-y-4">
              <h1 className="text-3xl text-primary-900 font-semibold border-b border-b-primary-900 pb-4 px-8 py-4">
                اهورا
              </h1>
              <NavList direction="row" />
            </div>
          </div>
        </Overlay>
      </div>
      {/* Desktop design */}
      <div className="hidden  mr-8 lg:block">
        <NavList direction="col" />
      </div>
    </div>
  );
}

export default Nav;
