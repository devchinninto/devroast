import type { ComponentProps } from "react";
import type { BundledLanguage } from "shiki";
import { codeToHtml } from "shiki";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

const codeBlockRootVariants = tv({
  base: "overflow-hidden border border-border-primary bg-bg-input",
});

const codeBlockHeaderVariants = tv({
  base: "flex h-10 items-center border-b border-border-primary px-4",
});

const codeBlockDotsVariants = tv({
  base: "flex items-center gap-2",
});

const codeBlockBodyVariants = tv({
  base: "flex min-h-90 items-start",
});

const codeBlockLineNumbersVariants = tv({
  base: "flex w-12 flex-col items-end justify-start gap-2 border-r border-border-primary bg-bg-surface px-3 py-4 text-xs text-text-tertiary",
});

const codeBlockContentVariants = tv({
  base: "min-w-0 flex-1 self-start overflow-x-auto p-4 text-left font-mono text-xs leading-5 [&_code]:bg-transparent [&_code]:text-inherit [&_pre]:m-0 [&_pre]:w-full [&_pre]:bg-transparent [&_pre]:p-0 [&_pre]:text-left [&_pre]:whitespace-pre",
});

type CodeBlockRootVariants = VariantProps<typeof codeBlockRootVariants>;

type CodeBlockRootProps = ComponentProps<"div"> &
  CodeBlockRootVariants & {
    className?: string;
  };

type CodeBlockHeaderProps = ComponentProps<"div"> & {
  className?: string;
};

type CodeBlockDotsProps = ComponentProps<"div"> & {
  className?: string;
};

type CodeBlockBodyProps = ComponentProps<"div"> & {
  className?: string;
};

type CodeBlockLineNumbersProps = ComponentProps<"div"> & {
  className?: string;
};

type CodeBlockContentProps = ComponentProps<"div"> & {
  className?: string;
};

type CodeBlockProps = {
  code: string;
  lang: BundledLanguage;
  filename?: string;
  showLineNumbers?: boolean;
  className?: string;
};

function CodeBlockRoot({ className, children, ...props }: CodeBlockRootProps) {
  return (
    <div className={cn(codeBlockRootVariants(), className)} {...props}>
      {children}
    </div>
  );
}

function CodeBlockHeader({
  className,
  children,
  ...props
}: CodeBlockHeaderProps) {
  return (
    <div className={cn(codeBlockHeaderVariants(), className)} {...props}>
      {children}
    </div>
  );
}

function CodeBlockDots({ className, children, ...props }: CodeBlockDotsProps) {
  return (
    <div className={cn(codeBlockDotsVariants(), className)} {...props}>
      {children}
    </div>
  );
}

function CodeBlockBody({ className, children, ...props }: CodeBlockBodyProps) {
  return (
    <div className={cn(codeBlockBodyVariants(), className)} {...props}>
      {children}
    </div>
  );
}

function CodeBlockLineNumbers({
  className,
  children,
  ...props
}: CodeBlockLineNumbersProps) {
  return (
    <div className={cn(codeBlockLineNumbersVariants(), className)} {...props}>
      {children}
    </div>
  );
}

function CodeBlockContent({
  className,
  children,
  ...props
}: CodeBlockContentProps) {
  return (
    <div className={cn(codeBlockContentVariants(), className)} {...props}>
      {children}
    </div>
  );
}

async function CodeBlock({
  code,
  lang,
  filename,
  className,
  showLineNumbers = false,
}: CodeBlockProps) {
  const normalizedCode = code.replace(/\n+$/u, "");
  const html = await codeToHtml(normalizedCode, {
    lang,
    theme: "vesper",
  });

  return (
    <CodeBlockRoot className={className}>
      <CodeBlockHeader>
        <CodeBlockDots>
          <span className="block size-3 rounded-full bg-accent-red" />
          <span className="block size-3 rounded-full bg-accent-amber" />
          <span className="block size-3 rounded-full bg-accent-green" />
        </CodeBlockDots>
        {filename ? (
          <>
            <span className="flex-1" />
            <span className="font-mono text-xs text-text-tertiary">
              {filename}
            </span>
          </>
        ) : null}
      </CodeBlockHeader>

      <CodeBlockBody>
        {showLineNumbers ? (
          <CodeBlockLineNumbers>
            {normalizedCode.split("\n").map((line, index) => {
              const number = index + 1;

              return <span key={`${number}-${line}`}>{number}</span>;
            })}
          </CodeBlockLineNumbers>
        ) : null}

        <CodeBlockContent
          // biome-ignore lint/security/noDangerouslySetInnerHtml: Shiki produces trusted pre-rendered HTML on the server
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </CodeBlockBody>
    </CodeBlockRoot>
  );
}

export type {
  CodeBlockBodyProps,
  CodeBlockContentProps,
  CodeBlockDotsProps,
  CodeBlockHeaderProps,
  CodeBlockLineNumbersProps,
  CodeBlockProps,
  CodeBlockRootProps,
};
export {
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockDots,
  CodeBlockHeader,
  CodeBlockLineNumbers,
  CodeBlockRoot,
};
