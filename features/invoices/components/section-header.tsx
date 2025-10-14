"use client";

import { InputGroupButton } from "components/ui/input-group";
import { Tooltip, TooltipContent, TooltipTrigger } from "components/ui/tooltip";
import { H5 } from "components/ui/typography";
import { InfoIcon } from "lucide-react";

type SectionHeaderProps = {
  /** Ícone ao lado do título */
  icon: React.ReactNode;
  /** Título principal */
  title: string;
  /** Texto exibido no tooltip */
  tooltip?: string;
  /** ID opcional para acessibilidade */
  id?: string;
};

export function SectionHeader({
  icon,
  title,
  tooltip,
  id,
}: SectionHeaderProps) {
  return (
    <div className="flex items-center">
      <H5
        className="flex items-center gap-2 [&>svg]:size-4 [&_svg]:text-muted-foreground"
        id={id}
      >
        {icon}
        {title}
      </H5>

      {tooltip && (
        <Tooltip>
          <TooltipTrigger asChild>
            <InputGroupButton
              variant="ghost"
              aria-label={`${title} info`}
              className="ml-auto rounded-full"
              size="icon-xs"
            >
              <InfoIcon />
            </InputGroupButton>
          </TooltipTrigger>

          <TooltipContent role="tooltip" aria-live="polite">
            <p>{tooltip}</p>
          </TooltipContent>
        </Tooltip>
      )}
    </div>
  );
}
