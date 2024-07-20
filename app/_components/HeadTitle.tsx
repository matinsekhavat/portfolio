import React from "react";
type HeadTitlleProps = {
  title: string;
  description: string;
};
function HeadTitle({ title, description }: HeadTitlleProps) {
  return (
    <div className="text-center">
      <span className="inline-block text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent-200 to-accent-800 text-clip">
        {title}
      </span>
      <br />
      <p className=" my-6 text-lg">{description}</p>
    </div>
  );
}

export default HeadTitle;
