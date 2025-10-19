"use client";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "components/ui/input-group";
import { Label } from "components/ui/label";
import { Tooltip, TooltipContent, TooltipTrigger } from "components/ui/tooltip";
import { HomeIcon, InfoIcon } from "lucide-react";

import { Field, FieldError } from "components/ui/field";
import { Controller, useFormContext } from "react-hook-form";
import {
  Invoice as InvoiceFormValues,
  InvoiceKeysEnum,
} from "../schemas/invoiceSchema";

type SenderProps = React.ComponentPropsWithoutRef<"div">;

export const Sender: React.FC<SenderProps> = (props) => {
  const { control } = useFormContext<InvoiceFormValues>();

  return (
    <Controller
      control={control}
      name={InvoiceKeysEnum.Sender}
      render={({ field, fieldState }) => (
        <Field orientation="vertical" {...props}>
          <InputGroup {...props}>
            <InputGroupTextarea
              id="sender"
              placeholder="Company Name, Address, Phone, Email"
              {...field}
              aria-invalid={!!fieldState.error}
              aria-describedby={fieldState.error ? "sender-error" : undefined}
            />

            <InputGroupAddon align="block-start">
              <Label htmlFor="sender" className="text-foreground">
                <HomeIcon className="size-4" />
                Sender
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

                <TooltipContent role="tooltip" aria-live="polite">
                  <p>
                    Enter your company or personal information. This will appear
                    as the sender on the invoice, including address, phone, and
                    email.
                  </p>
                </TooltipContent>
              </Tooltip>
            </InputGroupAddon>
          </InputGroup>

          <FieldError id="sender-error">{fieldState.error?.message}</FieldError>
        </Field>
      )}
    />
  );
};
