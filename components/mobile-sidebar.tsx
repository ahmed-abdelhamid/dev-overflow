"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { cn } from "@/lib/utils";
import { navLinks } from "@/constants";

import { Typography } from "@/components/ui/typography";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";

const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const openDrawer = () => setIsOpen(true);
  const closeDrawer = () => setIsOpen(false);

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen} direction="left">
      <DrawerTrigger className="block sm:hidden">
        <Menu className="h-9 w-9" />
      </DrawerTrigger>
      <DrawerContent className="inset-y-0 mt-0 w-[300px]">
        <DrawerHeader>
          <div onClick={closeDrawer}>
            <Logo forceText />
          </div>
        </DrawerHeader>

        <nav className="w-full pt-16 px-6">
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
                  onClick={closeDrawer}
                >
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
                    <span>{label}</span>
                  </Link>
                </li>
              </Typography>
            ))}
          </ul>
        </nav>

        <DrawerFooter>
          <div className="flex flex-col w-full space-y-3">
            <Button
              size="lg"
              className="bg-light-800 hover:bg-light-700 dark:bg-dark-400 dark:hover:bg-dark-300 p-0"
            >
              <span className="text-transparent bg-clip-text bg-primary-gradient">
                Login
              </span>
            </Button>

            <Button
              size="lg"
              className="bg-light-700 text-dark-400 hover:bg-light-800 border-light-700 hover:border-light-800 dark:bg-dark-300 dark:border-dark-400 border dark:text-light-900 dark:hover:bg-dark-400 p-0"
            >
              <span>Sign Up</span>
            </Button>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
export default MobileSidebar;
