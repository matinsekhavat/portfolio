import { e2p } from "@/app/_utils/replaceNumber";
import Image from "next/image";
import SkillsItems from "./SkillsItems";

function Skills() {
  return (
    <div>
      <div className="text-center">
        <span className="inline-block text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent-200 to-accent-800 text-clip">
          مهارت های من
        </span>
        <br />
        <p className=" my-6 text-lg">
          و کماکان در جستجوی دانش های جدید، حتی اگر در ثریا باشد...
        </p>
      </div>
      {/* Skills List */}
      <div className="grid grid-cols-2">
        <SkillsItems
          imageSrc="/react-logo.png"
          imageAlt="react-logo"
          percentage={100}
          title="React.JS"
        />
      </div>
    </div>
  );
}

export default Skills;
