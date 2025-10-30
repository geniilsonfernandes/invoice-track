import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "components/ui/card"
import { CheckCircle2 } from "lucide-react"

const projectSteps = [
  {
    phase: "Phase 1",
    title: "Discovery & Planning",
    duration: "2 weeks",
    description:
      "Initial consultation, requirements gathering, competitive analysis, and project roadmap creation. We'll define clear objectives and success metrics.",
    deliverables: ["Project brief", "Technical specifications", "Timeline & milestones"],
  },
  {
    phase: "Phase 2",
    title: "Design & Prototyping",
    duration: "3 weeks",
    description:
      "Create wireframes, mockups, and interactive prototypes. Iterate based on your feedback to ensure the design aligns with your vision and brand identity.",
    deliverables: ["Design system", "High-fidelity mockups", "Interactive prototype"],
  },
  {
    phase: "Phase 3",
    title: "Development & Integration",
    duration: "6 weeks",
    description:
      "Full-stack development of all features, API integrations, and database setup. Regular progress updates and staging environment for review.",
    deliverables: ["Functional application", "API documentation", "Admin dashboard"],
  },
  {
    phase: "Phase 4",
    title: "Testing & Quality Assurance",
    duration: "2 weeks",
    description:
      "Comprehensive testing including functionality, performance, security, and cross-browser compatibility. Bug fixes and optimization.",
    deliverables: ["Test reports", "Performance audit", "Security assessment"],
  },
  {
    phase: "Phase 5",
    title: "Launch & Training",
    duration: "1 week",
    description:
      "Production deployment, team training sessions, documentation handover, and post-launch monitoring to ensure smooth operation.",
    deliverables: ["Live deployment", "Training materials", "Support documentation"],
  },
]

export default function ProposalSteps() {
  return (
    <section>
      <h3 className="mb-6 text-2xl font-semibold text-foreground">Project Timeline</h3>
      <p className="mb-8 text-muted-foreground leading-relaxed">
        Our structured approach ensures transparency and quality at every stage. Total estimated timeline: 14 weeks from
        kickoff to launch.
      </p>

      <div className="space-y-6">
        {projectSteps.map((step, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-3">
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {step.phase}
                    </span>
                    <span className="text-sm text-muted-foreground">{step.duration}</span>
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </div>
              </div>
              <CardDescription className="mt-3 leading-relaxed">{step.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm font-medium text-foreground">Key Deliverables:</p>
                <ul className="space-y-2">
                  {step.deliverables.map((deliverable, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
