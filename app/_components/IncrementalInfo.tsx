"use client";
import { ReactNode, useEffect, useState } from "react";
import { e2p } from "../_utils/replaceNumber";

type IncrementalProps = {
  initialValue?: number;
  incrementValue?: number;
  maxValue?: number;
  intervalDelay?: number;
  hasThousandSign?: boolean;
};

type infoProps = {
  hasSignPlus?: boolean;
  children: ReactNode;
};

type incrementalInfoProps = infoProps & IncrementalProps;
function IncrementalInfo({
  initialValue = 0,
  incrementValue = 27,
  maxValue = 100,
  intervalDelay = 200,
  children,
  hasSignPlus = false,
  hasThousandSign = false,
}: incrementalInfoProps) {
  const [number, setNumber] = useState<number>(initialValue);

  useEffect(() => {
    const interval = setInterval(() => {
      if (number < maxValue) {
        setNumber((prev) => prev + incrementValue);
      } else {
        clearInterval(interval);
      }
    }, intervalDelay);
    return () => clearInterval(interval);
  }, [number, maxValue, incrementValue, intervalDelay]);

  return (
    <div className="flex items-center text-xl max-w-64 gap-8 grow justify-center ">
      <span className="text-4xl sm:text-5xl md:text-7xl">
        {e2p(number).slice(0, 3)}
        {hasThousandSign ? "K" : ""}
        {hasSignPlus ? "+" : ""}
      </span>
      <span className="text-lg">{children}</span>
    </div>
  );
}

export default IncrementalInfo;
