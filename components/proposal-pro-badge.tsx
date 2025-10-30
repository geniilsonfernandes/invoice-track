import { Logo } from "./icons";

export const ProposalProBadge = () => {
  return (
    <div className="flex items-center justify-center gap-2 bg-primary p-2">
      <Logo className="text-white size-4" />
      <span className="text-sm text-white font-semibold">
        Created with Proposal
      </span>
    </div>
  );
};
