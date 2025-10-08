"use client";

import { CalendarPicker } from "components/calendar-picker";
import { ExampleCombobox, invoiceTypes } from "components/example-combobox";
import { LogoUpload } from "components/logo-upload";
import { Button } from "components/ui/button";
import { ButtonGroup, ButtonGroupText } from "components/ui/button-group";
import { Card, CardContent } from "components/ui/card";
import { Field, FieldContent, FieldLabel } from "components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupTextarea,
} from "components/ui/input-group";
import { Label } from "components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "components/ui/select";
import { Separator } from "components/ui/separator";
import { Textarea } from "components/ui/textarea";
import { Tooltip, TooltipContent, TooltipTrigger } from "components/ui/tooltip";
import { H4 } from "components/ui/typography";
import {
  Download,
  Eye,
  HomeIcon,
  InfoIcon,
  RefreshCcw,
  Send,
  User,
} from "lucide-react";
import { useState } from "react";

const BilledTo = ({ className }: { className?: string }) => {
  return (
    <InputGroup className={className}>
      <InputGroupTextarea
        id="billed-to"
        placeholder="Company Name, Address, Phone, Email"
      />
      <InputGroupAddon align="block-start">
        <Label htmlFor="billed-to" className="text-foreground">
          <User className="size-4" />
          Billed To
        </Label>

        <Tooltip>
          <TooltipTrigger asChild>
            <InputGroupButton
              variant="ghost"
              aria-label="Help"
              className="ml-auto rounded-full"
              size="icon-xs"
            >
              <InfoIcon />
            </InputGroupButton>
          </TooltipTrigger>

          <TooltipContent>
            <p>
              Enter the company or person you are billing. Include the full
              address, phone, and email so the invoice has complete contact
              details.
            </p>
          </TooltipContent>
        </Tooltip>
      </InputGroupAddon>
    </InputGroup>
  );
};

export const BillFrom = ({ className }: { className?: string }) => {
  return (
    <InputGroup className={className}>
      <InputGroupTextarea
        id="bill-from"
        placeholder="Company Name, Address, Phone, Email"
        defaultValue={
          "My Company\n456 Business Rd.\nCity, State, ZIP\n(987) 654-3210\ninfo@mycompany.com"
        }
      />

      <InputGroupAddon align="block-start">
        <Label htmlFor="bill-from" className="text-foreground">
          <HomeIcon className="size-4" />
          Bill From
        </Label>

        <Tooltip>
          <TooltipTrigger asChild>
            <InputGroupButton
              variant="ghost"
              aria-label="Help"
              className="ml-auto rounded-full"
              size="icon-xs"
            >
              <InfoIcon />
            </InputGroupButton>
          </TooltipTrigger>

          <TooltipContent>
            <p>
              Enter your company or personal information. This will appear as
              the sender on the invoice, including address, phone, and email.
            </p>
          </TooltipContent>
        </Tooltip>
      </InputGroupAddon>
    </InputGroup>
  );
};

const InvoicePreferences = () => {
  return (
    <div className="space-y-4">
      <H4>Invoice Preferences</H4>

      <div>
        <Label htmlFor="currency" className="text-sm font-medium mb-2 block">
          Currency
        </Label>

        <Select>
          <SelectTrigger id="currency" className="w-full">
            <SelectValue placeholder="Select currency" />
          </SelectTrigger>

          <SelectContent position="item-aligned">
            <SelectItem value="USD">🇺🇸 USD – United States Dollar</SelectItem>
            <SelectItem value="EUR">🇪🇺 EUR – Euro</SelectItem>
            <SelectItem value="GBP">🇬🇧 GBP – British Pound</SelectItem>
            <SelectItem value="BRL">🇧🇷 BRL – Brazilian Real</SelectItem>
            <SelectItem value="JPY">🇯🇵 JPY – Japanese Yen</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

const BasicDetails = () => {
  return (
    <div className="space-y-2">
      <Field orientation="vertical">
        <FieldContent>
          <FieldLabel htmlFor="payment-terms">Payment Terms</FieldLabel>
        </FieldContent>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select payment terms" />
          </SelectTrigger>
          <SelectContent position="item-aligned">
            <SelectItem value="net-15">Net 15</SelectItem>
            <SelectItem value="net-30">Net 30</SelectItem>
            <SelectItem value="due-on-receipt">Due on Receipt</SelectItem>
          </SelectContent>
        </Select>
      </Field>
      <CalendarPicker
        id="invoice-date-picker"
        name="invoice-date-picker"
        placeholder="Select invoice date"
        label="Invoice Date"
      />
      <CalendarPicker
        id="due-date-picker"
        name="due-date-picker"
        placeholder="Select due date"
        label="Invoice Due Date"
      />
    </div>
  );
};

const InvoiceNumber = () => {
  const [invoiceNumber, setInvoiceNumber] = useState("INV-0001");

  function generateInvoiceNumber() {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    setInvoiceNumber(randomNum.toString());
  }
  return (
    <div>
      <Label htmlFor="invoice-number">Invoice Number</Label>
      <ButtonGroup className="mt-3">
        <ButtonGroupText asChild>
          <Label>INV</Label>
        </ButtonGroupText>
        <InputGroup>
          <InputGroupInput
            id="invoice-number"
            placeholder="Invoice #"
            value={invoiceNumber}
            onChange={(e) => setInvoiceNumber(e.target.value)}
          />

          <InputGroupAddon align="inline-end">
            <InputGroupButton
              aria-label="Copy"
              title="Copy"
              size="icon-xs"
              onClick={generateInvoiceNumber}
            >
              <RefreshCcw className="size-4" />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </ButtonGroup>
    </div>
  );
};

const InvoiceActions = () => {
  return (
    <div className="w-full space-y-2">
      <Button className="flex-1 w-full">
        <Send className="mr-2 h-4 w-4" />
        Send Invoice
      </Button>

      <div className="flex w-full gap-2 ">
        <Button variant="outline" className="flex-1">
          <Eye className="mr-2 h-4 w-4" />
          Preview
        </Button>
        <Button variant="outline" className="flex-1">
          <Download className="mr-2 h-4 w-4" />
          Download
        </Button>
      </div>
    </div>
  );
};

export const InvoiceForm = () => {
  return (
    <>
      <div className="bg-card h-24 flex border-b border-accent"></div>
      <div className="flex gap-4 my-4 container mx-auto lg:max-w-5xl -mt-20">
        <Card
          className="grid grid-cols-12 gap-6 flex-1 p-6"
          aria-label="invoice form"
        >
          <div className="flex flex-col gap-2 col-span-7">
            {/* Logo Upload */}
            <LogoUpload />
          </div>
          <div className="flex flex-col gap-2 col-span-5">
            {/* Invoice Number */}

            <InvoiceNumber />

            {/* Invoice Type */}
            <ExampleCombobox
              id="invoice-type"
              label="Invoice Type"
              placeholder="Select Invoice Type"
              data={invoiceTypes}
            />
          </div>

          <BillFrom className="col-span-12" />
          <BilledTo className="col-span-12" />
          <Separator className="col-span-12 my-4" />

          <div className="col-span-12"> items</div>

          <div className="col-span-12">
            <ExampleCombobox label="Add Item" />
          </div>
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
          className="gap-2 space-y-4  min-w-xs  rounded-xl flex flex-col h-fit  sticky top-8 self-start"
          aria-label="form actions"
        >
          <Card>
            <CardContent>
              <InvoicePreferences />
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <BasicDetails />
              <Separator className="my-4" />
              <InvoiceActions />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};
