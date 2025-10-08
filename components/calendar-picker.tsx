"use client";

import { parseDate } from "chrono-node";
import * as React from "react";

import { Calendar } from "components/ui/calendar";
import { Label } from "components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "components/ui/popover";
import { CalendarCheck } from "lucide-react";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";

function formatDate(date: Date | undefined) {
  if (!date) {
    return "";
  }

  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

type CalendarPickerProps = {
  id?: string;
  name?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  date?: Date;
  label?: string;
};

export function CalendarPicker({
  placeholder = "Select a date",
  id,
  name,
  label,
  onChange,
  date,
}: CalendarPickerProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("In 2 days");
  const [dateSelected, setDateSelected] = React.useState<Date | undefined>(
    parseDate(value) || undefined
  );
  const [month, setMonth] = React.useState<Date | undefined>(date);

 
  return (
    <div className="w-full flex flex-1 flex-col gap-3 leading-snug">
      <Label htmlFor={id} className="block text-sm">
        {label || "Due Date"}
      </Label>
      <div className="w-full">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger className="w-full" asChild>
            <InputGroup>
              <InputGroupInput
                id={id}
                type="text"
                value={value}
                placeholder={placeholder}
                readOnly
                className="w-full text-left "
                onChange={(e) => {
                  setValue(e.target.value);
                  const date = parseDate(e.target.value);
                  if (date) {
                    setDateSelected(date);
                    setMonth(date);
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    setOpen(true);
                  }
                }}
              />
              <InputGroupAddon align="inline-end">
                <CalendarCheck />
              </InputGroupAddon>
            </InputGroup>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0" align="end">
            <Calendar
              mode="single"
              selected={dateSelected}
              captionLayout="dropdown"
              month={month}
              onMonthChange={setMonth}
              onSelect={(date) => {
                setDateSelected(date);
                setValue(formatDate(date));
                setOpen(false);
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
