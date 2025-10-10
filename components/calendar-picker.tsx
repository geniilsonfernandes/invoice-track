"use client";

import * as React from "react";

import { Calendar } from "components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "components/ui/popover";
import { useIsDesktop } from "hooks/useIsDesktop";
import { CalendarCheck } from "lucide-react";
import { Matcher } from "react-day-picker";
import { ControllerFieldState } from "react-hook-form";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Field, FieldError, FieldLabel } from "./ui/field";
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
  placeholder?: string;
  onChange?: (value: Date | undefined) => void;
  date?: Date;
  label?: string;
  fieldState?: ControllerFieldState;
  disabled?: Matcher | Matcher[] | undefined;
};

export function CalendarPicker({
  placeholder = "Select a date",
  id,
  label = "Select a date",
  onChange,
  date,
  fieldState,
  disabled,
}: CalendarPickerProps) {
  const isDesktop = useIsDesktop();

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(date);
  const [dateSelected, setDateSelected] = React.useState<Date | undefined>(
    value
  );

  const renderInput = () => {
    return (
      <InputGroup>
        <InputGroupInput
          id={id}
          type="text"
          value={value?.toDateString() || ""}
          placeholder={placeholder}
          readOnly
          className="w-full text-left "
          onChange={(e) => {
            setValue(new Date(e.target.value));
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault();
              setOpen(true);
            }

            if (e.key === "Enter") {
              e.preventDefault();
              setOpen(true);
            }
          }}
        />
        <InputGroupAddon align="inline-end">
          <CalendarCheck />
        </InputGroupAddon>
      </InputGroup>
    );
  };

  const renderCalendar = () => {
    return (
      <Calendar
        mode="single"
        className="mx-auto"
        selected={dateSelected}
        disabled={disabled}
        onSelect={(value) => {
          setValue(value);
          setOpen(false);
          setDateSelected(value);
          onChange?.(value);
        }}
      />
    );
  };

  if (isDesktop) {
    return (
      <Field>
        <FieldLabel htmlFor={id}> {label}</FieldLabel>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger className="w-full" asChild>
            {renderInput()}
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden" align="end">
            {renderCalendar()}
          </PopoverContent>
        </Popover>
        <FieldError>{fieldState?.error?.message}</FieldError>
      </Field>
    );
  }

  return (
    <Field>
      <FieldLabel htmlFor={id}> {label}</FieldLabel>
      <Drawer open={open} onOpenChange={setOpen} fixed>
        <DrawerTrigger asChild>{renderInput()}</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="text-left">
            <DrawerTitle>Select a date</DrawerTitle>
          </DrawerHeader>
          {renderCalendar()}
          <DrawerFooter className="pt-2 flex">
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
            <Button>Save changes</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <FieldError>{fieldState?.error?.message}</FieldError>
    </Field>
  );
}
