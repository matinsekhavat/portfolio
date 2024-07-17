"use client";
import { useEffect, useState, useMemo, useCallback } from "react";

type TypeWriterProps = {
  textList: string[];
  speed: number;
  timeLoops?: number | false; // Add timeLoops prop
};

export default function TypeWriter({
  textList,
  speed = 120,
  timeLoops = false,
}: TypeWriterProps) {
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [loop, setLoop] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const newText = useMemo(() => {
    const currentText = textList[textIndex];
    return currentText.substring(0, index);
  }, [textList, textIndex, index]);

  const intervalCallback = useCallback(() => {
    if (!isTyping) {
      return;
    }

    const currentText = textList[textIndex];
    if (timeLoops === false || loop < timeLoops) {
      if (!isDeleting) {
        if (index < currentText.length) {
          setIndex((prev) => prev + 1);
        } else {
          setIsDeleting(true);
        }
      } else {
        if (index > 0) {
          setIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          if (textIndex < textList.length - 1) {
            setTextIndex((prev) => prev + 1);
          } else {
            setTextIndex(0);
            setLoop((prev) => prev + 1);
          }
        }
      }
    } else {
      setIsTyping(false);
    }
  }, [textList, index, isDeleting, textIndex, loop, isTyping, timeLoops]);

  useEffect(() => {
    if (!isTyping) {
      return;
    }

    const interval = setInterval(intervalCallback, speed);
    return () => clearInterval(interval);
  }, [intervalCallback, speed, isTyping]);

  return (
    <>
      {isTyping ? newText : textList[0]}
      <span className="blink">|</span>
    </>
  );
}
