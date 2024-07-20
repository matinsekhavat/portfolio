import React from "react";
import Image from "next/image";
import { e2p } from "@/app/_utils/replaceNumber";

interface Props {
  imageSrc: string;
  imageAlt: string;
  percentage: number;
  title: string;
}

const FlexCard: React.FC<Props> = ({
  imageSrc,
  imageAlt,
  percentage,
  title,
}) => {
  return (
    <div className="text-center">
      {/* Upper side */}
      <div className="h-[213px] bg-primary-850 flex flex-col items-center justify-between text-center rounded-3xl py-5 px-4 border border-transparent hover:border-accent-800   transition-all cursor-alias">
        <div className="relative size-28">
          <Image src={imageSrc} fill className="object-cover" alt={imageAlt} />
          {/* percentage */}
        </div>
        <p className="text-2xl">{e2p(percentage)}%</p>
      </div>
      {/* sub */}
      <p className="my-4 text-xl">{title}</p>
    </div>
  );
};

export default FlexCard;
