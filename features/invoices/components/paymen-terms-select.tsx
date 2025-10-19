// components/PaymentTermsSelect.tsx
import { Field, FieldContent, FieldLabel } from "components/ui/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "components/ui/select";
import { PAYMENT_TERMS_OPTIONS } from "../constants";

type PaymentTermsSelectProps = {
  value: string;
  onChange: (value: string) => void;
} & React.HTMLAttributes<HTMLDivElement>;



export function PaymentTermsSelect({
  value,
  onChange,
  ...props
}: PaymentTermsSelectProps) {
  return (
    <Field orientation="vertical" {...props}>
      <FieldContent>
        <FieldLabel htmlFor="payment-terms">Payment Terms</FieldLabel>
      </FieldContent>

      <Select aria-label="Payment Terms" value={value} onValueChange={onChange}>
        <SelectTrigger aria-describedby="payment-terms-desc">
          <SelectValue placeholder="Select payment terms" />
        </SelectTrigger>
        <SelectContent position="item-aligned">
          <SelectGroup>
            <SelectLabel>Payment Terms</SelectLabel>
            {PAYMENT_TERMS_OPTIONS.map((term) => (
              <SelectItem key={term.value} value={term.value}>
                {term.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <p id="payment-terms-desc" className="sr-only">
        Select the payment terms for the invoice. Choose None, Net 7, Net 15,
        Net 30, Net 60, Due on Receipt or Custom.
      </p>
    </Field>
  );
}
