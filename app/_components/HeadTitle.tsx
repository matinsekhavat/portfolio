import React from "react";
type HeadTitlleProps = {
  title: string;
  description: string;
  size?: "sm" | "base";
};

const HeadTitleStyle: HeadTitleStyleProps = {
  sm: "text-2xl text-right",
  base: "text-5xl text-center ",
};
type HeadTitleStyleProps = {
  sm: string;
  base: string;
};
function HeadTitle({ title, description, size = "base" }: HeadTitlleProps) {
  return (
    <div className="text-center">
      <span
        className={`inline-block ${HeadTitleStyle[size]} font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent-200 to-accent-800 text-clip`}
      >
        {title}
      </span>
      <br />
      <p className=" my-6 text-lg">{description}</p>
    </div>
  );
}

export default HeadTitle;
