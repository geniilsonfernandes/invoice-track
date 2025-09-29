import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "lib/utils";
import * as React from "react";
import { Label } from "./label";

// Base de estilos do input
const inputVariants = cva(
  "font-semibold placeholder:text-muted-foreground/50 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-12 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base transition-all outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm leading-4 placeholder:indent-0 placeholder:transition-all placeholder:duration-300",
  {
    variants: {
      state: {
        default: "",
        invalid:
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive aria-invalid:text-destructive",
      },
      focus: {
        default:
          "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:placeholder:indent-1",
      },
      withLeftSection: {
        true: "pl-11",
      },
      withRightSection: {
        true: "pr-11",
      },
    },
    defaultVariants: {
      state: "default",
      focus: "default",
    },
  }
);

interface InputProps
  extends React.ComponentProps<"input">,
    VariantProps<typeof inputVariants> {
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
}

const InputBase = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, state, focus, type, leftSection, rightSection, ...props },
    ref
  ) => {
    return (
      <div className="relative flex items-center">
        {leftSection && (
          <span className="absolute left-2 flex items-center text-muted-foreground">
            {leftSection}
          </span>
        )}
        <input
          type={type}
          ref={ref}
          data-slot="input"
          className={cn(
            inputVariants({
              state,
              focus,
              withLeftSection: !!leftSection,
              withRightSection: !!rightSection,
            }),
            className
          )}
          {...props}
        />
        {rightSection && (
          <span className="absolute right-2 flex items-center text-muted-foreground">
            {rightSection}
          </span>
        )}
      </div>
    );
  }
);

InputBase.displayName = "Input";

type InputWrapperProps = React.HTMLAttributes<HTMLDivElement> & {
  label: string;
  id: string;
  className?: string;
  children?: React.ReactNode;
  description?: string;
  error?: string;
};

/**
 * Wrapper para o Input.
 *
 * Exibe um label, descrição e mensagem de erro
 * em torno de um `<Input />`.
 *
 * @example
 * ```tsx
 * <Input.Wrapper label="Email" description="Digite seu email" error="Campo obrigatório">
 *   <Input placeholder="exemplo@email.com" />
 * </Input.Wrapper>
 * ```
 */
export const Wrapper: React.FC<InputWrapperProps> = ({
  id,
  label,
  className,
  children,
  description,
  error,
  ...props
}) => {
  return (
    <div
      aria-label="form wrapper"
      className={cn("relative group space-y-2", className)}
      aria-errormessage={error ? `${id}-error` : undefined}
      {...(error ? { "aria-invalid": true } : {})}
      {...props}
    >
      <Label
        htmlFor={id}
        className="block text-sm transition-colors group-focus-within:text-primary"
      >
        {label}
      </Label>
      {description && (
        <div className="text-xs text-muted-foreground">{description}</div>
      )}
      {children}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};

/**
 * Wrapper para o Input.
 *
 * Exibe um label, descrição e mensagem de erro
 * em torno de um `<Input />`.
 *
 * @example
 * ```tsx
 * <Input.Wrapper label="Email" description="Digite seu email" error="Campo obrigatório">
 *   <Input placeholder="exemplo@email.com" />
 * </Input.Wrapper>
 * ```
 */
const Input = Object.assign(InputBase, { Wrapper: Wrapper });

export { Input };
