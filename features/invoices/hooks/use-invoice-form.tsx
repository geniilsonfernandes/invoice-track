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

export const itemInitialValues = {
  name: "",
  quantity: 1,
  price: 0,
};

export const useInvoiceForm = (): UseFormReturn<InvoiceFormValues> => {
  const methods = useForm<InvoiceFormValues>({
    defaultValues: {
      sender: "",
      recipient: "",
      invoiceNumber: "dsfsf",
      currency: "USD",
      paymentTerms: PAYMENT_TERMS.DUE_ON_RECEIPT, // default to "Due on Receipt"
      invoiceDate: new Date(),
      items: [itemInitialValues],
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
