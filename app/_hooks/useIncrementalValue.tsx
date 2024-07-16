import { useState, useEffect } from "react";

interface UseIncrementalValueOptions {
  initialValue?: number;
  incrementValue?: number;
  maxValue?: number;
  intervalDelay?: number;
}

const useIncrementalValue = ({
  initialValue = 0,
  incrementValue = 27,
  maxValue = 100,
  intervalDelay = 200,
}: UseIncrementalValueOptions) => {
  const [value, setValue] = useState<number>(initialValue);

  useEffect(() => {
    const interval = setInterval(() => {
      if (value < maxValue) {
        setValue((prev) => prev + incrementValue);
      } else {
        clearInterval(interval);
      }
    }, intervalDelay);
    return () => clearInterval(interval);
  }, [value, maxValue, incrementValue, intervalDelay]);

  return value;
};

export default useIncrementalValue;
