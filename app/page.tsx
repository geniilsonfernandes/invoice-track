import Features from "components/home/features";
import Footer from "components/home/footer";
import { Button } from "components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "components/ui/input-group";
import { InvoiceForm } from "features/invoices/components/invoice-form";
import { Header } from "../components/header";

export default function Home() {
  return (
    <main className="relative">
      <div className="container pb-4 ">
        <Header />
        <div className="max-w-40">
          <h1 className="text-lg text-center font-bold mt-8">
            Do More With Invoice Maker
          </h1>
          <InputGroup className="h-12">
            <InputGroupInput placeholder="Type to search..." />
            <InputGroupAddon align="inline-end">
              <Button>Search</Button>
            </InputGroupAddon>
          </InputGroup>
        </div>
        <InvoiceForm />
      </div>

      <Features />

      <Footer />
    </main>
  );
}
