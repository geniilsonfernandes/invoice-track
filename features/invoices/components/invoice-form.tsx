"use client";

import { LogoUpload } from "components/logo-upload";
import { Button } from "components/ui/button";
import { Card, CardContent } from "components/ui/card";
import { Label } from "components/ui/label";
import { Textarea } from "components/ui/textarea";
import { Download, Eye, Send } from "lucide-react";
import { InvoiceTerms } from "./invoice-terms";

import { Separator } from "components/ui/separator";
import { cn } from "lib/utils";
import { useFormContext } from "react-hook-form";
import { InvoiceFormProvider, useInvoiceForm } from "../hooks/use-invoice-form";
import { Invoice as InvoiceFormValues } from "../schemas/invoiceSchema";
import { InvoiceItemsTable } from "./invoice-items-table";
import { InvoiceNumber } from "./invoice-number";
import { InvoicePreferences } from "./invoice-preferences";
import { Recipient } from "./recipient";
import { Sender } from "./sender";

const InvoiceActions = () => {
  const { formState } = useFormContext<InvoiceFormValues>();

  return (
    <Card>
      <CardContent className="flex flex-col gap-2">
        <Button
          className=""
          size="lg"
          type="submit"
          disabled={!formState.isValid}
          aria-disabled={!formState.isValid}
        >
          <Send /> Send Invoice
        </Button>

        <div className="flex w-full gap-2 ">
          <Button variant="secondary" className="flex-1">
            <Eye className="mr-2 h-4 w-4" />
            Preview
          </Button>
          <Button
            variant="secondary"
            className="flex-1"
            disabled={!formState.isValid}
          >
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

// criar hook para agrupar funcionalidades e tipos do form de invoice

export const InvoiceForm = () => {
  const methods = useInvoiceForm();

  const onSubmit = (data: InvoiceFormValues) => {
    // aqui 'idade' já virá como number | undefined e 'email' em lowercase (por causa do transform)
    console.log("Dados válidos:", data);
  };
  return (
    <InvoiceFormProvider {...methods}>
      <div className={cn("bg-card h-24 flex border-b border-accent")}></div>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex gap-4   my-4 container mx-auto lg:max-w-6xl -mt-20"
      >
        <Card
          className="grid grid-cols-12 gap-4 flex-1 p-6"
          aria-label="invoice form"
        >
          <div className="flex flex-col gap-2 col-span-6">
            {/* Logo Upload */}
            <LogoUpload />
          </div>
          {/* Invoice Number */}
          <InvoiceNumber className="col-span-6" />
          <Sender className="col-span-6" />
          <Recipient className="col-span-6" />
          <InvoiceTerms className="col-span-12" />
          <Separator className="col-span-12" />
          <InvoiceItemsTable />
          <div className="col-span-12">invoices options</div>
          <div className="col-span-12">
            <Label htmlFor="notes" className="mb-2">
              Notes
            </Label>
            <Textarea
              id="notes"
              placeholder="Additional notes or terms"
              rows={4}
            />
          </div>
        </Card>
        <div
          className="gap-2 space-y-2  min-w-xs  rounded-xl flex flex-col h-fit  sticky top-8 self-start"
          aria-label="form actions"
        >
          <InvoicePreferences />

          <InvoiceActions />
        </div>
      </form>
    </InvoiceFormProvider>
  );
};
