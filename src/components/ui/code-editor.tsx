"use client";

import type { ComponentProps } from "react";
import { useMemo, useState } from "react";
import { tv } from "tailwind-variants";
import { cn } from "@/lib/utils";

const codeEditorRootVariants = tv({
  base: "overflow-hidden border border-border-primary bg-bg-input",
});

const codeEditorHeaderVariants = tv({
  base: "flex h-10 items-center border-b border-border-primary px-4",
});

const codeEditorDotsVariants = tv({
  base: "flex items-center gap-2",
});

const codeEditorBodyVariants = tv({
  base: "flex min-h-90 items-start",
});

const codeEditorLineNumbersVariants = tv({
  base: "flex w-12 flex-col items-end justify-start gap-2 border-r border-border-primary bg-bg-surface px-3 py-4 text-xs text-text-tertiary",
});

const codeEditorInputWrapVariants = tv({
  base: "min-w-0 flex-1 self-start p-4",
});

const codeEditorInputVariants = tv({
  base: "block min-h-[304px] w-full resize-none bg-transparent text-left font-mono text-xs leading-5 text-text-primary outline-none placeholder:text-text-tertiary",
});

const MIN_EDITOR_LINES = 14;

type CodeEditorProps = ComponentProps<"div"> & {
  initialCode: string;
  className?: string;
};

type CodeEditorHeaderProps = ComponentProps<"div"> & {
  className?: string;
};

type CodeEditorDotsProps = ComponentProps<"div"> & {
  className?: string;
};

type CodeEditorBodyProps = ComponentProps<"div"> & {
  className?: string;
};

type CodeEditorLineNumbersProps = ComponentProps<"div"> & {
  className?: string;
};

type CodeEditorInputWrapProps = ComponentProps<"div"> & {
  className?: string;
};

type CodeEditorInputProps = ComponentProps<"textarea"> & {
  className?: string;
};

type CodeEditorRootProps = ComponentProps<"div"> & {
  className?: string;
};

function CodeEditorRoot({
  className,
  children,
  ...props
}: CodeEditorRootProps) {
  return (
    <div className={cn(codeEditorRootVariants(), className)} {...props}>
      {children}
    </div>
  );
}

function CodeEditorHeader({
  className,
  children,
  ...props
}: CodeEditorHeaderProps) {
  return (
    <div className={cn(codeEditorHeaderVariants(), className)} {...props}>
      {children}
    </div>
  );
}

function CodeEditorDots({
  className,
  children,
  ...props
}: CodeEditorDotsProps) {
  return (
    <div className={cn(codeEditorDotsVariants(), className)} {...props}>
      {children}
    </div>
  );
}

function CodeEditorBody({
  className,
  children,
  ...props
}: CodeEditorBodyProps) {
  return (
    <div className={cn(codeEditorBodyVariants(), className)} {...props}>
      {children}
    </div>
  );
}

function CodeEditorLineNumbers({
  className,
  children,
  ...props
}: CodeEditorLineNumbersProps) {
  return (
    <div className={cn(codeEditorLineNumbersVariants(), className)} {...props}>
      {children}
    </div>
  );
}

function CodeEditorInputWrap({
  className,
  children,
  ...props
}: CodeEditorInputWrapProps) {
  return (
    <div className={cn(codeEditorInputWrapVariants(), className)} {...props}>
      {children}
    </div>
  );
}

function CodeEditorInput({ className, ...props }: CodeEditorInputProps) {
  return (
    <textarea className={cn(codeEditorInputVariants(), className)} {...props} />
  );
}

function CodeEditor({ initialCode, className, ...props }: CodeEditorProps) {
  const [code, setCode] = useState(initialCode.replace(/\n+$/u, ""));

  const lines = useMemo(() => {
    const contentLines = code === "" ? [""] : code.split("\n");

    return Array.from(
      { length: Math.max(contentLines.length, MIN_EDITOR_LINES) },
      (_, index) => contentLines[index] ?? "",
    );
  }, [code]);

  return (
    <CodeEditorRoot className={className} {...props}>
      <CodeEditorHeader>
        <CodeEditorDots>
          <span className="block size-3 rounded-full bg-accent-red" />
          <span className="block size-3 rounded-full bg-accent-amber" />
          <span className="block size-3 rounded-full bg-accent-green" />
        </CodeEditorDots>
      </CodeEditorHeader>

      <CodeEditorBody>
        <CodeEditorLineNumbers>
          {lines.map((line, index) => {
            const number = index + 1;

            return <span key={`${number}-${line}`}>{number}</span>;
          })}
        </CodeEditorLineNumbers>

        <CodeEditorInputWrap>
          <CodeEditorInput
            value={code}
            onChange={(event) =>
              setCode(event.target.value.replace(/\n+$/u, ""))
            }
            placeholder="// paste your code here..."
            spellCheck={false}
            aria-label="Code editor"
          />
        </CodeEditorInputWrap>
      </CodeEditorBody>
    </CodeEditorRoot>
  );
}

export type {
  CodeEditorBodyProps,
  CodeEditorDotsProps,
  CodeEditorHeaderProps,
  CodeEditorInputProps,
  CodeEditorInputWrapProps,
  CodeEditorLineNumbersProps,
  CodeEditorProps,
  CodeEditorRootProps,
};
export {
  CodeEditor,
  CodeEditorBody,
  CodeEditorDots,
  CodeEditorHeader,
  CodeEditorInput,
  CodeEditorInputWrap,
  CodeEditorLineNumbers,
  CodeEditorRoot,
};
