import { AlignJustify } from "lucide-react";
import { ReactNode } from "react";
import ButtonBadge from "./ButtonBadge";
import { FileDown } from "lucide-react";
import Nav from "./Nav";
function Header() {
  // Header Design
  return (
    <header className=" container-fluid flex items-center justify-between h-[88px] ">
      {/* rightSide Flow */}
      <div className="flex items-center ">
        <h1 className="text-xl font-semibold">نمونه کار من</h1>
        <Nav />
      </div>

      {/* left side flow */}
      <ButtonBadge>
        <span className="flex items-center gap-2">
          <FileDown size={20} /> دانلود رزومه
        </span>
      </ButtonBadge>
    </header>
  );
}

export default Header;
