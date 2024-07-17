"use client";
import { useEffect, useState, useMemo, useCallback } from "react";
type TypeWriterProps = {
  textList: string[];
  speed: number;
};
export default function TypeWriter({ textList, speed = 120 }: TypeWriterProps) {
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  const newText = useMemo(() => {
    const currentText = textList[textIndex];
    return currentText.substring(0, index);
  }, [textList, textIndex, index]);

  const intervalCallback = useCallback(() => {
    const currentText = textList[textIndex];

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
        }
      }
    }
  }, [textList, index, isDeleting, textIndex]);

  useEffect(() => {
    const interval = setInterval(intervalCallback, speed);

    return () => clearInterval(interval);
  }, [intervalCallback]);

  return (
    <div>
      {newText}
      {/* Add a caret at the end of the newText to simulate a typing cursor */}
      <span>|</span>
    </div>
  );
}
//  v stop after
// "use client";
// import { useEffect, useState } from "react";

// export default function TypeWriter({ textList }: { textList: string[] }) {
//   const [newText, setNewText] = useState("");
//   const [index, setIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [textIndex, setTextIndex] = useState(0); // Track the current string in the textList
//   const [isTyping, setIsTyping] = useState(true); // Track if typing effect should continue

//   useEffect(() => {
//     if (!isTyping) {
//       setNewText(textList[0]);
//       return;
//     }

//     const interval = setInterval(() => {
//       const currentText = textList[textIndex];

//       if (!isDeleting) {
//         if (index < currentText.length) {
//           setNewText((prev) => prev + currentText.charAt(index));
//           setIndex((prev) => prev + 1);
//         } else {
//           setIsDeleting(true);
//         }
//       } else {
//         if (index > 0) {
//           setNewText((prev) => prev.slice(0, -1));
//           setIndex((prev) => prev - 1);
//         } else {
//           setIsDeleting(false);
//           if (textIndex < textList.length - 1) {
//             setTextIndex((prev) => prev + 1);
//           } else {
//             setIsTyping(false);
//           }
//         }
//       }
//     }, 100);

//     return () => clearInterval(interval);
//   }, [textList, index, isDeleting, textIndex, isTyping]);

//   return (
//     <div>
//       Hello I am {newText}
//       {/* Add a caret at the end of the newText to simulate a typing cursor */}
//       <span>|</span>
//     </div>
//   );
// }
