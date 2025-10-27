"use client";

import { Button } from "components/ui/button";
import { Card, CardContent } from "components/ui/card";
import { Download, Eye, Plus, Rocket, Send } from "lucide-react";
import { InvoiceTerms } from "./invoice-terms";

import { LogoUpload } from "components/logo-upload";
import { Preview } from "components/preview";
import { StatusBadge } from "components/status-badge";
import { Separator } from "components/ui/separator";
import { useFormContext } from "react-hook-form";
import { InvoiceFormProvider, useInvoiceForm } from "../hooks/use-invoice-form";
import { Invoice as InvoiceFormValues } from "../schemas/invoiceSchema";
import { InvoiceItemsTable } from "./invoice-items-table";
import { InvoiceNumber } from "./invoice-number";
import { Notes } from "./notes";
import { Recipient } from "./recipient";
import { Sender } from "./sender";

const InvoiceActions = () => {
  const { formState, getValues } = useFormContext<InvoiceFormValues>();

  const isHome = true;

  if (isHome) {
    return (
      <Card>
        <CardContent className="flex flex-col gap-2">
          <Preview />
        </CardContent>
      </Card>
    );
  }

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

const Tag = ({ label }: { label?: string }) => (
  <div className="bg-primary p-2 absolute -top-8 left-0 rounded-t-md text-xs pb-8 -z-10 flex items-center gap-1 text-white font-medium ">
    <Rocket size={12} />
    {label}
  </div>
);

export const InvoiceForm = () => {
  const methods = useInvoiceForm();

  const onSubmit = (data: InvoiceFormValues) => {
    // todo: quando for no dash ter opcao de mais detaljes na tebale de items, buscar por id, colcoar dettales e etc,
    // a logo é recurso apenas para pro
    // ajsuta o input de currenct e input de numero, ver se consigo colocar controls nele
    console.log("Dados válidos:", data);
  };

  return (
    <InvoiceFormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="gap-2 flex-1 mx-auto relative"
        aria-label="invoice form"
      >
        <div className="grid gap-4 grid-cols-12 max-w-6xl rounded-xl p-4 bg-card border border-primary">
          <Tag label="Create your first proposals — it’s free!" />

          <StatusBadge
            status="draft"
            className="col-span-12 flex items-center justify-between"
          />
          <LogoUpload />
          <InvoiceNumber className="col-span-6 col-start-7 self-end" />
          <Sender className="col-span-6" />
          <Recipient className="col-span-6" />
          <InvoiceTerms className="col-span-12" />
          <Separator className="col-span-12" />
          <InvoiceItemsTable />
          <Separator className="col-span-12" />
          <div className="col-span-12 px-2">
            <div className="flex justify-between w-full">
              <div className="font-bold">Total</div>
              <div className="text-muted-foreground">USD 1,200.00</div>
            </div>
          </div>
          <div className="col-span-12 ">
            <Button variant="outline" size="xs" type="button">
              <Plus />
              Add inclusive tax
            </Button>
          </div>
          <Notes className="col-span-12 " />
        </div>
      </form>
    </InvoiceFormProvider>
  );
};
