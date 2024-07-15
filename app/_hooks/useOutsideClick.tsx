import { useEffect } from "react";

type Handler = () => void;
type ListenCapturing = boolean; //default set to true

export default function useDetectOutsideClick(
  ref: React.RefObject<HTMLElement>,
  handler: Handler,
  listenCapturing: ListenCapturing = true
) {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        handler();
        console.log("clicked");
      }
    }

    document.addEventListener("click", handleClick, listenCapturing);

    return () =>
      document.removeEventListener("click", handleClick, listenCapturing);
  }, [ref, handler, listenCapturing]);
}
