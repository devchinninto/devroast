import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

const buttonVariants = tv({
  base: "inline-flex cursor-pointer items-center justify-center font-mono transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed",
  variants: {
    variant: {
      primary:
        "bg-accent-green text-[#0A0A0A] text-[13px] font-medium py-2.5 px-6 enabled:hover:bg-accent-green/90",
      secondary:
        "bg-transparent text-text-primary text-xs font-normal py-2 px-4 border border-border-primary enabled:hover:bg-bg-elevated",
      ghost:
        "bg-transparent text-text-secondary text-xs font-normal py-1.5 px-3 border border-border-primary enabled:hover:text-text-primary enabled:hover:bg-bg-elevated",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

type ButtonVariants = VariantProps<typeof buttonVariants>;

type ButtonProps = ComponentProps<"button"> &
  ButtonVariants & {
    className?: string;
  };

function Button({ className, variant, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant }), className)} {...props} />
  );
}

export type { ButtonProps };
export { Button, buttonVariants };
