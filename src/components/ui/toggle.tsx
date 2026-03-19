"use client";

import { Switch } from "@base-ui/react/switch";
import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

const toggleVariants = tv({
  base: "inline-flex items-center gap-3 font-mono text-xs",
});

const toggleRootVariants = tv({
  base: "group flex h-[22px] w-10 cursor-pointer items-center rounded-[11px] bg-border-primary p-[3px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus data-[checked]:bg-accent-green data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
});

const toggleThumbVariants = tv({
  base: "block size-4 rounded-full bg-text-secondary transition-[transform,background-color] data-[checked]:translate-x-[18px] data-[checked]:bg-bg-page",
});

type ToggleVariants = VariantProps<typeof toggleVariants>;

type ToggleProps = Omit<ComponentProps<"div">, "children"> &
  ToggleVariants & {
    className?: string;
    label?: string;
    checked?: boolean;
    defaultChecked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    disabled?: boolean;
    name?: string;
  };

function Toggle({
  className,
  label,
  checked,
  defaultChecked,
  onCheckedChange,
  disabled,
  name,
  ...props
}: ToggleProps) {
  return (
    <div className={cn(toggleVariants(), className)} {...props}>
      <Switch.Root
        checked={checked}
        defaultChecked={defaultChecked}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
        name={name}
        className={toggleRootVariants()}
      >
        <Switch.Thumb className={toggleThumbVariants()} />
      </Switch.Root>
      {label ? (
        <span className="text-text-secondary group-has-[data-checked]:text-accent-green transition-colors">
          {label}
        </span>
      ) : null}
    </div>
  );
}

export type { ToggleProps };
export { Toggle, toggleVariants };
