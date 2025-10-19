// src/components/ui/typography.tsx
import { cn } from "lib/utils";
import * as React from "react";

type TypographyProps = React.HTMLAttributes<HTMLHeadingElement>;
type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement>;

export const H1: React.FC<TypographyProps> = ({ className, ...props }) => (
  <h1
    className={cn("text-3xl font-bold tracking-tight", className)}
    {...props}
  />
);

export const H2: React.FC<TypographyProps> = ({ className, ...props }) => (
  <h2
    className={cn("text-2xl font-semibold tracking-tight", className)}
    {...props}
  />
);

export const H3: React.FC<TypographyProps> = ({ className, ...props }) => (
  <h3 className={cn("text-xl font-semibold", className)} {...props} />
);

export const H4: React.FC<TypographyProps> = ({ className, ...props }) => (
  <h4 className={cn("text-base font-medium", className)} {...props} />
);

export const H5: React.FC<TypographyProps> = ({ className, ...props }) => (
  <h5 className={cn("text-sm font-medium", className)} {...props} />
);

export const P: React.FC<ParagraphProps> = ({ className, ...props }) => (
  <p className={cn("text-sm text-muted-foreground", className)} {...props} />
);


/// typography.page
/// typography.body
/// typography.bodySmall
/// typography.bodyLarge