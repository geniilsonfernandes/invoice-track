import DottedGradient from "components/dotted-gradient";
import { BillingHighlights } from "components/home/billing-highlights";
import Features from "components/home/features";
import Footer from "components/home/footer";
import { TrustedBy } from "components/home/trusted-by";
import { InvoiceForm } from "features/invoices/components/invoice-form";
import { Header } from "../components/header";

//
export default function Home() {
  return (
    <main className="relative container">
      <Header />
      <BillingHighlights />
      <DottedGradient />
      <TrustedBy />
      <InvoiceForm />
      <Features />
      <Footer />
    </main>
  );
}
