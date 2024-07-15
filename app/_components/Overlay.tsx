import { ReactNode } from "react";

type OverlayProps = {
  children: ReactNode;
  show: boolean;
};
function Overlay({ children, show }: OverlayProps) {
  return (
    <div
      className={`${
        show ? "fixed top-0 left-0 right-0 bottom-0 bg-black/50" : ""
      }`}
    >
      {children}
    </div>
  );
}

export default Overlay;
