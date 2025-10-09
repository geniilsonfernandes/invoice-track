"use client";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "components/ui/input-group";
import { Label } from "components/ui/label";
import { Tooltip, TooltipContent, TooltipTrigger } from "components/ui/tooltip";
import { InfoIcon, User } from "lucide-react";

import { Field, FieldContent, FieldError } from "components/ui/field";
import { Controller, useFormContext } from "react-hook-form";
import {
  Invoice as InvoiceFormValues,
  InvoiceKeysEnum,
} from "../schemas/invoiceSchema";

type RecipientProps = React.ComponentPropsWithoutRef<"div">;

export const Recipient: React.FC<RecipientProps> = (props) => {
  const { control } = useFormContext<InvoiceFormValues>();

  return (
    <>
      <Controller
        control={control}
        name={InvoiceKeysEnum.Recipient}
        render={({ field, fieldState }) => (
          <Field orientation="vertical" {...props}>
            <FieldContent>
              <InputGroup {...props}>
                <InputGroupTextarea
                  id="billed-to"
                  placeholder="Company Name, Address, Phone, Email"
                  {...field}
                  aria-invalid={!!fieldState.error}
                  aria-describedby={
                    fieldState.error ? "billed-to-error" : undefined
                  }
                />
                <InputGroupAddon align="block-start">
                  <Label htmlFor="billed-to" className="text-foreground">
                    <User className="size-4" />
                    Billed To
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
                        Enter the company or person you are billing. Include the
                        full address, phone, and email so the invoice has
                        complete contact details.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </InputGroupAddon>
              </InputGroup>
              <FieldError id="billed-to-error">
                {fieldState.error?.message}
              </FieldError>
            </FieldContent>
          </Field>
        )}
      />
    </>
  );
};
