import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

const cardRootVariants = tv({
  base: "flex flex-col gap-3 border border-border-primary p-5",
  variants: {
    tone: {
      default: "",
      critical: "",
      warning: "",
      good: "",
    },
  },
  defaultVariants: {
    tone: "default",
  },
});

const cardTitleVariants = tv({
  base: "text-[13px] text-text-primary",
});

const cardDescriptionVariants = tv({
  base: "text-xs leading-relaxed text-text-secondary",
});

type CardRootVariants = VariantProps<typeof cardRootVariants>;

type CardRootProps = ComponentProps<"div"> &
  CardRootVariants & {
    className?: string;
  };

type CardTitleProps = ComponentProps<"span"> & {
  className?: string;
};

type CardDescriptionProps = ComponentProps<"p"> & {
  className?: string;
};

function CardRoot({ className, tone, children, ...props }: CardRootProps) {
  return (
    <div className={cn(cardRootVariants({ tone }), className)} {...props}>
      {children}
    </div>
  );
}

function CardTitle({ className, children, ...props }: CardTitleProps) {
  return (
    <span className={cn(cardTitleVariants(), className)} {...props}>
      {children}
    </span>
  );
}

function CardDescription({
  className,
  children,
  ...props
}: CardDescriptionProps) {
  return (
    <p className={cn(cardDescriptionVariants(), className)} {...props}>
      {children}
    </p>
  );
}

export type { CardDescriptionProps, CardRootProps, CardTitleProps };
export {
  CardDescription,
  CardRoot,
  CardTitle,
  cardDescriptionVariants,
  cardRootVariants,
  cardTitleVariants,
};
