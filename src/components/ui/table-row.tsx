import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

const tableRowVariants = tv({
  base: "flex items-center gap-5 border-b border-border-primary px-5 py-4",
});

type TableRowVariants = VariantProps<typeof tableRowVariants>;

type TableRowProps = ComponentProps<"div"> &
  TableRowVariants & {
    className?: string;
  };

function TableRow({ className, children, ...props }: TableRowProps) {
  return (
    <div className={cn(tableRowVariants(), className)} {...props}>
      {children}
    </div>
  );
}

export type { TableRowProps };
export { TableRow, tableRowVariants };
