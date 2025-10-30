import { Card, CardContent } from "components/ui/card"
import { Separator } from "components/ui/separator"

export default function ProposalSummary() {
  const subtotal = 64000
  const taxRate = 0.08
  const tax = subtotal * taxRate
  const total = subtotal + tax

  return (
    <section>
      <div className="flex justify-end">
        <Card className="w-full max-w-md p-2">
          <CardContent className="p-2">
            <h3 className="mb-4 text-lg font-semibold text-foreground">Proposal Summary</h3>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium text-foreground">${subtotal.toLocaleString()}</span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Tax (8%)</span>
                <span className="font-medium text-foreground">${tax.toLocaleString()}</span>
              </div>

              <Separator className="my-3" />

              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-foreground">Total Amount</span>
                <span className="text-2xl font-bold text-foreground">${total.toLocaleString()}</span>
              </div>
            </div>

            <div className="mt-6 rounded-lg bg-accent p-4">
              <div className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div className="text-sm leading-relaxed text-accent-foreground">
                  <p className="font-medium">Payment Terms</p>
                  <p className="mt-1 text-muted-foreground">50% deposit upon approval, 50% upon project completion</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
