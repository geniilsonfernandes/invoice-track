"use client";

import Loader from "components/loader";
import { Button } from "components/ui/button";
import { Card, CardContent } from "components/ui/card";
import { Check } from "lucide-react";
import { useState } from "react";

export default function ProposalCTA() {
  const [isApproving, setIsApproving] = useState(false);
  const [isApproved, setIsApproved] = useState(false);

  const handleApprove = () => {
    setIsApproving(true);

    // Simulate approval process
    setTimeout(() => {
      setIsApproving(false);
      setIsApproved(true);
    }, 1500);
  };

  if (isApproved) {
    return (
      <Card className="border-2 border-primary bg-primary/5">
        <CardContent className="flex flex-col items-center gap-4 py-12 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
            <Check className="size-6 " />
          </div>
          <div>
            <h3 className="mb-2 text-2xl font-bold text-foreground">
              Proposal Approved!
            </h3>
            <p className="text-muted-foreground">
              Thank you for your approval. We&apos;ll be in touch shortly to
              begin the project.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-2 border-border">
      <CardContent className="flex flex-col items-center gap-6 py-12 text-center">
        <div>
          <h3 className="mb-2 text-2xl font-bold text-foreground">
            Ready to Get Started?
          </h3>
          <p className="text-balance text-muted-foreground">
            Approve this proposal to begin your digital transformation journey
            with us.
          </p>
        </div>
        <div className="flex gap-4">
          <Button
            size="lg"
            className="h-12 px-8 text-base font-semibold"
            variant="outline"
          >
            Request Changes
          </Button>
          <Button
            size="lg"
            className="h-12 px-8 text-base font-semibold"
            onClick={handleApprove}
            disabled={isApproving}
          >
            {isApproving ? (
              <>
                <Loader className="size-4" />
                Processing...
              </>
            ) : (
              <>
                Approve Proposal
                <Check className="size-4 " />
              </>
            )}
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">
          By approving, you agree to the terms and conditions outlined above
        </p>
      </CardContent>
    </Card>
  );
}
