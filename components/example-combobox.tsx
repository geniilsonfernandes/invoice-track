"use client";

import { BanknoteArrowUp, CheckIcon, ChevronsDownUp, ChevronsUpDownIcon } from "lucide-react";
import * as React from "react";

import { Button } from "components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "components/ui/popover";
import { Label } from "./ui/label";

const invoiceTypes = [
  { label: "Standard Invoice", value: "standard", icon: <BanknoteArrowUp /> },
  { label: "Proforma Invoice", value: "proforma", icon: <BanknoteArrowUp /> },
  {
    label: "Commercial Invoice",
    value: "commercial",
    icon: <BanknoteArrowUp />,
  },
  { label: "Credit Invoice", value: "credit", icon: <BanknoteArrowUp /> },
  { label: "Debit Invoice", value: "debit", icon: <BanknoteArrowUp /> },
];

export function ExampleCombobox() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const triggerIcon = open ? (
    <ChevronsDownUp className="ml-2 h-4 w-4 shrink-0 opacity-50" />
  ) : (
    <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
  );

  const selectedType = invoiceTypes.find((type) => type.value === value);

  return (
    <div className="mt-8">
      <Label htmlFor="framework" className="mb-2 block text-sm">
        Invoice Type
      </Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            id="framework"
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full h-12 justify-between border-input border-1 shadow-none font-semibold"
          >
            {value
              ? <div className="flex items-center gap-2">
              {selectedType?.icon}
              {selectedType?.label}
              </div>
              : "Select Invoice Type"}

            {triggerIcon}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          aria-label="Select framework"
          className="w-(--radix-popover-trigger-width) p-0"
        >
          <Command>
            <CommandInput placeholder="Search invoice type" />
            <CommandList>
              <CommandEmpty>no results found</CommandEmpty>
              <CommandGroup>
                {invoiceTypes.map((type) => (
                  <CommandItem
                    key={type.value}
                    value={type.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
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
    </div>
  );
}
