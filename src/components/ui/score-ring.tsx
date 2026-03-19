import { cn } from "@/lib/utils";

import "./score-ring.css";

type ScoreRingProps = {
  score: number;
  max?: number;
  size?: number;
  className?: string;
};

function ScoreRing({ score, max = 10, size = 180, className }: ScoreRingProps) {
  const center = size / 2;
  const radius = center - 4;
  const circumference = 2 * Math.PI * radius;
  const ratio = Math.min(score / max, 1);
  const offset = circumference * (1 - ratio);
  const scoreColor =
    score <= 4
      ? "score-ring--critical"
      : score <= 7
        ? "score-ring--warning"
        : "score-ring--good";
  const sizeClass = size === 120 ? "score-ring--120" : "score-ring--180";

  return (
    <div
      className={cn(
        "score-ring relative inline-flex items-center justify-center",
        scoreColor,
        sizeClass,
        className,
      )}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="absolute inset-0 -rotate-90"
      >
        <title>Score ring</title>
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={4}
          className="text-border-primary"
        />
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="url(#score-gradient)"
          strokeWidth={4}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
        <defs>
          <linearGradient id="score-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--color-accent-red)" />
            <stop offset="35%" stopColor="var(--color-accent-amber)" />
            <stop offset="100%" stopColor="var(--color-accent-green)" />
          </linearGradient>
        </defs>
      </svg>
      <div className="relative flex items-center gap-0.5">
        <span className="font-mono text-5xl leading-none font-bold text-text-primary">
          {score}
        </span>
        <span className="font-mono text-base leading-none text-text-tertiary">
          /{max}
        </span>
      </div>
    </div>
  );
}

export type { ScoreRingProps };
export { ScoreRing };
