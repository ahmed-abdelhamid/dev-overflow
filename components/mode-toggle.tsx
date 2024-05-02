"use client";

import * as React from "react";
import { LaptopMinimal, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";
import { themes } from "@/constants";
import { useMounted } from "@/hooks/use-mounted";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";

const ModeToggle = () => {
  const { setTheme, theme } = useTheme();
  const { mounted } = useMounted();

  if (!mounted)
    return (
      <div className="w-10 h-10 flex items-center justify-center">
        <Skeleton className="w-5 h-5" />
      </div>
    );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          {theme === "light" && (
            <Sun className="h-5 w-5 fill-primary-500 stroke-primary-500" />
          )}
          {theme === "dark" && (
            <Moon className="h-5 w-5 stroke-none fill-primary-500" />
          )}
          {theme === "system" && (
            <LaptopMinimal className="h-5 w-5 fill-primary-500 stroke-primary-500" />
          )}
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
