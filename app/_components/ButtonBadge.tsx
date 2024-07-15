import { ReactNode } from "react";

type ButtonBadgeProps = {
  children: ReactNode;
};
function ButtonBadge({ children }: ButtonBadgeProps) {
  return (
    <button className="px-4 py-2 bg-gradient-to-r from-accent-900 to-accent-800 rounded-full text-lg">
      {children}
    </button>
  );
}

export default ButtonBadge;
