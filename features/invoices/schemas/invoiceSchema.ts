import { z } from "zod";

// 🧩 Validation schema
export const InvoiceSchema = z.object({
  sender: z.string().min(1, "Sender is required"),
  recipient: z.string().min(1, "Recipient is required"),
  invoiceNumber: z.string().min(1, "Invoice number is required"),
  currency: z.string().min(1, "Currency is required"),
  paymentTerms: z.string().min(1, "Terms is required"),
  invoiceDate: z.date(),
  /// due date to be after invoice date
  dueDate: z.date().min(new Date(), "Due date must be after invoice date"),
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