import { Button } from "@/components/ui/button";
import { CodeEditor } from "@/components/ui/code-editor";
import {
  LeaderboardPreviewDescription,
  LeaderboardPreviewFooter,
  LeaderboardPreviewHeader,
  LeaderboardPreviewRoot,
  LeaderboardPreviewRow,
  LeaderboardPreviewTable,
  LeaderboardPreviewTitle,
} from "@/components/ui/leaderboard-preview";
import { Toggle } from "@/components/ui/toggle";

const leaderboardItems = [
  {
    id: "1",
    rankTone: "text-accent-amber",
    score: "1.2",
    scoreTone: "text-accent-red",
    lines: [
      'eval(prompt("enter code"))',
      "document.write(response)",
      "// trust the user lol",
    ],
    language: "javascript",
  },
  {
    id: "2",
    rankTone: "text-text-secondary",
    score: "1.8",
    scoreTone: "text-accent-red",
    lines: [
      "if (x == true) { return true; }",
      "else if (x == false) { return false; }",
      "else { return !false; }",
    ],
    language: "typescript",
  },
  {
    id: "3",
    rankTone: "text-text-secondary",
    score: "2.1",
    scoreTone: "text-accent-red",
    lines: ["SELECT * FROM users WHERE 1=1", "-- TODO: add authentication"],
    language: "sql",
  },
] as const;

export default async function Home() {
  return (
    <main>
      <div className="mx-auto flex w-full max-w-260 flex-col px-6 pb-16 pt-20 sm:px-10">
        <section className="flex flex-col items-center gap-8 text-center">
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-3">
              <span className="text-4xl font-bold text-accent-green">$</span>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                paste your code. get roasted.
              </h1>
            </div>

            <p className="max-w-195 text-sm text-text-secondary">
              {
                "// drop your code below and we'll rate it - brutally honest or full roast mode"
              }
            </p>
          </div>

          <div className="w-full max-w-195">
            <CodeEditor initialCode="" />
          </div>

          <div className="flex w-full max-w-195 flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-2 text-left sm:flex-row sm:items-center sm:gap-4">
              <Toggle label="roast mode" defaultChecked />
              <span className="text-xs text-text-tertiary">
                {"// maximum sarcasm enabled"}
              </span>
            </div>

            <Button variant="primary">$ roast_my_code</Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-center text-xs text-text-tertiary">
            <span>2,847 codes roasted</span>
            <span>·</span>
            <span>avg score: 4.2/10</span>
          </div>
        </section>

        <div className="h-15" />

        <section id="leaderboard" className="mx-auto w-full">
          <LeaderboardPreviewRoot className="mx-auto">
            <LeaderboardPreviewHeader>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-accent-green">
                    {"//"}
                  </span>
                  <LeaderboardPreviewTitle>
                    shame_leaderboard
                  </LeaderboardPreviewTitle>
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
                {leaderboardItems.map((item, index) => (
                  <LeaderboardPreviewRow
                    key={item.id}
                    bordered={index < leaderboardItems.length - 1}
                  >
                    <span className={`${item.rankTone} w-12.5 text-xs`}>
                      {item.id}
                    </span>
                    <span
                      className={`${item.scoreTone} w-17.5 text-xs font-bold`}
                    >
                      {item.score}
                    </span>
                    <div className="flex flex-1 flex-col gap-0.75 text-xs">
                      {item.lines.map((line) => (
                        <span
                          key={`${item.id}-${line}`}
                          className={
                            line.startsWith("//") || line.startsWith("--")
                              ? "font-mono text-xs text-text-muted"
                              : "font-mono text-xs text-text-primary"
                          }
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
                <a
                  href="/#leaderboard"
                  className="transition-colors hover:text-text-primary"
                >
                  view full leaderboard &gt;&gt;
                </a>
              </p>
            </LeaderboardPreviewFooter>
          </LeaderboardPreviewRoot>
        </section>
      </div>
    </main>
  );
}
