import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const typographyVariants = cva("", {
  variants: {
    variant: {
      default: "text-[14px] leading-[19.6px]",
      h1: "text-[30px] leading-[42px] tracking-[-1px]",
      h2: "text-[24px] leading-[31.2px]",
      h3: "text-[20px] leading-[26px]",
      p: "text-[16px] leading-[22.4px]",
      body: "text-[14px] leading-[19.6px]",
      base: "text-[18px] leading-[25.2px]",
      small: "text-[12px] leading-[15.6px]",
      subtle: "text-[10px] leading-[13px]",
    },
    weight: {
      default: "font-normal",
      regular: "font-normal",
      bold: "font-bold",
      semibold: "font-semibold",
      medium: "font-medium",
    },
  },
  defaultVariants: {
    variant: "default",
    weight: "default",
  },
});

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean;
}

const Typography: React.FC<TypographyProps> = ({
  className,
  variant,
  weight,
  children,
  asChild = false,
  ...props
}) => {
  if (variant === "h1") {
    return (
      <h1
        className={cn(typographyVariants({ variant, weight, className }))}
        {...props}
      >
        {children}
      </h1>
    );
  }

  if (variant === "h2") {
    return (
      <h2
        className={cn(typographyVariants({ variant, weight, className }))}
        {...props}
      >
        {children}
      </h2>
    );
  }

  if (variant === "h3") {
    return (
      <h3
        className={cn(typographyVariants({ variant, weight, className }))}
        {...props}
      >
        {children}
      </h3>
    );
  }

  if (variant === "p") {
    return (
      <p
        className={cn(typographyVariants({ variant, weight, className }))}
        {...props}
      >
        {children}
      </p>
    );
  }

  const Comp = asChild ? Slot : "div";
  return (
    <Comp className={cn(typographyVariants({ variant, weight, className }))}>
      {children}
    </Comp>
  );
};

Typography.displayName = "Typography";

export { Typography, typographyVariants };
