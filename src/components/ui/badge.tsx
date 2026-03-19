import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

const badgeVariants = tv({
  base: "inline-flex items-center gap-2 font-mono text-xs font-normal",
  variants: {
    variant: {
      critical: "text-accent-red",
      warning: "text-accent-amber",
      good: "text-accent-green",
    },
  },
  defaultVariants: {
    variant: "good",
  },
});

type BadgeVariants = VariantProps<typeof badgeVariants>;

type BadgeProps = ComponentProps<"span"> &
  BadgeVariants & {
    className?: string;
  };

function Badge({ className, variant, children, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props}>
      <span className="block size-2 rounded-full bg-current" />
      {children}
    </span>
  );
}

export type { BadgeProps };
export { Badge, badgeVariants };
