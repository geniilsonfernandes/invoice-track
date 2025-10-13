"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm, useFormContext, UseFormReturn } from "react-hook-form";
import { PAYMENT_TERMS } from "../constants";
import {
  Invoice as InvoiceFormValues,
  InvoiceSchema,
} from "../schemas/invoiceSchema";

export const InvoiceFormProvider = FormProvider;

type useInvoiceFormReturn = UseFormReturn<InvoiceFormValues> & {
    
}

export const useInvoiceForm = (): useInvoiceFormReturn => {
  const methods = useForm<InvoiceFormValues>({
    defaultValues: {
      sender: "",
      recipient: "",
      invoiceNumber: "dsfsf",
      currency: "USD",
      paymentTerms: PAYMENT_TERMS.DUE_ON_RECEIPT, // default to "Due on Receipt"
      invoiceDate: new Date(),
    },
    resolver: zodResolver(InvoiceSchema),
    mode: "onChange",
  });

  return methods;
};


export const useInvoiceFormContext = () => {
  return useFormContext<InvoiceFormValues>();
};