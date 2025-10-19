"use client";

import {
  CalendarCheck,
  CalendarClock,
  CalendarDays,
  CalendarPlus,
  CalendarRange,
  CalendarSearch,
  CheckIcon,
  ChevronsDownUp,
  ChevronsUpDownIcon,
  Clock,
  MessageSquareQuote,
  PencilLine,
  Receipt,
  ScrollText,
} from "lucide-react";
import * as React from "react";

import { Button } from "components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "components/ui/popover";
import { Label } from "./ui/label";

export const invoiceTypes = [
  {
    label: "Commercial Invoice",
    value: "commercial",
    icon: <Receipt />,
  },
  { label: "Quote", value: "credit", icon: <MessageSquareQuote /> },
  { label: "Estimate", value: "debit", icon: <ScrollText /> },
];

export const paymentTerms = [
  {
    label: "Due on Receipt",
    value: "due_on_receipt",
    icon: <Clock />,
  },
  {
    label: "Net 7",
    value: "net_7",
    icon: <CalendarDays />,
  },
  {
    label: "Net 15",
    value: "net_15",
    icon: <CalendarClock />,
  },
  {
    label: "Net 30",
    value: "net_30",
    icon: <CalendarRange />,
  },
  {
    label: "Net 60",
    value: "net_60",
    icon: <CalendarCheck />,
  },
  {
    label: "Net 90",
    value: "net_90",
    icon: <CalendarPlus />,
  },
  {
    label: "EOM (End of Month)",
    value: "eom",
    icon: <CalendarSearch />,
  },
  {
    label: "Custom Terms",
    value: "custom",
    icon: <PencilLine />,
  },
];

type ExampleComboboxProps = {
  label?: string;
  data?: typeof invoiceTypes;
  placeholder?: string;
  id?: string;
};

export function ExampleCombobox({
  label,
  data = invoiceTypes,
  id,
  placeholder = "Select Invoice Type",
}: ExampleComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const triggerIcon = open ? (
    <ChevronsDownUp className="ml-2 h-4 w-4 shrink-0 opacity-50" />
  ) : (
    <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
  );

  const selectedType = data.find((type) => type.value === value);

  return (
    <>
      <Label htmlFor={id} className=" block text-sm">
        {label || "Invoice Type"}
      </Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            id={id}
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full h-10 justify-between border-input border-1 shadow-none font-semibold"
          >
            {value ? (
              <div className="flex items-center gap-2">
                {selectedType?.icon}
                {selectedType?.label}
              </div>
            ) : (
              "Select Invoice Type"
            )}

            {triggerIcon}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          aria-label="Select framework"
          className="w-(--radix-popover-trigger-width) p-0"
        >
          <Command>
            <CommandInput placeholder={placeholder} />
            <CommandList>
              <CommandEmpty>No results found</CommandEmpty>
              <CommandGroup>
                {data.map((type) => (
                  <CommandItem
                    key={type.value}
                    value={type.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      // setOpen(false);
                    }}
                  >
                    {type.icon}
                    {type.label}
                    {value === type.value && (
                      <CheckIcon className="size-4 ml-auto" />
                    )}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </>
  );
}
