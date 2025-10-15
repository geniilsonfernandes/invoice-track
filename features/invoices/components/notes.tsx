"use client";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "components/ui/input-group";
import { Label } from "components/ui/label";
import { Tooltip, TooltipContent, TooltipTrigger } from "components/ui/tooltip";
import { InfoIcon, NotepadText } from "lucide-react";

import { Field, FieldContent, FieldError } from "components/ui/field";
import { Controller, useFormContext } from "react-hook-form";
import {
  Invoice as InvoiceFormValues,
  InvoiceKeysEnum,
} from "../schemas/invoiceSchema";

type NotesProps = React.ComponentPropsWithoutRef<"div">;

export const Notes: React.FC<NotesProps> = (props) => {
  const { control } = useFormContext<InvoiceFormValues>();

  return (
    <>
      <Controller
        control={control}
        name={InvoiceKeysEnum.Notes}
        render={({ field, fieldState }) => (
          <Field orientation="vertical" {...props}>
            <FieldContent>
              <InputGroup {...props}>
                <InputGroupTextarea
                  id="notes"
                  placeholder="Add any additional notes here"
                  {...field}
                  aria-invalid={!!fieldState.error}
                  aria-describedby={
                    fieldState.error ? "notes-error" : undefined
                  }
                />
                <InputGroupAddon align="block-start">
                  <Label htmlFor="notes" className="text-foreground">
                    <NotepadText className="size-4" />
                    Notes
                  </Label>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <InputGroupButton
                        variant="ghost"
                        aria-label="Help"
                        className="ml-auto rounded-full"
                        size="icon-xs"
                      >
                        <InfoIcon />
                      </InputGroupButton>
                    </TooltipTrigger>

                    <TooltipContent>
                      <p>
                        Add any additional notes here. This will be visible on the
                        invoice.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </InputGroupAddon>
              </InputGroup>
              <FieldError id="notes-error">
                {fieldState.error?.message}
              </FieldError>
            </FieldContent>
          </Field>
        )}
      />
    </>
  );
};
