import { ProposalProBadge } from "components/proposal-pro-badge";
import ProposalCTA from "../components/proposal-cta";
import ProposalHero from "../components/proposal-hero";
import ProposalItems from "../components/proposal-items";
import ProposalSteps from "../components/proposal-steps";
import ProposalSummary from "../components/proposal-summary";
import ProposalTerms from "../components/proposal-terms";

function ProposalPage() {
  return (
    <div>
      <div className="container space-y-4 mb-12">
        <ProposalHero />
        <ProposalItems />
        <ProposalSummary />
        <ProposalSteps />
        <ProposalTerms />
        <ProposalCTA />
      </div>
      <ProposalProBadge />
    </div>
  );
}

export default ProposalPage;
