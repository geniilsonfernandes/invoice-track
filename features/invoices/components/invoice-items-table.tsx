"use client";

import { DragEndEvent } from "@dnd-kit/core";

import { Label } from "@radix-ui/react-label";
import { cva } from "class-variance-authority";
import { DraggableContext } from "components/dnd/draggable-context";
import { SortableItem } from "components/dnd/sortable-item";
import { Button } from "components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "components/ui/input-group";
import { Tooltip, TooltipContent, TooltipTrigger } from "components/ui/tooltip";
import {
  Banknote,
  Calculator,
  Package,
  PackagePlus,
  Receipt,
  Trash,
} from "lucide-react";
import {
  itemInitialValues,
  useInvoiceFormItems,
} from "../hooks/use-invoice-form";
import { InvoiceItem } from "./invoice-Item";
import { SectionHeader } from "./section-header";

const itemMobileVariants = cva("flex flex-col gap-2 ");

export const ItemMobile = () => (
  <div className={itemMobileVariants()}>
    {/* Top section: product + delete */}
    <div className="flex items-center gap-2">
      <InputGroup className="flex-1">
        <InputGroupAddon align="block-start">
          <Package
            className="h-4 w-4 text-muted-foreground"
            aria-hidden="true"
          />
          <Label htmlFor="product" className="text-sm font-medium">
            Product or Service
          </Label>
        </InputGroupAddon>
        <InputGroupInput id="product" placeholder="Enter product or service" />
      </InputGroup>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            size="icon-sm"
            variant="ghost"
            type="button"
            aria-label="Delete item"
            className="text-destructive hover:text-destructive/90"
          >
            <Trash className="h-4 w-4" aria-hidden="true" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Delete item</p>
        </TooltipContent>
      </Tooltip>
    </div>

    {/* Bottom section: qty, rate, total */}
    <div className="flex flex-wrap items-center gap-2">
      <InputGroup className="w-32 flex-1 max-w-[120px]">
        <InputGroupAddon align="block-start">
          <PackagePlus
            className="h-4 w-4 text-muted-foreground"
            aria-hidden="true"
          />
          <Label htmlFor="qty" className="text-sm font-medium">
            Qty
          </Label>
        </InputGroupAddon>
        <InputGroupInput id="qty" placeholder="1" inputMode="numeric" />
      </InputGroup>

      <InputGroup className="w-32 flex-1 max-w-[120px]">
        <InputGroupAddon align="block-start">
          <Banknote
            className="h-4 w-4 text-muted-foreground"
            aria-hidden="true"
          />
          <Label htmlFor="rate" className="text-sm font-medium">
            Rate
          </Label>
        </InputGroupAddon>
        <InputGroupInput id="rate" placeholder="$0.00" inputMode="decimal" />
      </InputGroup>

      <div
        className="flex flex-col justify-center text-right ml-auto gap-1"
        aria-label="Item total"
      >
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Calculator className="h-3.5 w-3.5" aria-hidden="true" />
          Total
        </div>
        <div className="text-sm font-semibold text-foreground tabular-nums">
          $0.00
        </div>
      </div>
    </div>
  </div>
);

{
  /* <div className="py-4 space-y-2 sm:hidden">
  <ItemMobile />
  <ItemMobile />
  <ItemMobile />
</div>; */
}

export function InvoiceItemsTable() {
  const { fields, append, remove, move } = useInvoiceFormItems();

  const handleRemove = (index: number) => {
    if (fields.length === 1) return;
    remove(index);
  };

  const handleAdd = () => {
    append(itemInitialValues, {
      focusIndex: fields.length,
    });
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = fields.findIndex((f) => f.id === active.id);
    const newIndex = fields.findIndex((f) => f.id === over.id);
    move(oldIndex, newIndex);
  };

  return (
    <div className="col-span-12">
      <SectionHeader
        id="invoice-items"
        title="Invoice Items"
        icon={<Receipt />}
        tooltip="Invoice items"
      />
      <div className="py-4 flex-col gap-2 hidden md:flex">
        <DraggableContext
          onDragEnd={handleDragEnd}
          items={fields.map((f) => f.id)}
        >
          {fields.map((field, index) => (
            <SortableItem
              key={field.id}
              id={field.id}
              onDelete={
                fields.length === 1 ? undefined : () => handleRemove(index)
              }
            >
              <InvoiceItem key={field.id} id={index} />
            </SortableItem>
          ))}
        </DraggableContext>
      </div>
      <Button size="xs" variant="default" type="button" onClick={handleAdd}>
        <PackagePlus /> Add an Item
      </Button>
    </div>
  );
}
