import { DATA } from "@/data/resume";
import { ProjectHeroEnhanced } from "@/components/project-hero-enhanced";
import { PersonaGrid } from "@/components/persona-card";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import BlurFade from "@/components/magicui/blur-fade";
import {
  Sparkles,
  Target,
  CheckCircle2,
  XCircle,
  TrendingUp,
  Award,
} from "lucide-react";
import Link from "next/link";
import { lazy, Suspense } from "react";
import { DotPattern } from "@/components/ui/dot-pattern";

// Lazy load heavy components
const AgentArchitectureDiagramSimple = lazy(() =>
  import("@/components/forge/agent-architecture-diagram-simple").then((mod) => ({
    default: mod.AgentArchitectureDiagramSimple,
  }))
);

// Find FORGE project data
const project = DATA.projects.find((p) => p.href === "/projects/forge");

export default function ForgePage() {
  if (!project) {
    return <div>Project not found</div>;
  }

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
        {/* Hero Section with Enhanced Component */}
        <ProjectHeroEnhanced
          title={project.title}
          subtitle={project.subtitle || ""}
          tags={[...project.technologies]}
          splineUrl={project.splineUrl}
          hasNDA={project.hasNDA}
          metrics={project.metrics?.impact ? [...project.metrics.impact] : []}
          variant="simple"
          infoBar={[
            { label: "Timeline", value: project.overview?.timeline || "" },
            { label: "Role", value: project.overview?.role || "" },
            { label: "Platform", value: project.overview?.platform || "" },
          ]}
        />

        {/* Section 1: Overview */}
        <section className="mb-20">
          <BlurFade delay={0.1} inView>
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-acorn">
                  Overview
                </h2>
                <div className="h-1 flex-1 bg-gradient-to-r from-primary to-transparent rounded-full max-w-xs" />
              </div>
              <p className="text-lg text-muted-foreground max-w-4xl">
                {project.overview?.intro}
              </p>
            </div>
          </BlurFade>

          {project.context && (
            <BlurFade delay={0.3} inView>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 bg-card border-border">
                  <h4 className="font-semibold text-lg mb-3 text-foreground">
                    What is AI-Native Development?
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {project.context.aiNativeDevelopment}
                  </p>
                </Card>
                <Card className="p-6 bg-card border-border">
                  <h4 className="font-semibold text-lg mb-3 text-foreground">
                    What is Second Saturday?
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {project.context.secondSaturday}
                  </p>
                </Card>
              </div>
            </BlurFade>
          )}
        </section>

        {/* Section 2: Problem */}
        <section className="mb-20">
          <BlurFade delay={0.1} inView>
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-acorn">
                  The Problem
                </h2>
                <div className="h-1 flex-1 bg-gradient-to-r from-primary to-transparent rounded-full max-w-xs" />
              </div>
            </div>
          </BlurFade>

          <BlurFade delay={0.2} inView>
            <Card className="p-8 bg-muted border-border mb-8">
              <p className="text-lg text-foreground">
                {project.problem?.statement}
              </p>
            </Card>
          </BlurFade>

          <BlurFade delay={0.3} inView>
            <p className="text-lg text-muted-foreground mb-8">
              I needed something that could work like a real development team: Multiple specialists collaborating in parallel, with a shared memory system that never forgets.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Traditional AI Development */}
              <Card className="p-6 bg-card border-border">
                <div className="flex items-center gap-2 mb-4">
                  <XCircle className="w-5 h-5 text-muted-foreground" />
                  <h4 className="font-semibold text-lg">Traditional AI Development</h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-muted-foreground mt-0.5">•</span>
                    <span className="text-sm text-muted-foreground">Sequential execution (design, then code, then test, then debug)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-muted-foreground mt-0.5">•</span>
                    <span className="text-sm text-muted-foreground">Constant context loss (by hour 3, the AI forgot what we wanted)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-muted-foreground mt-0.5">•</span>
                    <span className="text-sm text-muted-foreground">No quality enforcement (ship broken code, fix later)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-muted-foreground mt-0.5">•</span>
                    <span className="text-sm text-muted-foreground">21 hours per feature on average</span>
                  </li>
                </ul>
              </Card>

              {/* What I Needed */}
              <Card className="p-6 bg-primary/5 border-primary">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold text-lg">What I Needed</h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">Parallel execution (all specialists working simultaneously)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">Context engine (just-in-time context delivery)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">Automated quality gates (100% test coverage enforced)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">Ship in days, not weeks (5 hours per feature)</span>
                  </li>
                </ul>
              </Card>
            </div>
          </BlurFade>

          {project.problem?.goals && (
            <BlurFade delay={0.4} inView>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Goals</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.problem.goals.map((goal, index) => (
                    <Card key={index} className="p-4 border-border">
                      <div className="flex items-start gap-3">
                        <Target className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm">{goal}</span>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </BlurFade>
          )}
        </section>

        {/* Section 3: Discovery */}
        {project.discovery && (
          <section className="mb-20">
            <BlurFade delay={0.1} inView>
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-acorn">
                    Discovery & Journey
                  </h2>
                  <div className="h-1 flex-1 bg-gradient-to-r from-primary to-transparent rounded-full max-w-xs" />
                </div>
                <p className="text-lg text-muted-foreground max-w-4xl">
                  {project.discovery.patternRecognition}
                </p>
              </div>
            </BlurFade>

            <BlurFade delay={0.2} inView>
              <div className="mb-8">
                <p className="text-base text-muted-foreground mb-6">
                  {project.discovery.realWorldValidation}
                </p>
              </div>
            </BlurFade>

            {project.discovery.manualWorkflow && (
              <BlurFade delay={0.3} inView>
                <Card className="p-8 bg-muted border-border mb-8">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {project.discovery.manualWorkflow.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.discovery.manualWorkflow.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {project.discovery.manualWorkflow.steps.map((step, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-foreground text-xs font-semibold flex-shrink-0 mt-0.5">
                          {index + 1}
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-semibold text-foreground">
                        Time per feature:
                      </span>{" "}
                      <span className="text-muted-foreground">
                        {project.discovery.manualWorkflow.timePerFeature}
                      </span>
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">
                        Complexity:
                      </span>{" "}
                      <span className="text-muted-foreground">
                        {project.discovery.manualWorkflow.complexity}
                      </span>
                    </div>
                  </div>
                </Card>
              </BlurFade>
            )}

            <BlurFade delay={0.4} inView>
              <Card className="p-6 bg-primary/5 border-primary/30">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-foreground">
                      Key Insight
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {project.discovery.insight}
                    </p>
                  </div>
                </div>
              </Card>
            </BlurFade>
          </section>
        )}

        {/* Section 4: Users/Personas */}
        {project.personas && project.personas.length > 0 && (
          <section className="mb-20">
            <BlurFade delay={0.1} inView>
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-acorn">
                    Who Uses Forge v1.3?
                  </h2>
                  <div className="h-1 flex-1 bg-gradient-to-r from-primary to-transparent rounded-full max-w-xs" />
                </div>
                <p className="text-lg text-muted-foreground max-w-4xl">
                  {project.overview?.users}
                </p>
              </div>
            </BlurFade>

            <BlurFade delay={0.2} inView>
              <PersonaGrid personas={[...project.personas]} />
            </BlurFade>
          </section>
        )}

        {/* Section 5: Design Process & Solution */}
        {project.designProcess && (
          <section className="mb-20">
            <BlurFade delay={0.1} inView>
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-acorn">
                    Design Process & Solution
                  </h2>
                  <div className="h-1 flex-1 bg-gradient-to-r from-primary to-transparent rounded-full max-w-xs" />
                </div>
              </div>
            </BlurFade>

            {/* Prototype */}
            <BlurFade delay={0.2} inView>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Building Forge v1.3 While Building Product</h3>
                <p className="text-base text-muted-foreground mb-4">
                  {project.designProcess.prototype.approach}
                </p>
                <Card className="p-6 bg-muted border-border">
                  <p className="text-sm text-muted-foreground">
                    {project.designProcess.prototype.features}
                  </p>
                </Card>
              </div>
            </BlurFade>

            {/* Architecture Diagram */}
            <BlurFade delay={0.3} inView>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">9 Specialized Agents, One Coordinated System</h3>
                <p className="text-base text-muted-foreground mb-6">
                  Each agent has specific expertise and context. They work in parallel, enforce quality gates, and ship production-ready code.
                </p>
                <Suspense
                  fallback={
                    <div className="flex items-center justify-center py-12">
                      <div className="text-muted-foreground">Loading architecture diagram...</div>
                    </div>
                  }
                >
                  <AgentArchitectureDiagramSimple />
                </Suspense>
              </div>
            </BlurFade>

            {/* 5-Phase Workflow */}
            {project.features?.workflowPhases && (
              <BlurFade delay={0.4} inView>
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4">From Idea to Production in 5 Phases</h3>
                  <div className="grid gap-4">
                    {project.features.workflowPhases.map((phase, i) => (
                      <Card key={i} className="p-6 border-border">
                        <div className="flex items-start gap-4">
                          <div className="text-3xl">{phase.icon}</div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold text-lg">{phase.title}</h4>
                              <Badge variant="secondary">{phase.duration}</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{phase.desc}</p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </BlurFade>
            )}

            {/* Validation */}
            {project.designProcess.validation && (
              <BlurFade delay={0.5} inView>
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4">Validation Through Real Features</h3>
                  <p className="text-base text-muted-foreground mb-4">
                    {project.designProcess.validation.approach}
                  </p>
                  <Card className="p-6 bg-primary/5 border-primary/30">
                    <p className="text-sm font-semibold text-foreground">
                      {project.designProcess.validation.response}
                    </p>
                  </Card>
                </div>
              </BlurFade>
            )}

            {/* Real Use Cases */}
            {project.features?.useCases && (
              <BlurFade delay={0.6} inView>
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4">Forge v1.3 in Action: Real Features from Second Saturday</h3>
                  <p className="text-base text-muted-foreground mb-6">
                    These aren't hypothetical examples. These are actual features built using FORGE.
                  </p>
                  <div className="grid gap-6">
                    {project.features.useCases.map((useCase, i) => (
                      <Card key={i} className="p-6 border-border">
                        <div className="flex items-start gap-4">
                          <div className="text-4xl">{useCase.icon}</div>
                          <div className="flex-1 space-y-2">
                            <h4 className="text-xl font-semibold">{useCase.title}</h4>
                            <p className="text-sm text-primary font-medium">
                              {useCase.time}
                            </p>
                            <div className="flex gap-2 flex-wrap">
                              <Badge variant="secondary">Complexity: {useCase.complexity}</Badge>
                              <Badge variant="secondary">Agents: {useCase.agents}</Badge>
                            </div>
                            <p className="text-muted-foreground text-sm">{useCase.desc}</p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </BlurFade>
            )}

            {/* Strategic Positioning */}
            {project.designProcess.strategicPositioning && (
              <BlurFade delay={0.7} inView>
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4">Strategic Vision</h3>
                  <div className="space-y-4">
                    <Card className="p-6 bg-card border-border">
                      <h4 className="font-semibold mb-2 text-foreground">
                        The Opportunity
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {project.designProcess.strategicPositioning.opportunity}
                      </p>
                    </Card>
                    <Card className="p-6 bg-card border-border">
                      <h4 className="font-semibold mb-2 text-foreground">
                        The Vision
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {project.designProcess.strategicPositioning.pitch}
                      </p>
                    </Card>
                  </div>
                </div>
              </BlurFade>
            )}

            {/* Philosophy */}
            {project.designProcess.philosophy && (
              <BlurFade delay={0.8} inView>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="philosophy" className="border-border">
                    <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                      The 60% Philosophy & Framework Design
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4 pt-4">
                      <div>
                        <h5 className="font-semibold mb-2">Approach</h5>
                        <p className="text-sm text-muted-foreground">
                          {project.designProcess.philosophy.approach}
                        </p>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-2">Structure</h5>
                        <p className="text-sm text-muted-foreground">
                          {project.designProcess.philosophy.structure}
                        </p>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-2">Evolution</h5>
                        <p className="text-sm text-muted-foreground">
                          {project.designProcess.philosophy.evolution}
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </BlurFade>
            )}
          </section>
        )}

        {/* Section 6: Impact & Results */}
        {project.impact && (
          <section className="mb-20">
            <BlurFade delay={0.1} inView>
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-acorn">
                    Impact & Results
                  </h2>
                  <div className="h-1 flex-1 bg-gradient-to-r from-primary to-transparent rounded-full max-w-xs" />
                </div>
              </div>
            </BlurFade>

            {/* Before/After Comparison */}
            {project.features?.beforeAfter && (
              <BlurFade delay={0.2} inView>
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-6">Transformation in Numbers</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="p-6 space-y-4 bg-card border-border">
                      <h4 className="text-xl font-semibold flex items-center gap-2">
                        <XCircle className="w-5 h-5 text-muted-foreground" />
                        Before Forge v1.3
                      </h4>
                      <div className="space-y-3 text-sm">
                        {project.features.beforeAfter.before.map((item, index) => (
                          <div key={index} className="flex justify-between">
                            <span className="text-muted-foreground">{item.label}</span>
                            <span className="font-medium text-foreground">{item.value}</span>
                          </div>
                        ))}
                      </div>
                    </Card>

                    <Card className="p-6 space-y-4 border-primary bg-primary/5">
                      <h4 className="text-xl font-semibold flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        After Forge v1.3
                      </h4>
                      <div className="space-y-3 text-sm">
                        {project.features.beforeAfter.after.map((item, index) => (
                          <div key={index} className="flex justify-between">
                            <span className="text-muted-foreground">{item.label}</span>
                            <span className="font-medium text-primary">
                              {item.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </div>
                </div>
              </BlurFade>
            )}

            {/* Second Saturday Stats */}
            {project.features?.secondSaturdayStats && (
              <BlurFade delay={0.3} inView>
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-6">Second Saturday by the Numbers</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {project.features.secondSaturdayStats.map((stat, index) => (
                      <Card key={index} className="p-4 text-center border-border bg-card">
                        <div className="text-xl md:text-2xl font-bold text-primary">
                          {stat.value}
                        </div>
                        <div className="text-xs md:text-sm text-muted-foreground mt-1">
                          {stat.label}
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </BlurFade>
            )}

            {/* Quantified Impact */}
            {project.impact.quantified && (
              <BlurFade delay={0.4} inView>
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-6">Quantified Impact</h3>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <Card className="p-6 bg-card border-border">
                      <h4 className="font-semibold mb-3 text-foreground">
                        Time Savings
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Before:</span>
                          <span className="font-medium text-foreground">
                            {project.impact.quantified.timeSavings.before}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">After:</span>
                          <span className="font-medium text-foreground">
                            {project.impact.quantified.timeSavings.after}
                          </span>
                        </div>
                        <div className="flex justify-between pt-2 border-t border-border">
                          <span className="text-muted-foreground font-semibold">
                            Savings:
                          </span>
                          <span className="font-bold text-primary">
                            {project.impact.quantified.timeSavings.savings}
                          </span>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-6 bg-card border-border">
                      <h4 className="font-semibold mb-3 text-foreground">
                        Scale Impact
                      </h4>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p>
                          <span className="font-semibold text-foreground">Before:</span>{" "}
                          {project.impact.quantified.scale.featuresBefore}
                        </p>
                        <p>
                          <span className="font-semibold text-foreground">After:</span>{" "}
                          {project.impact.quantified.scale.featuresAfter}
                        </p>
                        <p className="pt-2 border-t border-border">
                          <span className="font-bold text-primary">
                            {project.impact.quantified.scale.productivityMultiplier}
                          </span>
                        </p>
                      </div>
                    </Card>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold">Additional Benefits</h4>
                    {project.impact.quantified.additionalBenefits.map((benefit, index) => (
                      <Card key={index} className="p-4 border-border">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </BlurFade>
            )}

            {/* User Feedback */}
            {project.impact.qualitative?.userFeedback && (
              <BlurFade delay={0.5} inView>
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-6">What Users Say</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {project.impact.qualitative.userFeedback.map((feedback, index) => (
                      <Card
                        key={index}
                        className="p-6 bg-card border-border"
                      >
                        <p className="text-sm italic text-foreground mb-3">
                          "{feedback.quote}"
                        </p>
                        <p className="text-xs text-muted-foreground font-medium">
                          — {feedback.persona}
                        </p>
                      </Card>
                    ))}
                  </div>
                </div>
              </BlurFade>
            )}

            {/* Recognition */}
            {project.impact.qualitative && (
              <BlurFade delay={0.6} inView>
                <Card className="p-6 bg-primary/5 border-primary/30">
                  <div className="flex items-start gap-3">
                    <Award className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-foreground">
                        Recognition
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {project.impact.qualitative.recognition}
                      </p>
                    </div>
                  </div>
                </Card>
              </BlurFade>
            )}
          </section>
        )}

        {/* Section 7: Reflection */}
        {project.reflection && (
          <section className="mb-20">
            <BlurFade delay={0.1} inView>
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-acorn">
                    Reflection
                  </h2>
                  <div className="h-1 flex-1 bg-gradient-to-r from-primary to-transparent rounded-full max-w-xs" />
                </div>
              </div>
            </BlurFade>

            <div className="grid md:grid-cols-2 gap-8">
              {/* What Worked Well */}
              <BlurFade delay={0.2} inView>
                <div>
                  <h3 className="text-2xl font-semibold mb-6">
                    What Worked Well
                  </h3>
                  <div className="space-y-4">
                    {project.reflection.successful.map((item, index) => (
                      <Card
                        key={index}
                        className="p-5 bg-card border-border"
                      >
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-foreground">{item}</p>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </BlurFade>

              {/* What to Do Differently */}
              <BlurFade delay={0.3} inView>
                <div>
                  <h3 className="text-2xl font-semibold mb-6">
                    What I'd Do Differently
                  </h3>
                  <div className="space-y-4">
                    {project.reflection.doingDifferently.map((item, index) => (
                      <Card
                        key={index}
                        className="p-5 bg-card border-border"
                      >
                        <div className="flex items-start gap-3">
                          <TrendingUp className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-foreground">{item}</p>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </BlurFade>
            </div>
          </section>
        )}

        {/* Section 8: Skills Demonstrated */}
        {project.skillsDemonstrated && (
          <section className="mb-20">
            <BlurFade delay={0.1} inView>
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-acorn">
                    Skills Demonstrated
                  </h2>
                  <div className="h-1 flex-1 bg-gradient-to-r from-neutral-500 to-transparent rounded-full max-w-xs" />
                </div>
              </div>
            </BlurFade>

            <BlurFade delay={0.2} inView>
              <div className="grid md:grid-cols-2 gap-6">
                {project.skillsDemonstrated.map((skill, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{skill.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                        <p className="text-sm text-muted-foreground">{skill.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </BlurFade>
          </section>
        )}

        {/* CTA Section */}
        <section className="pb-12">
          <BlurFade delay={0.1} inView>
            <h2 className="text-3xl font-bold tracking-tight font-acorn text-center mb-8">
              Want to Learn More?
            </h2>
          </BlurFade>

          <BlurFade delay={0.2} inView>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Link href="/">
                <Card className="p-6 hover:shadow-lg transition-shadow h-full cursor-pointer border-border">
                  <div className="flex items-center gap-4">
                    <TrendingUp className="w-8 h-8 text-primary" />
                    <div>
                      <h3 className="font-semibold">Back to Portfolio</h3>
                      <p className="text-sm text-muted-foreground">
                        See more case studies and projects
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>

              <Link href="mailto:kalyanvenkatesh.cha@gmail.com">
                <Card className="p-6 hover:shadow-lg transition-shadow h-full cursor-pointer border-border">
                  <div className="flex items-center gap-4">
                    <Sparkles className="w-8 h-8 text-primary" />
                    <div>
                      <h3 className="font-semibold">Let's Talk</h3>
                      <p className="text-sm text-muted-foreground">
                        Discuss FORGE or AI-native product development
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>
            </div>
          </BlurFade>
        </section>
      </div>
    </>
  );
}
