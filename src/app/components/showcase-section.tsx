import type { ComponentProps } from "react";
import { tv } from "tailwind-variants";
import { cn } from "@/lib/utils";

const showcaseSectionVariants = tv({
  base: "flex flex-col gap-6",
});

const showcaseSectionHeaderVariants = tv({
  base: "flex items-center gap-3",
});

const showcaseSectionImportVariants = tv({
  base: "text-xs text-text-secondary",
});

const showcasePanelVariants = tv({
  base: "flex flex-col gap-6 rounded border border-border-primary bg-bg-surface p-8",
});

const showcasePanelTitleVariants = tv({
  base: "text-xs font-medium uppercase tracking-widest text-text-tertiary",
});

type ShowcaseSectionProps = ComponentProps<"section"> & {
  className?: string;
};

type ShowcaseSectionHeaderProps = ComponentProps<"div"> & {
  className?: string;
};

type ShowcaseSectionImportProps = ComponentProps<"p"> & {
  className?: string;
};

type ShowcasePanelProps = ComponentProps<"div"> & {
  className?: string;
};

type ShowcasePanelTitleProps = ComponentProps<"h3"> & {
  className?: string;
};

function ShowcaseSection({
  className,
  children,
  ...props
}: ShowcaseSectionProps) {
  return (
    <section className={cn(showcaseSectionVariants(), className)} {...props}>
      {children}
    </section>
  );
}

function ShowcaseSectionHeader({
  className,
  children,
  ...props
}: ShowcaseSectionHeaderProps) {
  return (
    <div className={cn(showcaseSectionHeaderVariants(), className)} {...props}>
      {children}
    </div>
  );
}

function ShowcaseSectionImport({
  className,
  children,
  ...props
}: ShowcaseSectionImportProps) {
  return (
    <p className={cn(showcaseSectionImportVariants(), className)} {...props}>
      {children}
    </p>
  );
}

function ShowcasePanel({ className, children, ...props }: ShowcasePanelProps) {
  return (
    <div className={cn(showcasePanelVariants(), className)} {...props}>
      {children}
    </div>
  );
}

function ShowcasePanelTitle({
  className,
  children,
  ...props
}: ShowcasePanelTitleProps) {
  return (
    <h3 className={cn(showcasePanelTitleVariants(), className)} {...props}>
      {children}
    </h3>
  );
}

export type {
  ShowcasePanelProps,
  ShowcasePanelTitleProps,
  ShowcaseSectionHeaderProps,
  ShowcaseSectionImportProps,
  ShowcaseSectionProps,
};
export {
  ShowcasePanel,
  ShowcasePanelTitle,
  ShowcaseSection,
  ShowcaseSectionHeader,
  ShowcaseSectionImport,
};
