"use client";

import { generateInvoice } from "app/actions/generate-invoice";
import { Field, FieldContent } from "components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "components/ui/input-group";
import { Flame, Loader2 } from "lucide-react";
import React, { useState, useTransition } from "react";

const AIInvoiceGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    startTransition(async () => {
      const res = await generateInvoice(prompt);
      setResult(res);
    });
  };

  return (
    <div className="max-w-lg mx-auto my-28">
      <h2 className="text-3xl font-bold text-center mb-4">
        Generate Invoices with <span className="text-primary">AI</span>
      </h2>

      <p className="text-center text-muted-foreground mb-4">
        Describe your invoice — just tell us what to include{" "}
        <Flame className="inline size-4" />
      </p>

      <Field orientation="vertical">
        <FieldContent>
          <InputGroup className="shadow-2xl">
            <InputGroupTextarea
              id="invoice-ai"
              placeholder="e.g. 5 design hours and 3 product licenses"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <InputGroupAddon align="block-end">
              <InputGroupButton
                className="ml-auto"
                size="sm"
                variant="outline"
                disabled={isPending}
                onClick={handleGenerate}
              >
                {isPending ? (
                  <Loader2 className="size-4 animate-spin" />
                ) : (
                  "Generate"
                )}
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </FieldContent>
      </Field>

      {result && (
        <div className="mt-6 p-4 border rounded-lg bg-muted text-sm whitespace-pre-line">
          {result}
        </div>
      )}
    </div>
  );
};

export default AIInvoiceGenerator;