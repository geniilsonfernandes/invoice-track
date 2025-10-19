"use client";

import { Button } from "components/ui/button";
import { Calendar } from "components/ui/calendar";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "components/ui/drawer";
import { Field, FieldError, FieldLabel } from "components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "components/ui/input-group";
import { Popover, PopoverContent, PopoverTrigger } from "components/ui/popover";
import { useIsDesktop } from "hooks/useIsDesktop";
import { CalendarCheck } from "lucide-react";
import * as React from "react";
import { Matcher } from "react-day-picker";
import { ControllerFieldState } from "react-hook-form";

type CalendarPickerProps = {
  id?: string;
  placeholder?: string;
  label?: string;
  date?: Date;
  onChange?: (value: Date | undefined) => void;
  fieldState?: ControllerFieldState;
  disabled?: Matcher | Matcher[];
} & React.HTMLAttributes<HTMLDivElement>;

export function CalendarPicker({
  id,
  label = "Select a date",
  placeholder = "Select a date",
  date,
  onChange,
  fieldState,
  disabled,
  ...props
}: CalendarPickerProps) {
  const isDesktop = useIsDesktop();
  const [open, setOpen] = React.useState(false);
  const [month, setMonth] = React.useState(date);

  const handleSelect = (value: Date | undefined) => {
    setMonth(value);
    onChange?.(value);
    setOpen(false);
  };

  const renderInput = (
    <InputGroup>
      <InputGroupInput
        id={id}
        type="text"
        value={date ? date.toLocaleDateString() : ""}
        placeholder={placeholder}
        readOnly
        className="w-full text-left cursor-pointer"
        onKeyDown={(e) => {
          if (["ArrowDown", "Enter"].includes(e.key)) {
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

  const renderCalendar = (
    <Calendar
      mode="single"
      className="mx-auto"
      month={month}
      onMonthChange={setMonth}
      selected={date}
      disabled={disabled}
      onSelect={handleSelect}
    />
  );

  return (
    <Field {...props}>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>

      {isDesktop ? (
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>{renderInput}</PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden" align="end">
            {renderCalendar}
          </PopoverContent>
        </Popover>
      ) : (
        <Drawer open={open} onOpenChange={setOpen} fixed>
          <DrawerTrigger asChild>{renderInput}</DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="text-left">
              <DrawerTitle>{label}</DrawerTitle>
            </DrawerHeader>
            {renderCalendar}
            <DrawerFooter className="pt-2 flex">
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      )}

      <FieldError>{fieldState?.error?.message}</FieldError>
    </Field>
  );
}
