import { DATA } from "@/data/resume";
import { ProjectHeroEnhanced } from "@/components/project-hero-enhanced";
import { PersonaGrid } from "@/components/persona-card";
import { MermaidDiagram } from "@/components/mermaid-diagram";
import BlurFade from "@/components/magicui/blur-fade";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Target,
  Users,
  Lightbulb,
  AlertCircle,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  Code,
  Award,
  Briefcase,
  Brain,
  Zap,
} from "lucide-react";
import { DotPattern } from "@/components/ui/dot-pattern";
import Image from "next/image";

export async function generateMetadata(): Promise<Metadata> {
  const project = DATA.projects.find((p) => p.href === "/projects/apple");

  if (!project) {
    return {};
  }

  const { title, description, subtitle } = project;
  const ogImage = `${DATA.url}/og?title=${title}`;

  return {
    title: `${title} | ${DATA.name}`,
    description: subtitle || description,
    openGraph: {
      title,
      description: subtitle || description,
      type: "website",
      url: `${DATA.url}/projects/apple`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: subtitle || description,
      images: [ogImage],
    },
  };
}

export default function ApplePage() {
  const project = DATA.projects.find((p) => p.href === "/projects/apple");

  if (!project || !project.overview) {
    notFound();
  }

  const {
    subtitle,
    splineUrl,
    technologies,
    hasNDA,
    overview,
    roles,
    metrics,
    context,
    problem,
    discovery,
    designProcess,
    features,
    solution,
    impact,
    reflection,
    personas,
  } = project as any;

  // Mermaid diagrams for workflow
  const beforeWorkflow = `sequenceDiagram
    participant Team
    participant Analyst
    participant SAP

    Analyst->>SAP: Access multiple Tcodes
    SAP->>Analyst: Present selection screens
    Analyst->>SAP: Input criteria to Retrieve metadata
    SAP->>Analyst: Return metadata
    Analyst->>SAP: Use Metadata to Retrieve required data
    SAP->>Analyst: Return data
    Analyst->>Analyst: Manually sift through data
    Analyst->>Analyst: Manually create report
    Analyst->>Team: Send the report to relevant team`;

  const afterWorkflow = `sequenceDiagram
    participant Team
    participant Analyst
    participant Our Tool as Our Tool
    participant SAP

    Analyst->>Our Tool: Input Criteria
    Our Tool->>SAP: Initiate Workflow with Automations
    SAP->>Our Tool: Return IDocs and BAPIs
    Our Tool->>Our Tool: Generate report with retrieved data
    Our Tool->>Analyst: Return report
    Analyst->>Team: Send the report to relevant team`;

  return (
    <>
      {/* Dot Pattern Background - Full Screen */}
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className="fixed inset-0 muted opacity-35 -z-10"
      />

      <div className="relative mx-auto px-6 md:px-12 lg:px-16 py-12 max-w-7xl">
        {/* Enhanced Hero Section with Simple Layout */}
        <ProjectHeroEnhanced
          title={project.title}
          subtitle={subtitle}
          tags={technologies}
          videoUrl="/projects/apple-demo.webm"
          hasNDA={hasNDA}
          metrics={metrics?.impact}
          variant="simple"
          infoBar={[
            { label: "Timeline", value: overview.timeline },
            { label: "Platform", value: overview.platform },
            { label: "Role", value: overview.role },
            { label: "Team", value: overview.team },
          ]}
          visualCaption="Mockup of the automated reporting tool. It replaced 10+ SAP T-codes and manual workflows"
          award={impact?.qualitative?.recognition}
        />


        {/* SECTION 2: PROBLEM & GOALS */}
        <section className="mb-20">
          <BlurFade delay={0.1} inView>
            <div className="space-y-8">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-acorn">
                  Problem & Goals
                </h2>
                <div className="h-1 flex-1 bg-gradient-to-r from-primary to-transparent rounded-full max-w-xs" />
              </div>

              {/* Problem Statement */}
              {problem && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold">The Problem</h3>
                  <Card className="p-6 bg-muted/50 border-border">
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {problem.statement}
                    </p>
                  </Card>

                  {problem.story && (
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold">A Real-World Scenario</h4>
                      <Card className="p-6 border-2">
                        <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                          {problem.story}
                        </p>
                      </Card>
                    </div>
                  )}
                </div>
              )}

              {/* What is NPI? Accordion */}
              {context?.npi && (
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="npi" className="border-none">
                    <AccordionTrigger className="text-base font-semibold hover:no-underline py-3 px-4 bg-primary/5 rounded-lg border border-primary">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-primary" />
                        What is NPI?
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pt-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {context.npi}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              )}
              {/* Goals & Objectives */}
              {problem?.goals && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold">Our Goals</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {problem.goals.map((goal: string, index: number) => (
                      <Card key={index} className="p-6 bg-primary/5 border-primary">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                            {index + 1}
                          </div>
                          <p className="text-muted-foreground leading-relaxed flex-1">
                            {goal}
                          </p>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* How I Discovered the Problem */}
              {discovery && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold flex items-center gap-2">
                    <AlertCircle className="w-6 h-6 text-primary" />
                    How I Discovered the Problem
                  </h3>

                  <Card className="p-6 bg-muted/50 border-border">
                    <h4 className="text-lg font-semibold mb-3">Pattern Recognition</h4>
                    <p className="text-muted-foreground leading-relaxed">{discovery.patternRecognition}</p>
                  </Card>

                  <div>
                    <h4 className="text-lg font-semibold mb-3">Shadowing the Reality</h4>
                    <p className="text-muted-foreground leading-relaxed">{discovery.shadowing}</p>
                  </div>

                  {/* The Hidden Cost */}
                  {discovery.manualWorkflow && (
                    <div className="space-y-4">
                      <Card className="p-6 border-2 border-border">
                        <h5 className="text-xl font-semibold mb-3">{discovery.manualWorkflow.title}</h5>
                        <p className="text-muted-foreground mb-6">{discovery.manualWorkflow.description}</p>

                        <div className="space-y-2 mb-6">
                          {discovery.manualWorkflow.steps.map((step: string, index: number) => (
                            <div
                              key={index}
                              className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg"
                            >
                              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center font-semibold">
                                {index + 1}
                              </span>
                              <p className="text-sm text-muted-foreground flex-1">{step}</p>
                            </div>
                          ))}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-border">
                          <div className="text-center">
                            <p className="text-3xl font-bold text-primary">
                              {discovery.manualWorkflow.timePerReport}
                            </p>
                            <p className="text-sm text-muted-foreground mt-1">Time per report</p>
                          </div>
                          <div className="text-center">
                            <p className="text-3xl font-bold text-primary">
                              {discovery.manualWorkflow.complexity}
                            </p>
                            <p className="text-sm text-muted-foreground mt-1">Clicks & keystrokes</p>
                          </div>
                          <div className="text-center">
                            <p className="text-3xl font-bold text-primary">3 months</p>
                            <p className="text-sm text-muted-foreground mt-1">{discovery.manualWorkflow.training}</p>
                          </div>
                        </div>
                      </Card>
                    </div>
                  )}

                  {/* Key Insight */}
                  <Card className="p-6 bg-primary/5 border-2 border-primary">
                    <div className="flex items-center gap-3">
                      <Lightbulb className="w-8 h-8 text-primary" />
                      <p className="text-xl md:text-2xl font-semibold italic text-foreground">
                        "{discovery.insight}"
                      </p>
                    </div>
                  </Card>
                </div>
              )}
            </div>
          </BlurFade>
        </section>

        {/* SECTION 3: USERS */}
        <section className="mb-20">
          <BlurFade delay={0.1} inView>
            <div className="space-y-8">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-acorn">
                  Users
                </h2>
                <div className="h-1 flex-1 bg-gradient-to-r from-primary to-transparent rounded-full max-w-xs" />
              </div>

              {/* Who We Served */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Who We Served</h3>
                <Card className="p-6 border-2">
                  <p className="text-muted-foreground leading-relaxed">{overview.users}</p>
                </Card>
              </div>

              {/* User Personas */}
              {personas && personas.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">User Personas</h3>
                  <PersonaGrid personas={personas} />
                </div>
              )}

            </div>
          </BlurFade>
        </section>

        {/* SECTION 4: DESIGN PROCESS & SOLUTION DEVELOPMENT */}
        {designProcess && (
          <section className="mb-20">
            <BlurFade delay={0.1} inView>
              <div className="space-y-8">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-acorn">
                    Design Process & Solution Development
                  </h2>
                  <div className="h-1 flex-1 bg-gradient-to-r from-primary to-transparent rounded-full max-w-xs" />
                </div>

                <div className="space-y-8">
                  {/* Prototype */}
                  {designProcess.prototype && (
                    <div className="space-y-4">
                      <h3 className="text-2xl font-semibold">Building the Prototype</h3>
                      <Card className="p-6 border-2 border-border">
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2 text-foreground">Approach</h4>
                            <p className="text-muted-foreground leading-relaxed">{designProcess.prototype.approach}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2 text-foreground">Features</h4>
                            <p className="text-muted-foreground leading-relaxed">{designProcess.prototype.features}</p>
                          </div>
                          <div className="bg-muted/50 p-4 rounded-lg">
                            <h4 className="font-semibold mb-2 text-foreground">The Magic</h4>
                            <p className="text-muted-foreground leading-relaxed">{designProcess.prototype.magic}</p>
                          </div>
                        </div>
                      </Card>
                    </div>
                  )}

                  {/* Validation */}
                  {designProcess.validation && (
                    <div className="space-y-4">
                      <h3 className="text-2xl font-semibold">Stakeholder Validation</h3>
                      <Card className="p-6 border-2">
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {designProcess.validation.approach}
                        </p>
                        <div className="bg-muted/50 p-4 rounded-lg border border-border">
                          <p className="text-lg font-semibold text-foreground italic">
                            {designProcess.validation.response}
                          </p>
                        </div>
                      </Card>
                    </div>
                  )}

                  {/* Strategic Positioning */}
                  {designProcess.strategicPositioning && (
                    <div className="space-y-4">
                      <h3 className="text-2xl font-semibold">Strategic Positioning</h3>
                      <Card className="p-6 border-2 border-border">
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2 text-foreground">
                              The Opportunity
                            </h4>
                            <p className="text-muted-foreground leading-relaxed">
                              {designProcess.strategicPositioning.opportunity}
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2 text-foreground">The Pitch</h4>
                            <p className="text-muted-foreground leading-relaxed">
                              {designProcess.strategicPositioning.pitch}
                            </p>
                          </div>
                          <div className="bg-muted/50 p-4 rounded-lg">
                            <h4 className="font-semibold mb-2 text-foreground">The Result</h4>
                            <p className="text-muted-foreground leading-relaxed">
                              {designProcess.strategicPositioning.result}
                            </p>
                          </div>
                        </div>
                      </Card>
                    </div>
                  )}

                  {/* Card Sorting */}
                  {designProcess.cardSorting && (
                    <div className="space-y-4">
                      <h3 className="text-2xl font-semibold">Card Sorting & Information Architecture</h3>
                      <Card className="p-6 border-2">
                        <div className="space-y-4">
                          <p className="text-muted-foreground leading-relaxed">{designProcess.cardSorting.approach}</p>
                          <p className="text-muted-foreground leading-relaxed">
                            {designProcess.cardSorting.structure}
                          </p>
                          <div className="bg-primary/5 p-4 rounded-lg border border-primary">
                            <h4 className="font-semibold mb-2 text-foreground">Key Finding</h4>
                            <p className="text-muted-foreground leading-relaxed">{designProcess.cardSorting.finding}</p>
                          </div>
                        </div>
                      </Card>
                    </div>
                  )}

                  {/* SAP Fiori */}
                  {designProcess.sapFiori && (
                    <Card className="p-6 bg-muted border-border">
                      <h3 className="text-xl font-semibold mb-3">Working with SAP Fiori Design System</h3>
                      <p className="text-muted-foreground leading-relaxed">{designProcess.sapFiori}</p>
                    </Card>
                  )}
                </div>
              </div>
            </BlurFade>
          </section>
        )}

        {/* SECTION 5: SOLUTION & RESULTS */}
        {solution && (
          <section className="mb-20">
            <BlurFade delay={0.1} inView>
              <div className="space-y-8">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-acorn">
                    Solution & Results
                  </h2>
                  <div className="h-1 flex-1 bg-gradient-to-r from-primary to-transparent rounded-full max-w-xs" />
                </div>

                {/* Feature Details */}
                {features && (
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">{features.title}</h3>
                    <p className="text-lg text-muted-foreground">{features.description}</p>

                    {features.mainFeature && (
                      <Card className="p-6 border-2 border-border">
                        <h4 className="text-xl font-semibold mb-4 text-foreground">
                          {features.mainFeature.name}
                        </h4>

                        <div className="space-y-4">
                          <div>
                            <h5 className="font-semibold mb-2">What it did</h5>
                            <p className="text-muted-foreground leading-relaxed">{features.mainFeature.whatItDid}</p>
                          </div>

                          <div>
                            <h5 className="font-semibold mb-2">Why it mattered</h5>
                            <p className="text-muted-foreground leading-relaxed">
                              {features.mainFeature.whyItMattered}
                            </p>
                          </div>

                          <div>
                            <h5 className="font-semibold mb-2">Design Decisions</h5>
                            <ul className="space-y-2">
                              {features.mainFeature.designDecisions.map((decision: string, index: number) => (
                                <li key={index} className="flex items-start gap-2">
                                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                  <span className="text-muted-foreground">{decision}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-muted/50 p-4 rounded-lg">
                            <h5 className="font-semibold mb-2 text-foreground">Output</h5>
                            <p className="text-muted-foreground leading-relaxed">{features.mainFeature.output}</p>
                          </div>
                        </div>
                      </Card>
                    )}
                  </div>
                )}

                {/* Before/After Workflow Diagrams */}
                <div className="space-y-8">
                  <h3 className="text-2xl font-semibold">Before & After: Workflow Transformation</h3>

                  {/* Before Workflow */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-primary">
                      Before: Manual Process (17-25 minutes)
                    </h4>
                    <Card className="p-6 border-2 border-border bg-muted/30">
                      <MermaidDiagram chart={beforeWorkflow} className="flex justify-center" />
                    </Card>
                  </div>

                  {/* After Workflow */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-primary">
                      After: Automated Solution (&lt;1 minute)
                    </h4>
                    <Card className="p-6 border-2 border-primary/30 bg-primary/5">
                      <MermaidDiagram chart={afterWorkflow} className="flex justify-center" />
                    </Card>
                  </div>
                </div>

                {/* Workflow Summary */}
                {solution.automation?.summary && (
                  <Card className="p-6 bg-muted/30 border-border">
                    <p className="text-muted-foreground leading-relaxed">{solution.automation.summary}</p>
                  </Card>
                )}

                {/* Adoption Success */}
                {solution.adoption && (
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">Adoption Success</h3>
                    <Card className="p-8 bg-muted/30 border-border">
                      <p className="text-lg text-muted-foreground mb-6 whitespace-pre-line">
                        {solution.adoption.description}
                      </p>
                      {solution.adoption.metrics && solution.adoption.metrics.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          {solution.adoption.metrics.map((metric: any, index: number) => (
                            <div key={index} className="space-y-2">
                              <p className="text-sm text-muted-foreground uppercase tracking-wide">{metric.label}</p>
                              <p
                                className={`text-5xl font-bold ${
                                  index === 1
                                    ? "text-primary"
                                    : "text-muted-foreground"
                                }`}
                              >
                                {metric.value}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </Card>
                  </div>
                )}
              </div>
            </BlurFade>
          </section>
        )}

        {/* Impact & Results Section */}
        {impact && (
          <section className="mb-16">
            <BlurFade delay={0.1} inView>
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-acorn">
                    Impact & Results
                  </h2>
                  <div className="h-1 flex-1 bg-gradient-to-r from-primary to-transparent rounded-full max-w-xs" />
                </div>

                {/* Quantified Impact */}
                {impact.quantified && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Quantified Impact</h3>

                    {/* Time Savings */}
                    {impact.quantified.timeSavings && (
                      <Card className="p-6 border-2 border-primary">
                        <h4 className="text-xl font-semibold mb-4">Time Savings Per Report</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div className="text-center">
                            <p className="text-3xl font-bold text-primary">
                              {impact.quantified.timeSavings.before}
                            </p>
                            <p className="text-sm text-muted-foreground">Before</p>
                          </div>
                          <div className="text-center">
                            <p className="text-3xl font-bold text-primary">
                              {impact.quantified.timeSavings.after}
                            </p>
                            <p className="text-sm text-muted-foreground">After</p>
                          </div>
                          <div className="text-center">
                            <p className="text-3xl font-bold text-primary">
                              {impact.quantified.timeSavings.savings}
                            </p>
                            <p className="text-sm text-muted-foreground">Saved</p>
                          </div>
                        </div>
                      </Card>
                    )}

                    {/* Scale Impact */}
                    {impact.quantified.scale && (
                      <Card className="p-6 bg-primary/5 border-primary">
                        <h4 className="text-xl font-semibold mb-4">Impact at Scale</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                          <div className="text-center">
                            <p className="text-3xl font-bold text-primary">~7,000</p>
                            <p className="text-sm text-muted-foreground">Reports weekly</p>
                          </div>
                          <div className="text-center">
                            <p className="text-3xl font-bold text-primary">2,216+</p>
                            <p className="text-sm text-muted-foreground">Hours saved/week</p>
                          </div>
                          <div className="text-center">
                            <p className="text-3xl font-bold text-primary">115k+</p>
                            <p className="text-sm text-muted-foreground">Hours saved/year</p>
                          </div>
                          <div className="text-center">
                            <p className="text-3xl font-bold text-primary">$5.18M</p>
                            <p className="text-sm text-muted-foreground">Productivity gains</p>
                          </div>
                        </div>
                      </Card>
                    )}

                    {/* Additional Benefits */}
                    {impact.quantified.additionalBenefits && (
                      <Card className="p-6 border-2">
                        <h4 className="text-xl font-semibold mb-4">Additional Benefits</h4>
                        <ul className="space-y-3">
                          {impact.quantified.additionalBenefits.map((benefit: string, index: number) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </Card>
                    )}
                  </div>
                )}

                {/* Qualitative Outcomes */}
                {impact.qualitative && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Qualitative Outcomes</h3>

                    {/* What Users Told Me */}
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold">What Users Told Me</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* P1 - Retail Store Manager */}
                        <Card className="p-6 bg-card border-2 border-border">
                          <div className="mb-3">
                            <p className="text-sm font-semibold text-foreground">P1</p>
                            <p className="text-xs text-muted-foreground">Retail Store Manager</p>
                          </div>
                          <p className="text-base text-muted-foreground italic">
                            "This tool is exactly what we needed. I can't believe we used to do this manually. Now I can pull up reports in seconds instead of waiting around for someone to compile data."
                          </p>
                        </Card>

                        {/* P2 - Senior Business Analyst */}
                        <Card className="p-6 bg-card border-2 border-border">
                          <div className="mb-3">
                            <p className="text-sm font-semibold text-foreground">P2</p>
                            <p className="text-xs text-muted-foreground">Senior Business Analyst</p>
                          </div>
                          <p className="text-base text-muted-foreground italic">
                            "The time I used to spend wrestling with SAP is now spent on actual analysis. It helps a lot with my workflow, I would love to see it talking directly to tableau someday"
                          </p>
                        </Card>

                        {/* P3 - Supply Chain Lead */}
                        <Card className="p-6 bg-card border-2 border-border">
                          <div className="mb-3">
                            <p className="text-sm font-semibold text-foreground">P3</p>
                            <p className="text-xs text-muted-foreground">Supply Chain Lead</p>
                          </div>
                          <p className="text-base text-muted-foreground italic">
                            "Best part is, I do not have to search for store codes and prodcut codes anymore and yet find what I need"
                          </p>
                        </Card>

                        {/* P4 - Global Retail Team */}
                        <Card className="p-6 bg-card border-2 border-border">
                          <div className="mb-3">
                            <p className="text-sm font-semibold text-foreground">P4</p>
                            <p className="text-xs text-muted-foreground">Global Retail Team</p>
                          </div>
                          <p className="text-base text-muted-foreground italic">
                            "I really like how we can have niche data from multiple regions at once"
                          </p>
                        </Card>
                      </div>
                    </div>

                    {/* User Feedback & Executive Impact */}
                    <div className="grid grid-cols-1 gap-4">


                      {impact.qualitative.executiveImpact && (
                        <Card className="p-6 border-2 border-border">
                          <h4 className="font-semibold mb-2 text-foreground">
                            Executive Impact
                          </h4>
                          <p className="text-muted-foreground">{impact.qualitative.executiveImpact}</p>
                        </Card>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </BlurFade>
          </section>
        )}

        {/* SECTION 6: REFLECTION */}
        {reflection && (
          <section className="mb-20">
            <BlurFade delay={0.1} inView>
              <div className="space-y-8">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-acorn">
                    Reflection
                  </h2>
                  <div className="h-1 flex-1 bg-gradient-to-r from-primary to-transparent rounded-full max-w-xs" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* What Worked Well */}
                  {reflection.successful && (
                    <Card className="p-6 border-2 border-border">
                      <h3 className="text-xl font-semibold mb-4 text-foreground">
                        What Worked Well
                      </h3>
                      <ul className="space-y-3">
                        {reflection.successful.map((item: string, index: number) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  )}

                  {/* What I'd Do Differently */}
                  {reflection.doingDifferently && (
                    <Card className="p-6 border-2 border-border">
                      <h3 className="text-xl font-semibold mb-4 text-foreground">
                        What I'd Do Differently
                      </h3>
                      <ul className="space-y-3">
                        {reflection.doingDifferently.map((item: string, index: number) => (
                          <li key={index} className="flex items-start gap-2">
                            <Lightbulb className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  )}
                </div>
              </div>
            </BlurFade>
          </section>
        )}

        {/* SECTION 7: SKILLS DEMONSTRATED */}
        <section className="mb-20">
          <BlurFade delay={0.1} inView>
            <div className="space-y-8">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-acorn">
                  Skills Demonstrated
                </h2>
                <div className="h-1 flex-1 bg-gradient-to-r from-primary to-transparent rounded-full max-w-xs" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Research & Discovery */}
                <Card className="p-6 border-2">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">
                    Research & Discovery
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Observational studies and workflow shadowing</li>
                    <li>• Stakeholder interviews across global regions</li>
                    <li>• Pattern recognition from backlog analysis</li>
                    <li>• Problem framing and opportunity identification</li>
                  </ul>
                </Card>

                {/* Design & Architecture */}
                <Card className="p-6 border-2">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">
                    Design & Architecture
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Information architecture and card sorting</li>
                    <li>• Progressive disclosure and smart defaults</li>
                    <li>• Human-centered automation design</li>
                    <li>• Enterprise design system constraints (SAP Fiori)</li>
                  </ul>
                </Card>

                {/* Collaboration & Leadership */}
                <Card className="p-6 border-2">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">
                    Collaboration & Leadership
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Cross-functional partnership (engineering, QA)</li>
                    <li>• Stakeholder management across global regions</li>
                    <li>• Navigating resource constraints</li>
                    <li>• Introducing new UX methodologies to team</li>
                  </ul>
                </Card>

                {/* Business & Strategy */}
                <Card className="p-6 border-2">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">
                    Business & Strategy
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• ROI measurement and business case development</li>
                    <li>• Strategic positioning and opportunity recognition</li>
                    <li>• Commercial impact ($450k+ consulting revenue)</li>
                    <li>• Scaling from prototype to enterprise solution</li>
                  </ul>
                </Card>
              </div>
            </div>
          </BlurFade>
        </section>
      </div>
    </>
  );
}
