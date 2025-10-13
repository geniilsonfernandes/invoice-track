import { z } from "zod";
import { PAYMENT_TERMS } from "../constants";

// 🧩 Validation schema

export const InvoiceSchema = z
  .object({
    sender: z.string().min(1, "Sender is required"),
    recipient: z.string().min(1, "Recipient is required"),
    invoiceNumber: z.string().min(1, "Invoice number is required"),
    currency: z.string().min(1, "Currency is required"),
    paymentTerms: z.enum(PAYMENT_TERMS),
    invoiceDate: z.date(),
    dueDate: z.date(),
  })
  .superRefine((data, ctx) => {
    if (data.dueDate < data.invoiceDate) {
      ctx.addIssue({
        path: ["dueDate"], // indica que o erro é do dueDate
        message: "Due date must be after invoice date",
        code: "custom",
      });
    }
  });


// 💡 Type automatically inferred from the schema
export type Invoice = z.infer<typeof InvoiceSchema>;

// 🧩 Utility keys of the Invoice schema
export enum InvoiceKeysEnum {
  Sender = "sender",
  Recipient = "recipient",
  InvoiceNumber = "invoiceNumber",
  Currency = "currency",
  PaymentTerms = "paymentTerms",
  InvoiceDate = "invoiceDate",
  DueDate = "dueDate",
}