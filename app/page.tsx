import { BillingHighlights } from "components/home/billing-highlights";
import Features from "components/home/features";
import Footer from "components/home/footer";
import { TrustedBy } from "components/home/trusted-by";
import { InvoiceForm } from "features/invoices/components/invoice-form";
import { Header } from "../components/header";

export default function Home() {
  return (
    <main className="relative">
      <div className="container pb-4 ">
        <Header />
        <BillingHighlights />
        <TrustedBy />
        <InvoiceForm />
      </div>
      <Features />
      <Footer />
    </main>
  );
}
