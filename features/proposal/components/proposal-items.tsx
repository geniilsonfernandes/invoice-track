import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "components/ui/card";
import { Separator } from "components/ui/separator";
import Image from "next/image";

const proposalItems = [
  {
    name: "Website Redesign & Development",
    description:
      "Complete overhaul of your existing website with modern design, responsive layout, and optimized performance. Includes UX research, wireframing, and full-stack development.",
    quantity: 1,
    price: 15000,
    image: "https://placehold.co/600x400/png",
  },
  {
    name: "Custom CRM Integration",
    description:
      "Tailored customer relationship management system integrated with your existing tools. Features include contact management, sales pipeline tracking, and automated workflows.",
    quantity: 1,
    price: 12500,
    image: "https://placehold.co/600x400/png",
  },
  {
    name: "Mobile Application Development",
    description:
      "Native iOS and Android applications with seamless synchronization to your web platform. Includes push notifications, offline mode, and analytics integration.",
    quantity: 1,
    price: 22000,
    image: "https://placehold.co/600x400/png",
  },
  {
    name: "Cloud Infrastructure Setup",
    description:
      "Secure, scalable cloud infrastructure with automated backups, monitoring, and 99.9% uptime guarantee. Includes migration support and documentation.",
    quantity: 1,
    price: 8500,
    image: "https://placehold.co/600x400/png",
  },
  {
    name: "Training & Support Package",
    description:
      "Comprehensive training sessions for your team, detailed documentation, and 6 months of priority support with dedicated account manager.",
    quantity: 1,
    price: 6000,
    image: "https://placehold.co/600x400/png",
  },
];

export default function ProposalItems() {
  return (
    <section>
      <h3 className="mb-6 text-2xl font-semibold text-foreground">Proposed Services</h3>

      <Card className="pb-2">
        <CardHeader className="pb-4">
          <div className="grid grid-cols-12 gap-4 text-sm font-medium text-muted-foreground">
            <div className="col-span-1"></div>
            <div className="col-span-5">Service</div>
            <div className="col-span-1 text-center">Qty</div>
            <div className="col-span-2 text-right">Unit Price</div>
            <div className="col-span-3 text-right">Total</div>
          </div>
        </CardHeader>
        <CardContent className="space-y-0 p-0">
          {proposalItems.map((item, index) => (
            <div key={index}>
              <div className="grid grid-cols-12 gap-4 px-6 py-5">
                <div className="col-span-1 flex items-start justify-center">
                  <div className="relative h-20 w-20 overflow-hidden rounded-lg border border-border bg-muted">
                    <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                  </div>
                </div>
                <div className="col-span-5">
                  <CardTitle className="mb-2 text-base font-semibold">{item.name}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">{item.description}</CardDescription>
                </div>
                <div className="col-span-1 flex items-start justify-center pt-1">
                  <span className="text-sm font-medium text-foreground">{item.quantity}</span>
                </div>
                <div className="col-span-2 flex items-start justify-end pt-1">
                  <span className="text-sm font-medium text-foreground">${item.price.toLocaleString()}</span>
                </div>
                <div className="col-span-3 flex items-start justify-end pt-1">
                  <span className="text-base font-semibold text-foreground">
                    ${(item.price * item.quantity).toLocaleString()}
                  </span>
                </div>
              </div>
              {index < proposalItems.length - 1 && <Separator />}
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  )
}
