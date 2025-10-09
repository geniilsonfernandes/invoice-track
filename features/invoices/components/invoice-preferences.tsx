"use client";

import { Card, CardContent, CardHeader, CardTitle } from "components/ui/card";
import {
  Field,
  FieldContent,
  FieldError,
  FieldLabel,
} from "components/ui/field";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "components/ui/select";
import { SlidersHorizontal } from "lucide-react";
import { Controller, useFormContext } from "react-hook-form";
import {
  Invoice as InvoiceFormValues,
  InvoiceKeysEnum,
} from "../schemas/invoiceSchema";

const CURRENCIES = [
  { code: "USD", label: "United States Dollar", flag: "🇺🇸" },
  { code: "EUR", label: "Euro", flag: "🇪🇺" },
  { code: "GBP", label: "British Pound", flag: "🇬🇧" },
  { code: "BRL", label: "Brazilian Real", flag: "🇧🇷" },
  { code: "JPY", label: "Japanese Yen", flag: "🇯🇵" },
];


export const InvoicePreferences = () => {
  const { control } = useFormContext<InvoiceFormValues>();
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <SlidersHorizontal className="h-5 w-5 text-muted-foreground" />{" "}
          Preferences
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Controller
          control={control}
          name={InvoiceKeysEnum.Currency}
          render={({ field, fieldState }) => (
            <Field orientation="vertical">
              <FieldContent>
                <FieldLabel htmlFor="currency">Currency</FieldLabel>
                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger id="currency" className="w-full">
                    <SelectValue placeholder="Select currency" />
                  </SelectTrigger>

                  <SelectContent position="item-aligned">
                    {CURRENCIES.map((currency) => (
                      <SelectItem key={currency.code} value={currency.code}>
                        {currency.flag} {currency.label} ({currency.code})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FieldContent>

              <FieldError id="invoice-number-error">
                {fieldState.error?.message}
              </FieldError>
            </Field>
          )}
        />
      </CardContent>
    </Card>
  );
};
