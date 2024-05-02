"use client";

import Link from "next/link";
import Image from "next/image";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

interface LogoProps {
  forceText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ forceText = false }) => {
  return (
    <Link href="/" className="flex items-center space-x-3">
      <Image
        src="/assets/images/site-logo.svg"
        alt="logo"
        width={23}
        height={23}
        className="h-[23px]"
        priority
      />

      <Typography
        variant="h2"
        weight="bold"
        className={cn(
          "text-primary-500 font-mono",
          forceText ? "block" : "hidden sm:block"
        )}
      >
        <span className="text-dark-100 dark:text-light-900">Dev</span>{" "}
        <span>OverFlow</span>
      </Typography>
    </Link>
  );
};
export default Logo;
