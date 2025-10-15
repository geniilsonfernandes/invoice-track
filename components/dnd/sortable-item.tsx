"use client";

import { Button } from "components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "components/ui/tooltip";

import { GripVertical, Trash } from "lucide-react";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface SortableItemProps {
  id: string;
  onDelete?: () => void;
  children: React.ReactNode;
}

export function SortableItem({ id, onDelete, children }: SortableItemProps) {
  const { listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,

  };

  return (
    <div
      key={id}
      ref={setNodeRef}
      style={style}
      className="flex items-center gap-2"
    >
      {/* Drag handle */}
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            type="button"
            className="cursor-grab active:cursor-grabbing w-4 p-0"
            aria-label="Drag to reorder"
            {...listeners}
          >
            <GripVertical className=" text-muted-foreground" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Drag to reorder</p>
        </TooltipContent>
      </Tooltip>

      <div className="flex-1">{children}</div>
      {/* Delete button */}
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            size="icon-sm"
            variant="ghost"
            type="button"
            aria-label="Remove item"
            className="text-destructive hover:text-destructive/90"
            onClick={onDelete}
            disabled={!onDelete}
          >
            <Trash className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Remove item</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
