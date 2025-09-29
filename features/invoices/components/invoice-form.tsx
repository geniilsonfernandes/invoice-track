"use client";

import { ExampleCombobox } from "components/example-combobox";
import { LogoUpload } from "components/logo-upload";
import ActionIcon from "components/ui/action";
import { Button } from "components/ui/button";
import { Input } from "components/ui/input";
import { Label } from "components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "components/ui/select";
import { Textarea } from "components/ui/textarea";
import {
  BadgeDollarSign,
  CalendarClock,
  Eye,
  FileDown,
  RefreshCcw,
} from "lucide-react";

const InvoiceType = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <Label
        htmlFor="invoice-type"
        className="block text-sm transition-colors group-focus-within:text-primary mb-2"
      >
        Invoice Type
      </Label>
      <Select>
        <SelectTrigger id="invoice-type" className="w-full">
          <SelectValue placeholder="Select Invoice Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="standard">Standard Invoice</SelectItem>
          <SelectItem value="proforma">Proforma Invoice</SelectItem>
          <SelectItem value="commercial">Commercial Invoice</SelectItem>
          <SelectItem value="credit">Credit Invoice</SelectItem>
          <SelectItem value="debit">Debit Invoice</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export const InvoiceForm = () => {
  // quando focus mudar a cor do label
  //
  return (
    <div className="flex gap-4 my-4">
      <div
        className="grid grid-cols-12 gap-6 flex-1 bg-white border border-accent p-4 rounded-lg"
        aria-label="invoice form"
      >
        <div className="flex flex-col gap-2 col-span-7">
          {/* Logo Upload */}
          <LogoUpload />

          {/* Invoice Number */}
          <Input.Wrapper
            id="invoice-number"
            label="Invoice Number"
            className="mt-8"
          >
            <Input
              id="invoice-number"
              placeholder="Enter invoice number"
              defaultValue={"INV-001"}
              state={"invalid"}
              rightSection={
                <ActionIcon>
                  <RefreshCcw />
                </ActionIcon>
              }
            />
          </Input.Wrapper>

          {/* Bill From */}
          <Input.Wrapper id="billFrom" label="Bill From">
            <Textarea
              id="billFrom"
              placeholder="Company Name, Address, Phone, Email"
              rows={6}
              defaultValue={
                "ACME Corp.\n123 Main St.\nCity, State, ZIP\n(123) 456-7890\n4M7h1@example.com"
              }
            />
          </Input.Wrapper>

          {/* Bill To */}
          <Textarea.Wrapper id="billTo" label="Bill To">
            <Textarea
              id="billTo"
              placeholder="Customer Name, Address, Phone, Email"
              rows={6}
              defaultValue={
                "ACME Corp.\n123 Main St.\nCity, State, ZIP\n(123) 456-7890\n4M7h1@example.com"
              }
            />
          </Textarea.Wrapper>
        </div>
        <div className="flex flex-col gap-2 col-span-5">
          {/* Logo Upload */}
          <LogoUpload />

          {/* Invoice Type */}
          <ExampleCombobox />

          {/* Invoice Date */}
          <Input.Wrapper id="invoice-date" label="Date" className="col-span-6">
            <Input
              id="invoice-date"
              placeholder="Select invoice date"
              defaultValue={"2024-01-01"}
              rightSection={
                <ActionIcon>
                  <CalendarClock />
                </ActionIcon>
              }
            />
          </Input.Wrapper>

          <Input.Wrapper id="due-date" label="Due Date" className="col-span-6">
            <Input
              id="due-date"
              placeholder="Select due date"
              defaultValue={"2024-01-15"}
              rightSection={
                <ActionIcon>
                  <CalendarClock />
                </ActionIcon>
              }
            />
          </Input.Wrapper>
        </div>

        <hr />

        <div className="col-span-12"> items</div>

        <div className="col-span-12">
          <ExampleCombobox />
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
      </div>
      <div>
        <div className="inline-flex gap-2" aria-label="form actions">
          <Button variant="outline" className="flex-1">
            <Eye className="mr-2 h-4 w-4" />
            Preview
          </Button>
          <Button className="flex-1">
            <FileDown className="mr-2 h-4 w-4" />
            Save PDF
          </Button>
        </div>
        <div className="mt-4 text-sm text-muted-foreground flex items-center gap-1">
          <BadgeDollarSign /> cuurrency select
        </div>
      </div>
    </div>
  );
};
