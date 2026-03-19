import Link from "next/link";
import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const leaderboardPreviewRootVariants = tv({
  base: "flex w-full max-w-240 flex-col gap-6",
});

const leaderboardPreviewRowVariants = tv({
  base: "flex items-start gap-5 px-5 py-4",
  variants: {
    bordered: {
      true: "border-b border-border-primary",
      false: "",
    },
  },
  defaultVariants: {
    bordered: true,
  },
});

type LeaderboardPreviewRowVariants = VariantProps<
  typeof leaderboardPreviewRowVariants
>;

type LeaderboardPreviewItem = {
  id: string;
  rankTone: "text-accent-amber" | "text-text-secondary";
  score: string;
  scoreTone: "text-accent-red";
  lines: readonly string[];
  language: string;
};

type LeaderboardPreviewRootProps = ComponentProps<"section"> & {
  className?: string;
};

type LeaderboardPreviewHeaderProps = ComponentProps<"div"> & {
  className?: string;
};

type LeaderboardPreviewTitleProps = ComponentProps<"h2"> & {
  className?: string;
};

type LeaderboardPreviewDescriptionProps = ComponentProps<"p"> & {
  className?: string;
};

type LeaderboardPreviewTableProps = ComponentProps<"div"> & {
  className?: string;
};

type LeaderboardPreviewRowProps = ComponentProps<"div"> & {
  bordered?: LeaderboardPreviewRowVariants["bordered"];
  className?: string;
};

type LeaderboardPreviewFooterProps = ComponentProps<"div"> & {
  className?: string;
};

type LeaderboardPreviewProps = ComponentProps<"section"> & {
  items: readonly LeaderboardPreviewItem[];
  className?: string;
};

function LeaderboardPreviewRoot({
  className,
  children,
  ...props
}: LeaderboardPreviewRootProps) {
  return (
    <section
      className={cn(leaderboardPreviewRootVariants(), className)}
      {...props}
    >
      {children}
    </section>
  );
}

function LeaderboardPreviewHeader({
  className,
  children,
  ...props
}: LeaderboardPreviewHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function LeaderboardPreviewTitle({
  className,
  children,
  ...props
}: LeaderboardPreviewTitleProps) {
  return (
    <h2
      className={cn("text-sm font-bold text-text-primary", className)}
      {...props}
    >
      {children}
    </h2>
  );
}

function LeaderboardPreviewDescription({
  className,
  children,
  ...props
}: LeaderboardPreviewDescriptionProps) {
  return (
    <p className={cn("text-[13px] text-text-tertiary", className)} {...props}>
      {children}
    </p>
  );
}

function LeaderboardPreviewTable({
  className,
  children,
  ...props
}: LeaderboardPreviewTableProps) {
  return (
    <div
      className={cn("border border-border-primary bg-transparent", className)}
      {...props}
    >
      {children}
    </div>
  );
}

function LeaderboardPreviewRow({
  className,
  bordered = true,
  children,
  ...props
}: LeaderboardPreviewRowProps) {
  return (
    <div
      className={cn(leaderboardPreviewRowVariants({ bordered }), className)}
      {...props}
    >
      {children}
    </div>
  );
}

function LeaderboardPreviewFooter({
  className,
  children,
  ...props
}: LeaderboardPreviewFooterProps) {
  return (
    <div
      className={cn(
        "flex justify-center py-4 text-center text-xs text-text-tertiary",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function LeaderboardPreview({
  items,
  className,
  ...props
}: LeaderboardPreviewProps) {
  return (
    <LeaderboardPreviewRoot className={className} {...props}>
      <LeaderboardPreviewHeader>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-accent-green">{"//"}</span>
            <LeaderboardPreviewTitle>shame_leaderboard</LeaderboardPreviewTitle>
          </div>
          <LeaderboardPreviewDescription>
            {"// the worst code on the internet, ranked by shame"}
          </LeaderboardPreviewDescription>
        </div>

        <Button
          variant="ghost"
          className="self-start border px-3 py-1.5 text-xs sm:self-auto"
        >
          $ view_all &gt;&gt;
        </Button>
      </LeaderboardPreviewHeader>

      <LeaderboardPreviewTable>
        <div className="flex h-10 items-center border-b border-border-primary bg-bg-surface px-5 text-xs font-medium text-text-tertiary">
          <span className="w-12.5">#</span>
          <span className="w-17.5">score</span>
          <span className="flex-1">code</span>
          <span className="w-25">lang</span>
        </div>

        <div className="flex flex-col">
          {items.map((item, index) => (
            <LeaderboardPreviewRow
              key={item.id}
              bordered={index < items.length - 1}
            >
              <span className={cn("w-12.5 text-xs", item.rankTone)}>
                {item.id}
              </span>
              <span className={cn("w-17.5 text-xs font-bold", item.scoreTone)}>
                {item.score}
              </span>
              <div className="flex flex-1 flex-col gap-0.75 text-xs">
                {item.lines.map((line) => (
                  <span
                    key={`${item.id}-${line}`}
                    className={cn(
                      "font-mono text-xs text-text-primary",
                      line.startsWith("//") || line.startsWith("--")
                        ? "text-text-muted"
                        : undefined,
                    )}
                  >
                    {line}
                  </span>
                ))}
              </div>
              <span className="w-25 text-xs text-text-secondary">
                {item.language}
              </span>
            </LeaderboardPreviewRow>
          ))}
        </div>
      </LeaderboardPreviewTable>

      <LeaderboardPreviewFooter>
        <p>
          <span>showing top 3 of 2,847 · </span>
          <Link
            href="/#leaderboard"
            className="transition-colors hover:text-text-primary"
          >
            view full leaderboard &gt;&gt;
          </Link>
        </p>
      </LeaderboardPreviewFooter>
    </LeaderboardPreviewRoot>
  );
}

export type {
  LeaderboardPreviewDescriptionProps,
  LeaderboardPreviewFooterProps,
  LeaderboardPreviewHeaderProps,
  LeaderboardPreviewProps,
  LeaderboardPreviewRootProps,
  LeaderboardPreviewRowProps,
  LeaderboardPreviewTableProps,
  LeaderboardPreviewTitleProps,
};
export {
  LeaderboardPreview,
  LeaderboardPreviewDescription,
  LeaderboardPreviewFooter,
  LeaderboardPreviewHeader,
  LeaderboardPreviewRoot,
  LeaderboardPreviewRow,
  LeaderboardPreviewTable,
  LeaderboardPreviewTitle,
  leaderboardPreviewRowVariants,
};
