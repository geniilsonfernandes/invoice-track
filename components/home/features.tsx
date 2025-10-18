
import { Badge } from "components/ui/badge";
import AIInvoiceGenerator from "./ai-invoice-generator";

export function GradientGridOverlay() {
  return (
    <div className="absolute inset-0 pointer-events-none -z-10 opacity-60">
      <div
        className="w-full h-full"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px", // tamanho de cada célula
          backgroundBlendMode: "overlay",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 50%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 50%)",
        }}
      />
    </div>
  );
}

export default function Features() {
  return (
    <div className="py-28 border-t bg-card  ">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 text-center sm:px-6 lg:px-8">
        <div className="bg-muted flex items-center gap-2.5 rounded-full border px-3 py-2">
          <Badge className="rounded-full">AI-Powered</Badge>
          <span className="text-muted-foreground">
            Solution for client-facing businesses
          </span>
        </div>
      </div>
      <AIInvoiceGenerator />
    </div>
  );
}
