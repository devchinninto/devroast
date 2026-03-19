# UI Component Standards

This document defines the conventions every component inside `src/components/ui/` must follow. Read it before creating or modifying any file in this directory.

## File & Naming Conventions

- One component per file. File name is kebab-case matching the component: `button.tsx`, `text-input.tsx`.
- Named exports only. Never use `export default`.
- Export the component function, its variants object, and its props type:

```ts
export type { ButtonProps };
export { Button, buttonVariants };
```

## Component Anatomy

Every component file follows this exact structure, in order:

```tsx
// 1. Type-only imports first (Biome organizeImports enforces this)
import type { ComponentProps } from "react";

// 2. Library imports
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

// 3. Variant definition with `tv()`
const buttonVariants = tv({
  base: "...",
  variants: {
    variant: {
      primary: "...",
      secondary: "...",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

// 4. Type derivation
type ButtonVariants = VariantProps<typeof buttonVariants>;

type ButtonProps = ComponentProps<"button"> &
  ButtonVariants & {
    className?: string;
  };

// 5. Component function (not arrow, not default export)
function Button({ className, variant, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant }), className)} {...props} />
  );
}

// 6. Exports: types first, then values
export type { ButtonProps };
export { Button, buttonVariants };
```

## Styling Rules

### Tailwind Variants (`tv`)

- Define all visual variants through `tv()` from `tailwind-variants`. Never use inline conditionals or ternaries for styling logic.
- Always provide `defaultVariants` so the component works with zero props.
- Name the variants object `<component>Variants` (e.g. `buttonVariants`, `inputVariants`).

### Class Merging

- Always wrap the final `className` with `cn()` from `@/lib/utils`, passing the variants result first and the consumer `className` second:

```tsx
className={cn(componentVariants({ variant, size }), className)}
```

- This ensures consumer overrides win via `tailwind-merge`.

### Design Tokens

- Use the Tailwind theme tokens defined in `globals.css` under `@theme inline`. Never hardcode hex colors unless absolutely required for a one-off value not in the token set.
- Key token prefixes available:
  - Backgrounds: `bg-page`, `bg-surface`, `bg-elevated`, `bg-input`
  - Text: `text-primary`, `text-secondary`, `text-tertiary`, `text-muted`
  - Borders: `border-primary`, `border-focus`
  - Accents: `accent-green`, `accent-red`, `accent-amber`, `accent-cyan`, `accent-orange`
  - Fonts: `font-mono` (JetBrains Mono), `font-sans` (system default)
- Use Tailwind's built-in `font-mono` and `font-sans` utility classes. Do not create custom `font-primary` or `font-secondary` tokens. The theme maps `--font-mono` to JetBrains Mono (loaded via `next/font/google`) and `--font-sans` to the system font stack.

## TypeScript Rules

- Extend the native HTML element props using `ComponentProps<"element">` from React. Do not use `HTMLAttributes` directly.
- Intersect with `VariantProps<typeof componentVariants>` for variant type safety.
- Always include `className?: string` in the props type even though it exists on the HTML element -- this makes the API explicit at the type level.
- Destructure `className`, all variant keys, and spread `...props` onto the underlying element.

## Accessibility

- All interactive components must include sensible focus-visible styles (e.g. `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus`).
- Disabled states use `disabled:pointer-events-none disabled:opacity-50`.
- Forward all native HTML attributes so consumers can pass `aria-*` props without wrapper boilerplate.

## Formatting

- Biome handles all formatting. Do not add Prettier or ESLint configs.
- 2-space indentation, double quotes, trailing commas, semicolons.
- Biome auto-organizes imports: type-only imports sort before value imports.

## Checklist Before Merging a New Component

1. File uses the anatomy template above.
2. No default exports.
3. Variants defined with `tv()`, merged with `cn()`.
4. Props extend `ComponentProps<"element">`.
5. `pnpm biome check .` passes with zero errors.
6. `pnpm build` compiles without TypeScript errors.
7. Component is added to the showcase page at `/components` for visual review.
