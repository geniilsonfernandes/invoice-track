import { Slot } from "@radix-ui/react-slot";
import { cn } from "lib/utils";
import * as React from "react";

type ActionIconProps = React.ComponentProps<"button"> & {
  children: React.ReactNode;
  asChild?: boolean;
} 

const ActionIcon: React.FC<ActionIconProps> = ({
  children,
  asChild = false,
  className,
  ...props
}) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="button"
      className={cn("size-8 flex items-center justify-center p-1 border rounded-md hover:bg-secondary/50 transition-colors disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        "cursor-pointer",
        "active:translate-y-0.5",
        className

      )}
      {...props}
    >
      {children}
    </Comp>
  );
};

export default ActionIcon;
