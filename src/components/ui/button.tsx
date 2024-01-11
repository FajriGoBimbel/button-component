import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-gray-500 text-white hover:bg-gray-500/90",
        error: "bg-red-400 text-white hover:bg-red-400/90",
        outline: "border border-input hover:bg-gray-200 hover:text-gray-800",
        secondary: "bg-blue-500 text-white hover:bg-blue-500/80",
        link: "underline-offset-4 hover:underline text-blue-500",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
      isTooltip: {
        true: true,
        false: false,
      },
      tooltipPosition: {
        top: "top",
        left: "left",
        right: "right",
        bottom: "bottom",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      isTooltip: false,
      tooltipPosition: "top",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  contentTooltip?: string;
  tooltipPosition?: string | any;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      isTooltip,
      tooltipPosition = "top",
      contentTooltip = "isi content",
      ...props
    },
    ref
  ) => {
    if (isTooltip) {
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
              />
            </TooltipTrigger>
            <TooltipContent side={tooltipPosition}>
              <p>{contentTooltip}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    }

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
