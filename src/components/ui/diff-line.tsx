import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

const diffLineVariants = tv({
  base: "flex w-full gap-2 px-4 py-2 font-mono text-[13px]",
  variants: {
    variant: {
      added: "bg-[#0A1A0F] text-text-primary",
      removed: "bg-[#1A0A0A] text-text-secondary",
      context: "bg-transparent text-text-secondary",
    },
  },
  defaultVariants: {
    variant: "context",
  },
});

const prefixMap = {
  added: "+",
  removed: "-",
  context: " ",
} as const;

const prefixColorMap = {
  added: "text-accent-green",
  removed: "text-accent-red",
  context: "text-text-tertiary",
} as const;

type DiffLineVariants = VariantProps<typeof diffLineVariants>;

type DiffLineProps = ComponentProps<"div"> &
  DiffLineVariants & {
    className?: string;
  };

function DiffLine({
  className,
  variant = "context",
  children,
  ...props
}: DiffLineProps) {
  const resolvedVariant = variant ?? "context";

  return (
    <div className={cn(diffLineVariants({ variant }), className)} {...props}>
      <span className={prefixColorMap[resolvedVariant]} aria-hidden="true">
        {prefixMap[resolvedVariant]}
      </span>
      <span>{children}</span>
    </div>
  );
}

export type { DiffLineProps };
export { DiffLine, diffLineVariants };
