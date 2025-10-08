"use client";

import { CalendarPicker } from "components/calendar-picker";
import { Field, FieldContent, FieldLabel } from "components/ui/field";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "components/ui/select";
import { H4 } from "components/ui/typography";
import { cn } from "lib/utils";
import {
    FileText
} from "lucide-react";

type InvoiceTermsProps = React.HTMLAttributes<HTMLDivElement> & {};

export const InvoiceTerms: React.FC<InvoiceTermsProps> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn("flex flex-col gap-4", className)}
      role="region"
      aria-labelledby="invoice-terms-title"
      {...props}
    >
      <H4 className="flex items-center gap-2" id="invoice-terms-title">
        <FileText
          className="h-5 w-5 text-muted-foreground"
          aria-hidden="true"
        />
        Invoice Terms
      </H4>

      <div className="col-span-12 grid grid-cols-12 gap-4">
        {/* Payment Terms */}
        <Field orientation="vertical" className="col-span-4">
          <FieldContent>
            <FieldLabel htmlFor="payment-terms">Payment Terms</FieldLabel>
          </FieldContent>
          <Select  aria-label="Payment Terms">
            <SelectTrigger aria-describedby="payment-terms-desc">
              <SelectValue placeholder="Select payment terms" />
            </SelectTrigger>
            <SelectContent position="item-aligned">
              <SelectItem value="none">None</SelectItem>
              <SelectItem value="net-7">Net 7</SelectItem>
              <SelectItem value="net-15">Net 15</SelectItem>
              <SelectItem value="net-30">Net 30</SelectItem>
              <SelectItem value="net-60">Net 60</SelectItem>
              <SelectItem value="due-on-receipt">Due on Receipt</SelectItem>
              <SelectItem value="custom">Custom</SelectItem>
            </SelectContent>
          </Select>
          <p id="payment-terms-desc" className="sr-only">
            Select the payment terms for the invoice. Choose None, Net 7, Net
            15, Net 30, Net 60, Due on Receipt or Custom.
          </p>
        </Field>

        {/* Invoice Date */}
        <div className="col-span-4">
          <CalendarPicker
            id="invoice-date-picker"
            name="invoice-date-picker"
            placeholder="Select invoice date"
            label="Invoice Date"
            aria-label="Invoice Date"
          />
        </div>

        {/* Due Date */}
        <div className="col-span-4">
          <CalendarPicker
            id="due-date-picker"
            name="due-date-picker"
            placeholder="Select due date"
            label="Invoice Due Date"
            aria-label="Invoice Due Date"
          />
        </div>
      </div>
    </div>
  );
};
