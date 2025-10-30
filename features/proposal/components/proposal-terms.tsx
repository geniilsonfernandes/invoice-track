
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "components/ui/accordion";

export default function ProposalTerms() {
  return (
    <section>
      <Accordion type="single" collapsible className="px-4 border rounded-lg bg-card ">
        <AccordionItem value="terms-conditions">
          <AccordionTrigger className="text-lg items-center" >
            Terms & Conditions
          </AccordionTrigger>
          <AccordionContent className="space-y-6 mt-4 pb-4">
            <div >
              <h4 className="mb-2 font-semibold text-foreground">
                1. Project Scope
              </h4>
              <p>
                This proposal outlines the complete scope of work to be
                delivered. Any additional features or modifications requested
                outside this scope will be subject to separate quotation and may
                affect the project timeline and total cost.
              </p>
            </div>

            <div>
              <h4 className="mb-2 font-semibold text-foreground">
                2. Payment Schedule
              </h4>
              <p>
                A 50% deposit is required upon proposal approval to commence
                work. The remaining 50% is due upon project completion and
                client approval. All payments should be made within 15 days of
                invoice date. Late payments may incur a 1.5% monthly fee.
              </p>
            </div>

            <div>
              <h4 className="mb-2 font-semibold text-foreground">
                3. Timeline & Delivery
              </h4>
              <p>
                The estimated delivery timeline of 8-12 weeks begins upon
                receipt of the initial deposit and all required materials from
                the client. Delays in client feedback or material provision may
                extend the delivery date accordingly.
              </p>
            </div>

            <div>
              <h4 className="mb-2 font-semibold text-foreground">
                4. Revisions & Changes
              </h4>
              <p>
                This proposal includes up to three rounds of revisions per
                deliverable. Additional revisions or significant changes to
                approved work will be billed at our standard hourly rate of
                $150/hour.
              </p>
            </div>

            <div>
              <h4 className="mb-2 font-semibold text-foreground">
                5. Intellectual Property
              </h4>
              <p>
                Upon full payment, all intellectual property rights for the
                delivered work will transfer to the client. Acme Solutions
                retains the right to showcase the project in our portfolio
                unless otherwise agreed in writing.
              </p>
            </div>

            <div>
              <h4 className="mb-2 font-semibold text-foreground">
                6. Support & Maintenance
              </h4>
              <p>
                The included 6-month support package covers bug fixes and
                technical assistance. After this period, ongoing maintenance and
                support can be arranged through a separate service agreement.
              </p>
            </div>

            <div>
              <h4 className="mb-2 font-semibold text-foreground">
                7. Confidentiality
              </h4>
              <p>
                Both parties agree to maintain confidentiality of all
                proprietary information shared during the course of this
                project. This obligation continues indefinitely beyond the
                project completion date.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
