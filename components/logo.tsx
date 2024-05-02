"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

import { useMounted } from "@/hooks/use-mounted";
import { Skeleton } from "@/components/ui/skeleton";

const Logo = () => {
  const { theme } = useTheme();
  const { mounted } = useMounted();

  if (!mounted)
    return (
      <>
        <div className="items-center gap-x-1 sm:flex hidden">
          <Skeleton className="w-9 h-9" />
          <Skeleton className="w-[150px] h-8" />
        </div>

        <Skeleton className="w-[23px] h-[23px] block sm:hidden" />
      </>
    );

  if (theme === "light") {
    return (
      <Link href="/">
        <Image
          src="/assets/images/logo-light.svg"
          alt="logo"
          width={186}
          height={36}
          className="h-[36px] sm:block hidden"
          priority
        />
        <Image
          src="/assets/images/site-logo.svg"
          alt="logo"
          width={23}
          height={23}
          className="h-[23px] block sm:hidden"
          priority
        />
      </Link>
    );
  }

  return (
    <Link href="/">
      <Image
        src="/assets/images/logo-dark.svg"
        alt="logo"
        width={186}
        height={36}
        className="h-[36px] sm:block hidden"
        priority
      />
      <Image
        src="/assets/images/site-logo.svg"
        alt="logo"
        width={23}
        height={23}
        className="h-[23px] block sm:hidden"
        priority
      />
    </Link>
  );
};
export default Logo;
