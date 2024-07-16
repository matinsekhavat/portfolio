"use client";
import { ReactNode, useEffect, useState } from "react";
import { e2p } from "../_utils/replaceNumber";

type IncrementalProps = {
  initialValue?: number;
  incrementValue?: number;
  maxValue?: number;
  intervalDelay?: number;
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
    <div className="flex items-center text-xl  gap-4">
      <span className="md:text-4xl">
        {e2p(number)}
        {hasSignPlus ? "+" : ""}
      </span>
      <span>{children}</span>
    </div>
  );
}

export default IncrementalInfo;
