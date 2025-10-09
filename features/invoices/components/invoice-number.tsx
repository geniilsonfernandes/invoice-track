import { ButtonGroup, ButtonGroupText } from "components/ui/button-group";
import {
    Field,
    FieldContent,
    FieldError,
    FieldLabel
} from "components/ui/field";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
} from "components/ui/input-group";
import { Label } from "components/ui/label";
import { RefreshCcw } from "lucide-react";
import { Controller, useFormContext } from "react-hook-form";
import { Invoice as InvoiceFormValues } from "../schemas/invoiceSchema";




export const InvoiceNumber = ({ className }: { className?: string }) => {
  const { control, setValue, getFieldState } =
    useFormContext<InvoiceFormValues>();

  


  function generateInvoiceNumber() {
    const randomNum = Math.floor(100000 + Math.random() * 9000);
    setValue("invoiceNumber", `${randomNum}`, { shouldValidate: true });
  }
  return (
    <Controller
      control={control}
      name="invoiceNumber"
      render={({ field, fieldState }) => (
        <div className={className}>
          <Field orientation="vertical" className="col-span-4">
            <FieldContent>
              <FieldLabel htmlFor="invoice-number">Invoice Number</FieldLabel>
            </FieldContent>

            <ButtonGroup>
              <ButtonGroupText asChild>
                <Label>INV</Label>
              </ButtonGroupText>
              <InputGroup>
                <InputGroupInput
                  id="invoice-number"
                  placeholder="Invoice #"
                  {...field}
                  aria-invalid={!!fieldState.error}
                />

                <InputGroupAddon align="inline-end">
                  <InputGroupButton
                    aria-label="Copy"
                    title="Copy"
                    size="icon-xs"
                    onClick={generateInvoiceNumber}
                  >
                    <RefreshCcw className="size-4" />
                  </InputGroupButton>
                </InputGroupAddon>
              </InputGroup>
            </ButtonGroup>
            <p id="payment-terms-desc" className="sr-only">
              Select the payment terms for the invoice. Choose None, Net 7, Net
              15, Net 30, Net 60, Due on Receipt or Custom.
            </p>
            <FieldError id="invoice-number-error" aria-describedby="invoice-number-error">
              {fieldState.error?.message}
            </FieldError>
          </Field>
        </div>
      )}
    />
  );
};
