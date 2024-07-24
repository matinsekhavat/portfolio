import React from "react";
import Image from "next/image";
import { ArrowLeft, Calendar } from "lucide-react";
import { e2p } from "@/app/_utils/replaceNumber";
import Link from "next/link";

interface ArticleItemProps {
  imageSrc: string;
  imageAlt: string;
  category: string;
  title: string;
  description: string;
  year: string;
  month: string;
  day: number;
  href: string;
}

const ArticleItem: React.FC<ArticleItemProps> = ({
  imageSrc,
  imageAlt,
  category,
  title,
  description,
  year,
  month,
  day,
  href,
}) => {
  return (
    <div className="p-3 rounded-xl bg-primary-850 flex flex-col justify-between">
      {/* Upperside */}
      <div className="relative w-full h-64">
        <Image
          alt={imageAlt}
          fill
          src={imageSrc}
          className="object-cover rounded-xl overflow-hidden"
        />
        {/* absolute div */}
        <div className="p-2 backdrop-blur-sm absolute top-2 right-2 rounded-full">
          {category}
        </div>
      </div>
      {/* downer side */}
      <div className="flex flex-col gap-4 mt-4">
        <h3 className="text-base sm:text-xl font-bold">{title}</h3>
        <p className="line-clamp-2 text-sm sm:text-base sm:line-clamp-3 font-light text-accent-200 my-2">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm sm:text-base">
            <Calendar />
            <p>
              {e2p(month)} ,{e2p(day)}, {e2p(year)}
            </p>
          </div>
          <Link href={href}>
            <ArrowLeft size={25} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleItem;
