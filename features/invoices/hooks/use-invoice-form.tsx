"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormProvider,
  useFieldArray,
  useForm,
  useFormContext,
  UseFormReturn,
} from "react-hook-form";
import { PAYMENT_TERMS } from "../constants";
import {
  Invoice as InvoiceFormValues,
  InvoiceSchema,
} from "../schemas/invoiceSchema";

export const InvoiceFormProvider = FormProvider;

export const itemInitialValues = [
  {
    name: "Website Design",
    quantity: 1,
    price: 1800,
    description: "Custom landing page design with responsive layout.",
  },
  {
    name: "Backend Development",
    quantity: 1,
    price: 2500,
    description:
      "API development and database setup using Node.js and PostgreSQL.",
  },
  {
    name: "Mobile App UI",
    quantity: 1,
    price: 1500,
    description: "Figma design for iOS and Android app screens.",
  },
  {
    name: "SEO Optimization",
    quantity: 1,
    price: 800,
    description: "On-page and technical SEO for improved Google ranking.",
  },
  {
    name: "Logo & Branding Pack",
    quantity: 1,
    price: 600,
    description: "Logo design, color palette, and typography guidelines.",
  },
  {
    name: "Social Media Management",
    quantity: 3,
    price: 450,
    description:
      "Weekly content creation and scheduling for Instagram and LinkedIn.",
  },
  {
    name: "Maintenance Plan",
    quantity: 12,
    price: 120,
    description: "Monthly updates, backups, and performance monitoring.",
  },
];

export const useInvoiceForm = (): UseFormReturn<InvoiceFormValues> => {
  const methods = useForm<InvoiceFormValues>({
    defaultValues: {
      sender: "Pantrio Studio",
      recipient: "Acme Corp",
      invoiceNumber: "32402",
      currency: "USD",
      paymentTerms: PAYMENT_TERMS.NET_30, // default to "Due on Receipt"
      invoiceDate: new Date(),
      notes: "Thank you for your business!",
      items: [...itemInitialValues],
    },
    resolver: zodResolver(InvoiceSchema),
    mode: "onChange",
  });

  return methods;
};

export const useInvoiceFormItems = () => {
  const { control } = useFormContext<InvoiceFormValues>();

  return useFieldArray({
    control,
    name: "items",
  });
};

export const useInvoiceFormContext = () => {
  return useFormContext<InvoiceFormValues>();
};
