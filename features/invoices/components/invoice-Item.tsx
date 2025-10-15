"use client";

import { cva } from "class-variance-authority";
import { InputGroup, InputGroupInput } from "components/ui/input-group";
import { cn } from "lib/utils";
import { Controller, useWatch } from "react-hook-form";
import { useInvoiceFormContext } from "../hooks/use-invoice-form";

interface InvoiceItemProps {
  id: number;
}

const inputVariants = cva();

export const InvoiceItem: React.FC<InvoiceItemProps> = ({ id }) => {
  const { control } = useInvoiceFormContext();

  // 👇 Observa os campos dinamicamente
  const price = useWatch({ control, name: `items.${id}.price` });
  const quantity = useWatch({ control, name: `items.${id}.quantity` });

  // 👇 Converte e calcula o total
  const total = Number(price || 0) * Number(quantity || 0);

  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  return (
    <div
      className={cn(
        "grid grid-cols-[1fr_100px_100px_130px] gap-1 items-center"
      )}
    >
      {/* Product name */}
      <Controller
        control={control}
        name={`items.${id}.name`}
        render={({ field, fieldState }) => (
          <InputGroup className="h-10">
            <InputGroupInput
              id={`product-${id}`}
              placeholder="Product or Service"
              type="text"
              {...field}
              aria-invalid={!!fieldState.error}
            />
          </InputGroup>
        )}
      />

      {/* Price */}
      <Controller
        control={control}
        name={`items.${id}.price`}
        render={({ field, fieldState }) => (
          <InputGroup className="h-10">
            <InputGroupInput
              id={`price-${id}`}
              placeholder="Price"
              maxLength={8}
              className="text-right"
              aria-invalid={!!fieldState.error}
              onChange={(e) => {
                const input = e.target;
                const length = input.value.length;
                input.setSelectionRange(length, length);
                const number = parseInt(
                  e.target.value.replace(/[^0-9]/g, ""),
                  10
                );

                if (isNaN(number)) {
                  field.onChange(0);
                  return;
                }

                field.onChange(number || 0);
              }}
              value={
                field.value
                  ? currencyFormatter.format(field.value / 100)
                  : currencyFormatter.format(0 / 100)
              }
              onFocus={(e) => {
                const input = e.target;
                const length = input.value.length;
                input.setSelectionRange(length, length);
              }}
            />
          </InputGroup>
        )}
      />

      {/* Quantity */}
      <Controller
        control={control}
        name={`items.${id}.quantity`}
        render={({ field, fieldState }) => (
          <InputGroup className="h-10">
            <InputGroupInput
              id={`qty-${id}`}
              placeholder="Qty"
              type="number"
              {...field}
              onChange={(e) => {
                field.onChange(Number(e.target.value));
              }}
              aria-invalid={!!fieldState.error}
            />
          </InputGroup>
        )}
      />

      {/* Total */}
      <div className="max-w-11/12 overflow-hidden text-right font-semibold  text-sm text-foreground tabular-nums cursor-auto text-ellipsis">
        ${total.toFixed(2)}
      </div>
    </div>
  );
};
