import { e2p } from "@/app/_utils/replaceNumber";
import Image from "next/image";
import SkillsItems from "./SkillsItems";
import HeadTitle from "@/app/_components/HeadTitle";

function Skills() {
  return (
    <div id="skills">
      <HeadTitle
        title="مهارت های من"
        description="و کماکان در جستجوی دانش های جدید، حتی اگر در ثریا باشد..."
      />
      {/* Skills List */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
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
