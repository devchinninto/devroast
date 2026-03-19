# Project Guidelines

## Product
- `DevRoast` is a developer-focused app that lets users paste code, get roasted, and browse a shame leaderboard.
- Current UI is static-first; interactivity is being added incrementally.

## Stack
- Next.js App Router
- React 19
- Tailwind CSS v4
- Biome for formatting/checks

## Global Rules
- Prefer composition over prop-heavy APIs for UI components.
- Use named exports for all components and subcomponents.
- Reuse design tokens from `src/app/globals.css`; avoid hardcoded colors unless strictly necessary.
- Use `cn()` for class merging; avoid template/interpolated class concatenation when `cn()` is clearer.
- Keep the visual language aligned with the Pencil file and existing terminal-inspired style.

## Pages
- `src/app/page.tsx` is the main product entry and should stay focused on the core flow.
- `src/app/components/page.tsx` is the visual showcase for reusable UI pieces.

## Validation
- Run `pnpm biome check ...` on changed files.
- Run `pnpm build` for meaningful UI/component changes.
