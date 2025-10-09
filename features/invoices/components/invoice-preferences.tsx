"use client";

import { Card, CardContent, CardHeader, CardTitle } from "components/ui/card";
import { Field, FieldContent, FieldLabel } from "components/ui/field";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "components/ui/select";
import { SlidersHorizontal } from "lucide-react";


export const InvoicePreferences = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <SlidersHorizontal className="h-5 w-5 text-muted-foreground" />{" "}
          Preferences
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Field orientation="vertical">
          <FieldContent>
            <FieldLabel htmlFor="currency"> Currency</FieldLabel>
            <Select>
              <SelectTrigger id="currency" className="w-full">
                <SelectValue placeholder="Select currency" />
              </SelectTrigger>

              <SelectContent position="item-aligned">
                <SelectItem value="USD">
                  🇺🇸 USD – United States Dollar
                </SelectItem>
                <SelectItem value="EUR">🇪🇺 EUR – Euro</SelectItem>
                <SelectItem value="GBP">🇬🇧 GBP – British Pound</SelectItem>
                <SelectItem value="BRL">🇧🇷 BRL – Brazilian Real</SelectItem>
                <SelectItem value="JPY">🇯🇵 JPY – Japanese Yen</SelectItem>
              </SelectContent>
            </Select>
          </FieldContent>
        </Field>
      </CardContent>
    </Card>
  );
};
