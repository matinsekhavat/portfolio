import { Command } from "lucide-react";
type HeroBadgeProps = {
  children: JSX.Element;
};
function HeroBadge({ children }: HeroBadgeProps) {
  return (
    <button className=" size-14   border border-accent-800 rounded-full flex items-center justify-center text-accent-800">
      {children}
    </button>
  );
}

export default HeroBadge;
