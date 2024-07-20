import { e2p } from "@/app/_utils/replaceNumber";
import Image from "next/image";
import SkillsItems from "./SkillsItems";

function Skills() {
  return (
    <div id="skills">
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
      <div className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 md:grid-cols-5">
        <SkillsItems
          imageSrc="/html-logo.png"
          imageAlt="HTML-logo"
          percentage={98}
          title="HTML"
        />{" "}
        <SkillsItems
          imageSrc="/css-logo.png"
          imageAlt="css-logo"
          percentage={98}
          title="CSS"
        />{" "}
        <SkillsItems
          imageSrc="/sass-logo.png"
          imageAlt="sass-logo"
          percentage={79}
          title="SCSS"
        />
        <SkillsItems
          imageSrc="/tailwindcss-logo.png"
          imageAlt="tailwindcss-logo"
          percentage={95}
          title="tailwindCSS"
        />
        <SkillsItems
          imageSrc="/javascript-logo.png"
          imageAlt="javascript-logo"
          percentage={97}
          title="Javascript"
        />
        <SkillsItems
          imageSrc="/typescript-logo.png"
          imageAlt="typescript-logo"
          percentage={87}
          title="TypeScript"
        />
        <SkillsItems
          imageSrc="/react-logo.png"
          imageAlt="react-logo"
          percentage={95}
          title="React.JS"
        />
        <SkillsItems
          imageSrc="/next-logo.png"
          imageAlt="Next.js-logo"
          percentage={85}
          title="Next.JS"
        />
        <SkillsItems
          imageSrc="/git-logo.png"
          imageAlt="GIT-logo"
          percentage={89}
          title="GIT"
        />
        <SkillsItems
          imageSrc="/figma-logo.png"
          imageAlt="Figma-logo"
          percentage={50}
          title="figma"
        />
      </div>
    </div>
  );
}

export default Skills;
