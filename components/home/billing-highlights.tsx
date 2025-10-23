import { Button } from "components/ui/button";
import { ChartSpline, FileText, Rocket, Send, Sparkles } from "lucide-react";

export function BillingHighlights() {
  return (
    <div className="mt-8">
      <h1 className="text-3xl font-semibold tracking-tight text-center">
        Free Quoting & Proposal Management with AI Features
      </h1>
      <p className="text-muted-foreground text-center my-2">
        <span className="bg-gradient-to-r from-primary font-bold to-orange-200 bg-clip-text text-transparent">
          Turn up to 70%
        </span>{" "}
        of your quotes into closed deals.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-6 text-xs mt-8">
        <div className="flex items-center gap-2 text-muted-foreground">
          <FileText className="size-4 text-primary" />
          <span>Create professional proposals</span>
        </div>

        <div className="flex items-center gap-2 text-muted-foreground">
          <ChartSpline className="size-4 text-primary" />
          <span>Track quotes and client approvals</span>
        </div>

        <div className="flex items-center gap-2 text-muted-foreground">
          <Send className="size-4 text-primary" />
          <span>Send and share with clients easily</span>
        </div>
      </div>

      <div className="mt-8 [&_button]:rounded-full [&_button]:hover:-translate-y-[2px] duration-200 flex items-center justify-center gap-4">
        <Button size="lg">
          <Rocket /> Start free trial
        </Button>
        <Button size="lg" variant="secondary">
          <Sparkles /> View Proposal Demo
        </Button>
      </div>
    </div>
  );
}
