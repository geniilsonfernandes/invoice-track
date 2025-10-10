"use client";

import { CalendarPicker } from "components/calendar-picker";
import { Field, FieldContent, FieldLabel } from "components/ui/field";
import { InputGroupButton } from "components/ui/input-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "components/ui/select";
import { Tooltip, TooltipContent, TooltipTrigger } from "components/ui/tooltip";
import { H4 } from "components/ui/typography";
import { cn } from "lib/utils";
import { FileText, InfoIcon } from "lucide-react";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import {
  Invoice as InvoiceFormValues,
  InvoiceKeysEnum,
} from "../schemas/invoiceSchema";

type InvoiceTermsProps = React.HTMLAttributes<HTMLDivElement> & {};

export const InvoiceTerms: React.FC<InvoiceTermsProps> = ({
  className,
  ...props
}) => {
  const { control } = useFormContext<InvoiceFormValues>();

  const invoiceDateWatch = useWatch({
    control,
    name: InvoiceKeysEnum.InvoiceDate,
  });

  return (
    <div
      className={cn("flex flex-col gap-4", className)}
      role="region"
      aria-labelledby="invoice-terms-title"
      {...props}
    >
      <div className="flex items-center">
        <H4 className="flex items-center gap-2" id="invoice-terms-title">
          <FileText
            className="h-5 w-5 text-muted-foreground"
            aria-hidden="true"
          />
          Invoice Terms
        </H4>
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
              This is the invoice terms section. You can add any information
              here.
            </p>
          </TooltipContent>
        </Tooltip>
      </div>

      <div className="col-span-12 grid grid-cols-12 gap-4">
        {/* Payment Terms */}
        <Controller
          control={control}
          name={InvoiceKeysEnum.PaymentTerms}
          render={({ field }) => (
            <Field orientation="vertical" className="col-span-4">
              <FieldContent>
                <FieldLabel htmlFor="payment-terms">Payment Terms</FieldLabel>
              </FieldContent>
              <Select
                aria-label="Payment Terms"
                value={field.value}
                onValueChange={field.onChange}
              >
                <SelectTrigger aria-describedby="payment-terms-desc">
                  <SelectValue placeholder="Select payment terms" />
                </SelectTrigger>
                <SelectContent position="item-aligned">
                  <SelectGroup>
                    <SelectLabel>Payment Terms</SelectLabel>
                    <SelectItem value="none">None</SelectItem>
                    <SelectItem value="net-7">Net 7</SelectItem>
                    <SelectItem value="net-15">Net 15</SelectItem>
                    <SelectItem value="net-30">Net 30</SelectItem>
                    <SelectItem value="net-60">Net 60</SelectItem>
                    <SelectItem value="due-on-receipt">
                      Due on Receipt
                    </SelectItem>
                    <SelectItem value="custom">Custom</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <p id="payment-terms-desc" className="sr-only">
                Select the payment terms for the invoice. Choose None, Net 7,
                Net 15, Net 30, Net 60, Due on Receipt or Custom.
              </p>
            </Field>
          )}
        />

        {/* Invoice Date */}
        <Controller
          control={control}
          name={InvoiceKeysEnum.InvoiceDate}
          render={({ field, fieldState }) => (
            <div className="col-span-4">
              <CalendarPicker
                id="invoice-date-picker"
                placeholder="Select invoice date"
                label="Invoice Date"
                aria-label="Invoice Date"
                date={field.value}
                onChange={field.onChange}
                fieldState={fieldState}
              />
            </div>
          )}
        />

        <Controller
          control={control}
          name={InvoiceKeysEnum.DueDate}
          render={({ field, fieldState }) => (
            <div className="col-span-4">
              <CalendarPicker
                id="due-date-picker"
                placeholder="Select due date"
                label="Invoice Due Date"
                aria-label="Invoice Due Date"
                date={field.value}
                onChange={field.onChange}
                fieldState={fieldState}
                disabled={{ before: invoiceDateWatch }}
              />
            </div>
          )}
        />
      </div>
    </div>
  );
};
