"use client";

import { LogoUpload } from "components/logo-upload";
import { Button } from "components/ui/button";
import { Card, CardContent } from "components/ui/card";
import { Download, Eye, Plus, Rocket, Send } from "lucide-react";
import { InvoiceTerms } from "./invoice-terms";

import { StatusBadge } from "components/status-badge";
import { Separator } from "components/ui/separator";
import { useFormContext } from "react-hook-form";
import { InvoiceFormProvider, useInvoiceForm } from "../hooks/use-invoice-form";
import { Invoice as InvoiceFormValues } from "../schemas/invoiceSchema";
import { InvoiceItemsTable } from "./invoice-items-table";
import { InvoiceNumber } from "./invoice-number";
import { InvoicePreferences } from "./invoice-preferences";
import { Notes } from "./notes";
import { Recipient } from "./recipient";
import { Sender } from "./sender";

const InvoiceActions = () => {
  const { formState } = useFormContext<InvoiceFormValues>();

  const isHome = true;

  if (isHome) {
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
            <Download /> Download
          </Button>

          <div className="flex w-full gap-2 ">
            <Button variant="secondary" className="flex-1">
              <Eye />
              Preview
            </Button>
          </div>
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
        className="flex w-full gap-4 rounded-xl relative"
      >
        <div className="bg-primary p-2 absolute -top-8 left-0 rounded-t-md text-xs pb-8 -z-10 flex items-center gap-1 text-white font-medium">
          <Rocket size={12} />
          Create your first invoice — it’s free!
        </div>
        <div
          className="grid grid-cols-12 gap-4 flex-1 border rounded-xl p-4 bg-card border-primary"
          aria-label="invoice form"
        >
          <div className="col-span-12 flex items-center justify-between">
            <StatusBadge status="draft" />
          </div>

          <LogoUpload />
          <InvoiceNumber className="col-span-6" />
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
        <div
          className="gap-4 max-w-xs min-w-xs flex flex-col sticky top-8 self-start md:hidden lg:flex"
          aria-label="form actions"
        >
          <InvoicePreferences />
          <InvoiceActions />
        </div>
      </form>
    </InvoiceFormProvider>
  );
};
