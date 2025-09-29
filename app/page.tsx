import { InvoiceForm } from "features/invoices/components/invoice-form";
import { Header } from "../components/header";

export default function Home() {
  return (
    <main className="bg-neutral-50 min-h-screen">
      <Header />
      <div className="container mx-auto lg:max-w-6xl">
        <InvoiceForm />
      </div>
    </main>
  );
}
