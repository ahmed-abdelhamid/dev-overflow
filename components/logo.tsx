"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

import { useMounted } from "@/hooks/use-mounted";
import { Skeleton } from "./ui/skeleton";

const Logo = () => {
  const { theme } = useTheme();
  const { mounted } = useMounted();

  if (!mounted)
    return (
      <div className="flex items-center gap-x-1">
        <Skeleton className="w-9 h-9" />
        <Skeleton className="w-[150px] h-8" />
      </div>
    );

  if (theme === "light") {
    return (
      <div>
        <Image
          src="/assets/images/logo-light.svg"
          alt="logo"
          width={186}
          height={36}
          className="h-[36px]"
          priority
        />
      </div>
    );
  }

  return (
    <div>
      <Image
        src="/assets/images/logo-dark.svg"
        alt="logo"
        width={186}
        height={36}
        className="h-[36px]"
        priority
      />
    </div>
  );
};
export default Logo;
