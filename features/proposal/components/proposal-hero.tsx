import { Badge } from "components/ui/badge";
import { Calendar1, CheckCircle, Clock3 } from "lucide-react";

export default function ProposalHero() {
  return (
    <section className="text-center h-screen flex flex-col items-center justify-center py-12 max-h-[90vh]">
      <div className="mb-6 flex items-center justify-center gap-2">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
          <CheckCircle className="size-6 text-white" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Afterhub Softwares
        </h1>
      </div>

      <Badge
        variant="secondary"
        className="mb-4 px-4 py-1.5 text-sm font-medium"
      >
        Proposal #2024-0127
      </Badge>

      <h2 className="mb-4 text-balance text-2xl font-semibold text-foreground sm:text-3xl">
        Digital Transformation Package
      </h2>

      <p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
        A comprehensive solution designed to modernize your business operations,
        enhance customer experience, and drive sustainable growth through
        cutting-edge technology and strategic implementation.
      </p>

      <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground [&_svg]:size-4 [&_svg]:text-primary">
        <div className="flex items-center gap-2">
          <Calendar1 />
          <span>Valid until: March 31, 2025</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock3 />
          <span>Delivery: 8-12 weeks</span>
        </div>
      </div>
    </section>
  );
}
