"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navLinks } from "@/constants";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="fixed w-[103px] lg:w-[266px] left-0 border-r pb-8 border-light-800 shadow-light-200 dark:shadow-none dark:border-dark-500 dark:bg-dark-200 inset-y-0 top-[100px] sm:flex justify-between items-center px-6 hidden flex-col pt-10">
      <nav className="w-full">
        <ul className="space-y-6">
          {navLinks.map(({ label, href, icon }) => (
            <Typography key={label} asChild variant="base">
              <li
                className={cn(
                  "rounded-lg transition",
                  pathname === href &&
                    "bg-primary-gradient text-light-900 font-bold",
                  pathname !== href &&
                    "hover:bg-slate-100 dark:hover:bg-dark-400"
                )}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={href}
                      className="flex w-full gap-x-3 p-4 items-center"
                    >
                      <Image
                        src={icon}
                        alt={label}
                        width={24}
                        height={24}
                        className={cn(
                          "h-6 invert dark:invert-0",
                          pathname === href && "invert-0"
                        )}
                      />
                      <span className="hidden lg:block">{label}</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent className="block lg:hidden">
                    <Typography variant="small">{label}</Typography>
                  </TooltipContent>
                </Tooltip>
              </li>
            </Typography>
          ))}
        </ul>
      </nav>

      <div className="flex flex-col w-full space-y-3">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="lg"
              className="bg-light-800 hover:bg-light-700 dark:bg-dark-400 dark:hover:bg-dark-300 p-0"
            >
              <span className="text-transparent bg-clip-text bg-primary-gradient hidden lg:block">
                Login
              </span>
              <Image
                src="/assets/icons/account.svg"
                alt="login"
                width={20}
                height={20}
                className="h-5 lg:hidden block dark:invert-0 invert"
              />
            </Button>
          </TooltipTrigger>
          <TooltipContent className="block lg:hidden" sideOffset={15}>
            <Typography variant="small">Login</Typography>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="lg"
              className="bg-light-700 text-dark-400 hover:bg-light-800 border-light-700 hover:border-light-800 dark:bg-dark-300 dark:border-dark-400 border dark:text-light-900 dark:hover:bg-dark-400 p-0"
            >
              <span className="hidden lg:block">Sign Up</span>
              <Image
                src="/assets/icons/sign-up.svg"
                alt="login"
                width={20}
                height={20}
                className="h-5 lg:hidden block dark:invert-0 invert"
              />
            </Button>
          </TooltipTrigger>
          <TooltipContent className="block lg:hidden" sideOffset={15}>
            <Typography variant="small">Sign Up</Typography>
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
};
export default Sidebar;
