"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";
import { themes } from "@/constants";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ModeToggle = () => {
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 fill-primary-500 stroke-primary-500" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:-rotate-90 stroke-none fill-primary-500 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map(({ name, Icon }) => (
          <DropdownMenuItem
            key={name}
            onClick={() => setTheme(name)}
            className={cn(
              "flex items-center",
              theme === name &&
                "font-semibold text-primary-500 focus:text-primary-500"
            )}
          >
            <Icon
              className={cn(
                "w-4 h-4 mr-2 fill-current",
                theme === name && "fill-primary-500 stroke-primary-500"
              )}
            />{" "}
            <span className="capitalize">{name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default ModeToggle;
