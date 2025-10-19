"use client";

import {
  DndContext,
  DragEndEvent,
  PointerSensor,
  UniqueIdentifier,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

type DraggableContext = {
  onDragEnd: (event: DragEndEvent) => void;
  items: (
    | UniqueIdentifier
    | {
        id: UniqueIdentifier;
      }
  )[];
  children: React.ReactNode;
};

export const DraggableContext: React.FC<DraggableContext> = ({
  onDragEnd,
  items,
  children,
}) => {
  const sensors = useSensors(useSensor(PointerSensor));
  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={onDragEnd}
    >
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        {children}
      </SortableContext>
    </DndContext>
  );
};
