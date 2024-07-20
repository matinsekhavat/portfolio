"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";

interface WorkButtonProps {
  value: string;
  paramsKey: string;
  children: ReactNode;
}

interface WorkButtonProps {
  value: string;
  paramsKey: string;
  children: React.ReactNode;
}

const WorkButtons = ({ value, paramsKey, children }: WorkButtonProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const params = new URLSearchParams(searchParams);
  const hasParams = params.get(paramsKey) || "all";

  const handleClick = () => {
    params.set(paramsKey, value);
    const newUrl = `${pathname}?${params.toString()}`;
    router.push(newUrl, {
      scroll: false,
    });
  };

  return (
    <button
      onClick={handleClick}
      className={`p-4 border border-accent-800 rounded-xl text-w ${
        value === hasParams ? "bg-accent-800" : ""
      }`}
    >
      {children}
    </button>
  );
};

export default WorkButtons;
