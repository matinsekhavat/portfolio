"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { ReactNode, memo, useCallback, useMemo } from "react";

interface WorkButtonProps {
  value: string;
  paramsKey: string;
  children: ReactNode;
}

const WorkButtons = memo(({ value, paramsKey, children }: WorkButtonProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const params = useMemo(
    () => new URLSearchParams(searchParams),
    [searchParams]
  );
  const hasParams = params.get(paramsKey) || "all";

  const handleClick = useCallback(() => {
    params.set(paramsKey, value);
    const newUrl = `${pathname}?${params.toString()}`;
    router.push(newUrl, {
      scroll: false,
    });
  }, [params, pathname, router, paramsKey, value]);

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
});

WorkButtons.displayName = "WorkButtons";

export default WorkButtons;
