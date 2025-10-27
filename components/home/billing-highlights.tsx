import { Button } from "components/ui/button";
import { ChartSpline, FileText, Rocket, Send, Sparkles } from "lucide-react";

export function BillingHighlights() {
  return (
    <div className="mt-8">
      <h1 className="text-3xl font-semibold tracking-tight text-center">
        Simplify Your Quotes & Proposals — Powered by AI
      </h1>
      <p className="text-muted-foreground text-center my-2">
        Close deals up to{" "}
        <span className="bg-gradient-to-r from-primary font-bold to-orange-200 bg-clip-text text-transparent">
          70% faster.
        </span>{" "}
        by creating, sending, and tracking professional proposals.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-6 text-xs mt-8">
        <div className="flex items-center gap-2 text-muted-foreground">
          <FileText className="size-4 text-primary" />
          <span>Create stunning proposals in minutes</span>
        </div>

        <div className="flex items-center gap-2 text-muted-foreground">
          <ChartSpline className="size-4 text-primary" />
          <span>Track quotes and client approvals in real time</span>
        </div>

        <div className="flex items-center gap-2 text-muted-foreground">
          <Send className="size-4 text-primary" />
          <span>Share and collaborate seamlessly with clients</span>
        </div>
      </div>
      <div className="mt-8 [&_button]:rounded-full [&_button]:hover:-translate-y-[2px] duration-200 flex items-center justify-center gap-4">
        <Button size="lg">
          <Rocket /> Start for free
        </Button>
        <Button size="lg" variant="secondary">
          <Sparkles /> View Proposal Demo
        </Button>
      </div>
      <p className="text-muted-foreground text-center my-2 text-xs">
        No installation required
      </p>
    </div>
  );
}
