import { cva, VariantProps } from "class-variance-authority";
import { cn } from "lib/utils";
import * as React from "react";
import { Wrapper } from "./input";

// Base de estilos do textarea
const textareaVariants = cva(
  "font-semibold placeholder:text-muted-foreground/50 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input w-full min-w-0 rounded-md border bg-transparent px-3 py-2.5 text-base transition-all outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm leading-5 placeholder:indent-0 placeholder:transition-all placeholder:duration-300 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:placeholder:indent-1",
  {
    variants: {
      state: {
        default: "",
        invalid:
          "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
      },
      resize: {
        none: "resize-none",
        both: "resize",
        horizontal: "resize-x",
        vertical: "resize-y",
      },
    },
    defaultVariants: {
      state: "default",
      resize: "none",
    },
  }
);

interface TextareaProps
  extends React.ComponentProps<"textarea">,
    VariantProps<typeof textareaVariants> {}

function TextareaBase({ className, state, resize, ...props }: TextareaProps) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(textareaVariants({ state, resize }), className)}
      {...props}
    />
  );
}

const Textarea = Object.assign(TextareaBase, { Wrapper: Wrapper });

export { Textarea };
