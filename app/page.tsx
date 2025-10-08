import { Avatar, AvatarFallback, AvatarImage } from "components/ui/avatar";
import { InvoiceForm } from "features/invoices/components/invoice-form";
import { Header } from "../components/header";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="bg-card flex items-center justify-center py-8">
        <div className="border border-input p-2 rounded-full flex gap-4 items-center hover:border-primary">
          <div className="*:data-[slot=avatar]:ring-background bg-card inline-flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale *:data-[slot=avatar]:size-6 ">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                src="https://github.com/maxleiter.png"
                alt="@maxleiter"
              />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                src="https://github.com/evilrabbit.png"
                alt="@evilrabbit"
              />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
          </div>

          <p className="text-sm text-muted-foreground pr-1">
            <span className="font-bold text-primary">2,000+</span> invoices
            created so far
          </p>
        </div>
      </div>

      <InvoiceForm />
    </main>
  );
}
