import ButtonBadge from "./ButtonBadge";
import { FileDown } from "lucide-react";
import Nav from "./Nav";
function Header() {
  // Header Design
  return (
    <header className=" container-fluid flex flex-wrap gap-y-2 items-center justify-between h-[88px] ">
      {/* rightSide Flow */}
      <div className="flex items-center ">
        <h1 className="text-xl font-semibold">نمونه کار من</h1>
        <Nav />
      </div>

      {/* left side flow */}
      <ButtonBadge>
        <a
          href="/resume/matin-sekhavat-cv.pdf"
          className="flex items-center gap-2"
          download="MatinSekhavat-CV"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FileDown size={20} /> دانلود رزومه
        </a>
      </ButtonBadge>
    </header>
  );
}

export default Header;
