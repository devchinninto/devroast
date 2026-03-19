import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CardDescription, CardRoot, CardTitle } from "@/components/ui/card";
import { CodeBlock } from "@/components/ui/code-block";
import { DiffLine } from "@/components/ui/diff-line";
import { ScoreRing } from "@/components/ui/score-ring";
import { TableRow } from "@/components/ui/table-row";
import {
  ShowcasePanel,
  ShowcasePanelTitle,
  ShowcaseSection,
  ShowcaseSectionHeader,
  ShowcaseSectionImport,
} from "./showcase-section";
import { ToggleDemo } from "./toggle-demo";

const sampleCode = `function calculateTotal(items) {
  var total = 0;
  for (var i = 0; i < items.length; i++) {
    total = total + items[i].price;
  }
}`;

export default function ComponentShowcase() {
  return (
    <div className="min-h-screen bg-bg-page p-10 font-mono text-text-primary">
      <header className="mb-12">
        <h1 className="text-2xl font-medium text-accent-green">
          {"// component_showcase"}
        </h1>
        <p className="mt-2 text-sm text-text-secondary">
          Visual reference for all UI components and their variants.
        </p>
      </header>

      <main className="flex max-w-3xl flex-col gap-16">
        {/* ── Button ─────────────────────────────────── */}
        <ShowcaseSection>
          <ShowcaseSectionHeader>
            <span className="text-accent-green">{"//"}</span>
            <h2 className="text-lg font-medium">Button</h2>
          </ShowcaseSectionHeader>
          <ShowcaseSectionImport>
            {'import { Button } from "@/components/ui/button"'}
          </ShowcaseSectionImport>

          <ShowcasePanel>
            <ShowcasePanelTitle>Variants</ShowcasePanelTitle>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary">$ roast_my_code</Button>
              <Button variant="secondary">$ share_roast</Button>
              <Button variant="ghost">{"$ view_all >>"}</Button>
            </div>
          </ShowcasePanel>

          <ShowcasePanel>
            <ShowcasePanelTitle>Disabled</ShowcasePanelTitle>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary" disabled>
                $ roast_my_code
              </Button>
              <Button variant="secondary" disabled>
                $ share_roast
              </Button>
              <Button variant="ghost" disabled>
                {"$ view_all >>"}
              </Button>
            </div>
          </ShowcasePanel>
        </ShowcaseSection>

        {/* ── Badge ──────────────────────────────────── */}
        <ShowcaseSection>
          <ShowcaseSectionHeader>
            <span className="text-accent-green">{"//"}</span>
            <h2 className="text-lg font-medium">Badge</h2>
          </ShowcaseSectionHeader>
          <ShowcaseSectionImport>
            {'import { Badge } from "@/components/ui/badge"'}
          </ShowcaseSectionImport>

          <ShowcasePanel>
            <ShowcasePanelTitle>Variants</ShowcasePanelTitle>
            <div className="flex flex-wrap items-center gap-6">
              <Badge variant="critical">critical</Badge>
              <Badge variant="warning">warning</Badge>
              <Badge variant="good">good</Badge>
            </div>
          </ShowcasePanel>
        </ShowcaseSection>

        {/* ── Toggle ─────────────────────────────────── */}
        <ShowcaseSection>
          <ShowcaseSectionHeader>
            <span className="text-accent-green">{"//"}</span>
            <h2 className="text-lg font-medium">Toggle</h2>
          </ShowcaseSectionHeader>
          <ShowcaseSectionImport>
            {'import { Toggle } from "@/components/ui/toggle"'}
          </ShowcaseSectionImport>

          <ShowcasePanel>
            <ShowcasePanelTitle>States</ShowcasePanelTitle>
            <ToggleDemo />
          </ShowcasePanel>
        </ShowcaseSection>

        {/* ── Card ───────────────────────────────────── */}
        <ShowcaseSection>
          <ShowcaseSectionHeader>
            <span className="text-accent-green">{"//"}</span>
            <h2 className="text-lg font-medium">Card</h2>
          </ShowcaseSectionHeader>
          <ShowcaseSectionImport>
            {
              'import { CardRoot, CardTitle, CardDescription } from "@/components/ui/card"'
            }
          </ShowcaseSectionImport>

          <ShowcasePanel>
            <ShowcasePanelTitle>Composable</ShowcasePanelTitle>
            <div className="grid gap-5 md:grid-cols-2">
              <CardRoot tone="critical">
                <Badge variant="critical">critical</Badge>
                <CardTitle>using var instead of const/let</CardTitle>
                <CardDescription>
                  var is function-scoped and leads to hoisting bugs. use const
                  by default, let when reassignment is needed.
                </CardDescription>
              </CardRoot>

              <CardRoot tone="warning">
                <Badge variant="warning">warning</Badge>
                <CardTitle>imperative loop pattern</CardTitle>
                <CardDescription>
                  for loops are verbose and error-prone. use `.reduce()` or
                  `.map()` for cleaner, functional transformations.
                </CardDescription>
              </CardRoot>

              <CardRoot tone="good">
                <Badge variant="good">good</Badge>
                <CardTitle>clear naming conventions</CardTitle>
                <CardDescription>
                  calculateTotal and items are descriptive, self-documenting
                  names that communicate intent without comments.
                </CardDescription>
              </CardRoot>

              <CardRoot tone="good">
                <Badge variant="good">good</Badge>
                <CardTitle>single responsibility</CardTitle>
                <CardDescription>
                  the function does one thing well - calculates a total. no side
                  effects, no mixed concerns, no hidden complexity.
                </CardDescription>
              </CardRoot>
            </div>
          </ShowcasePanel>
        </ShowcaseSection>

        {/* ── CodeBlock ──────────────────────────────── */}
        <ShowcaseSection>
          <ShowcaseSectionHeader>
            <span className="text-accent-green">{"//"}</span>
            <h2 className="text-lg font-medium">CodeBlock</h2>
          </ShowcaseSectionHeader>
          <ShowcaseSectionImport>
            {'import { CodeBlock } from "@/components/ui/code-block"'}
          </ShowcaseSectionImport>

          <ShowcasePanel>
            <ShowcasePanelTitle>
              Server Component (shiki + vesper)
            </ShowcasePanelTitle>
            <CodeBlock
              code={sampleCode}
              lang="javascript"
              filename="calculate.js"
            />
          </ShowcasePanel>
        </ShowcaseSection>

        {/* ── DiffLine ───────────────────────────────── */}
        <ShowcaseSection>
          <ShowcaseSectionHeader>
            <span className="text-accent-green">{"//"}</span>
            <h2 className="text-lg font-medium">DiffLine</h2>
          </ShowcaseSectionHeader>
          <ShowcaseSectionImport>
            {'import { DiffLine } from "@/components/ui/diff-line"'}
          </ShowcaseSectionImport>

          <ShowcasePanel>
            <ShowcasePanelTitle>Variants</ShowcasePanelTitle>
            <div className="flex flex-col">
              <DiffLine variant="removed">var total = 0;</DiffLine>
              <DiffLine variant="added">const total = 0;</DiffLine>
              <DiffLine variant="context">
                {"for (let i = 0; i < items.length; i++) {"}
              </DiffLine>
            </div>
          </ShowcasePanel>
        </ShowcaseSection>

        {/* ── TableRow ───────────────────────────────── */}
        <ShowcaseSection>
          <ShowcaseSectionHeader>
            <span className="text-accent-green">{"//"}</span>
            <h2 className="text-lg font-medium">TableRow</h2>
          </ShowcaseSectionHeader>
          <ShowcaseSectionImport>
            {'import { TableRow } from "@/components/ui/table-row"'}
          </ShowcaseSectionImport>

          <ShowcasePanel>
            <ShowcasePanelTitle>Composable</ShowcasePanelTitle>
            <div className="flex flex-col">
              <TableRow>
                <span className="w-10 text-[13px] text-text-tertiary">#1</span>
                <span className="w-15 text-[13px] font-bold text-accent-red">
                  2.1
                </span>
                <span className="flex-1 text-xs text-text-secondary">
                  {"function calculateTotal(items) { var total = 0; ..."}
                </span>
                <span className="w-25 text-xs text-text-tertiary">
                  javascript
                </span>
              </TableRow>
              <TableRow>
                <span className="w-10 text-[13px] text-text-tertiary">#2</span>
                <span className="w-15 text-[13px] font-bold text-accent-amber">
                  5.4
                </span>
                <span className="flex-1 text-xs text-text-secondary">
                  {"const data = await fetch('/api/users').then(r => r.json())"}
                </span>
                <span className="w-25 text-xs text-text-tertiary">
                  typescript
                </span>
              </TableRow>
            </div>
          </ShowcasePanel>
        </ShowcaseSection>

        {/* ── ScoreRing ──────────────────────────────── */}
        <ShowcaseSection>
          <ShowcaseSectionHeader>
            <span className="text-accent-green">{"//"}</span>
            <h2 className="text-lg font-medium">ScoreRing</h2>
          </ShowcaseSectionHeader>
          <ShowcaseSectionImport>
            {'import { ScoreRing } from "@/components/ui/score-ring"'}
          </ShowcaseSectionImport>

          <ShowcasePanel>
            <ShowcasePanelTitle>Scores</ShowcasePanelTitle>
            <div className="flex flex-wrap items-center gap-10">
              <ScoreRing score={3.5} />
              <ScoreRing score={7.2} />
              <ScoreRing score={9.8} />
            </div>
          </ShowcasePanel>
        </ShowcaseSection>
      </main>
    </div>
  );
}
