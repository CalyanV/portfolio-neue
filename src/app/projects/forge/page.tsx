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
import { MetricsGrid } from "@/components/metrics-grid";

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
        className="fixed inset-0 text-neutral-300 dark:text-neutral-700 opacity-50 -z-10"
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

        {/* Section 1: Overview - Teal Theme */}
        <section className="mb-20">
          <BlurFade delay={0.1} inView>
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-acorn">
                  Overview
                </h2>
                <div className="h-1 flex-1 bg-gradient-to-r from-teal-500 to-transparent rounded-full max-w-xs" />
              </div>
              <p className="text-lg text-muted-foreground max-w-4xl">
                {project.overview?.intro}
              </p>
            </div>
          </BlurFade>

          <BlurFade delay={0.2} inView>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">What I Built</h3>
              {project.metrics?.overall && (
                <MetricsGrid metrics={[...project.metrics.overall]} columns={2} />
              )}
            </div>
          </BlurFade>

          {project.context && (
            <BlurFade delay={0.3} inView>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-950 dark:to-teal-900 border-teal-200 dark:border-teal-800">
                  <h4 className="font-semibold text-lg mb-3 text-teal-900 dark:text-teal-100">
                    What is AI-Native Development?
                  </h4>
                  <p className="text-sm text-teal-800 dark:text-teal-200">
                    {project.context.aiNativeDevelopment}
                  </p>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-950 dark:to-teal-900 border-teal-200 dark:border-teal-800">
                  <h4 className="font-semibold text-lg mb-3 text-teal-900 dark:text-teal-100">
                    What is Second Saturday?
                  </h4>
                  <p className="text-sm text-teal-800 dark:text-teal-200">
                    {project.context.secondSaturday}
                  </p>
                </Card>
              </div>
            </BlurFade>
          )}
        </section>

        {/* Section 2: Problem - Red Theme */}
        <section className="mb-20">
          <BlurFade delay={0.1} inView>
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-acorn text-red-600 dark:text-red-400">
                  The Problem
                </h2>
                <div className="h-1 flex-1 bg-gradient-to-r from-red-500 to-transparent rounded-full max-w-xs" />
              </div>
            </div>
          </BlurFade>

          <BlurFade delay={0.2} inView>
            <Card className="p-8 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/50 dark:to-red-900/50 border-red-200 dark:border-red-800 mb-8">
              <p className="text-lg text-red-900 dark:text-red-100">
                {project.problem?.statement}
              </p>
            </Card>
          </BlurFade>

          <BlurFade delay={0.3} inView>
            <div className="prose dark:prose-invert max-w-none mb-8">
              <p className="text-base whitespace-pre-line">{project.problem?.story}</p>
            </div>
          </BlurFade>

          {project.problem?.goals && (
            <BlurFade delay={0.4} inView>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Goals</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.problem.goals.map((goal, index) => (
                    <Card key={index} className="p-4 border-red-200 dark:border-red-800">
                      <div className="flex items-start gap-3">
                        <Target className="w-5 h-5 text-red-600 dark:text-red-400 mt-1 flex-shrink-0" />
                        <span className="text-sm">{goal}</span>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </BlurFade>
          )}
        </section>

        {/* Section 3: Discovery - Purple Theme */}
        {project.discovery && (
          <section className="mb-20">
            <BlurFade delay={0.1} inView>
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-acorn text-purple-600 dark:text-purple-400">
                    Discovery & Journey
                  </h2>
                  <div className="h-1 flex-1 bg-gradient-to-r from-purple-500 to-transparent rounded-full max-w-xs" />
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
                <Card className="p-8 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/50 dark:to-purple-900/50 border-purple-200 dark:border-purple-800 mb-8">
                  <h3 className="text-xl font-semibold mb-3 text-purple-900 dark:text-purple-100">
                    {project.discovery.manualWorkflow.title}
                  </h3>
                  <p className="text-sm text-purple-800 dark:text-purple-200 mb-4">
                    {project.discovery.manualWorkflow.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {project.discovery.manualWorkflow.steps.map((step, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-purple-200 dark:bg-purple-800 text-purple-900 dark:text-purple-100 text-xs font-semibold flex-shrink-0 mt-0.5">
                          {index + 1}
                        </div>
                        <span className="text-sm text-purple-800 dark:text-purple-200">
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-semibold text-purple-900 dark:text-purple-100">
                        Time per feature:
                      </span>{" "}
                      <span className="text-purple-800 dark:text-purple-200">
                        {project.discovery.manualWorkflow.timePerFeature}
                      </span>
                    </div>
                    <div>
                      <span className="font-semibold text-purple-900 dark:text-purple-100">
                        Complexity:
                      </span>{" "}
                      <span className="text-purple-800 dark:text-purple-200">
                        {project.discovery.manualWorkflow.complexity}
                      </span>
                    </div>
                  </div>
                </Card>
              </BlurFade>
            )}

            <BlurFade delay={0.4} inView>
              <Card className="p-6 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 border-purple-300 dark:border-purple-700">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-purple-900 dark:text-purple-100">
                      Key Insight
                    </h4>
                    <p className="text-sm text-purple-800 dark:text-purple-200">
                      {project.discovery.insight}
                    </p>
                  </div>
                </div>
              </Card>
            </BlurFade>
          </section>
        )}

        {/* Section 4: Users/Personas - Blue Theme */}
        {project.personas && project.personas.length > 0 && (
          <section className="mb-20">
            <BlurFade delay={0.1} inView>
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-acorn text-blue-600 dark:text-blue-400">
                    Who Uses FORGE?
                  </h2>
                  <div className="h-1 flex-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full max-w-xs" />
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

        {/* Section 5: Design Process & Solution - Green Theme */}
        {project.designProcess && (
          <section className="mb-20">
            <BlurFade delay={0.1} inView>
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-acorn text-green-600 dark:text-green-400">
                    Design Process & Solution
                  </h2>
                  <div className="h-1 flex-1 bg-gradient-to-r from-green-500 to-transparent rounded-full max-w-xs" />
                </div>
              </div>
            </BlurFade>

            {/* Prototype */}
            <BlurFade delay={0.2} inView>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Building FORGE While Building Product</h3>
                <p className="text-base text-muted-foreground mb-4">
                  {project.designProcess.prototype.approach}
                </p>
                <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/50 dark:to-green-900/50 border-green-200 dark:border-green-800">
                  <p className="text-sm text-green-800 dark:text-green-200">
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
                      <Card key={i} className="p-6 border-green-200 dark:border-green-800">
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
                  <Card className="p-6 bg-gradient-to-r from-green-100 to-teal-100 dark:from-green-900/30 dark:to-teal-900/30 border-green-300 dark:border-green-700">
                    <p className="text-sm font-semibold text-green-900 dark:text-green-100">
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
                  <h3 className="text-2xl font-semibold mb-4">FORGE in Action: Real Features from Second Saturday</h3>
                  <p className="text-base text-muted-foreground mb-6">
                    These aren't hypothetical examples. These are actual features built using FORGE.
                  </p>
                  <div className="grid gap-6">
                    {project.features.useCases.map((useCase, i) => (
                      <Card key={i} className="p-6 border-green-200 dark:border-green-800">
                        <div className="flex items-start gap-4">
                          <div className="text-4xl">{useCase.icon}</div>
                          <div className="flex-1 space-y-2">
                            <h4 className="text-xl font-semibold">{useCase.title}</h4>
                            <p className="text-sm text-green-600 dark:text-green-400 font-medium">
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
                    <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/50 dark:to-green-900/50 border-green-200 dark:border-green-800">
                      <h4 className="font-semibold mb-2 text-green-900 dark:text-green-100">
                        The Opportunity
                      </h4>
                      <p className="text-sm text-green-800 dark:text-green-200">
                        {project.designProcess.strategicPositioning.opportunity}
                      </p>
                    </Card>
                    <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/50 dark:to-green-900/50 border-green-200 dark:border-green-800">
                      <h4 className="font-semibold mb-2 text-green-900 dark:text-green-100">
                        The Vision
                      </h4>
                      <p className="text-sm text-green-800 dark:text-green-200">
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
                  <AccordionItem value="philosophy" className="border-green-200 dark:border-green-800">
                    <AccordionTrigger className="text-lg font-semibold hover:text-green-600 dark:hover:text-green-400">
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

        {/* Section 6: Impact & Results - Teal Theme */}
        {project.impact && (
          <section className="mb-20">
            <BlurFade delay={0.1} inView>
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-acorn text-teal-600 dark:text-teal-400">
                    Impact & Results
                  </h2>
                  <div className="h-1 flex-1 bg-gradient-to-r from-teal-500 to-transparent rounded-full max-w-xs" />
                </div>
              </div>
            </BlurFade>

            {/* Before/After Comparison */}
            {project.features?.beforeAfter && (
              <BlurFade delay={0.2} inView>
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-6">Transformation in Numbers</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="p-6 space-y-4">
                      <h4 className="text-xl font-semibold flex items-center gap-2">
                        <XCircle className="w-5 h-5 text-red-500" />
                        Before FORGE
                      </h4>
                      <div className="space-y-3 text-sm">
                        {project.features.beforeAfter.before.map((item, index) => (
                          <div key={index} className="flex justify-between">
                            <span className="text-muted-foreground">{item.label}</span>
                            <span className="font-medium">{item.value}</span>
                          </div>
                        ))}
                      </div>
                    </Card>

                    <Card className="p-6 space-y-4 border-teal-600/50 bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-950/50 dark:to-teal-900/50">
                      <h4 className="text-xl font-semibold flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                        After FORGE
                      </h4>
                      <div className="space-y-3 text-sm">
                        {project.features.beforeAfter.after.map((item, index) => (
                          <div key={index} className="flex justify-between">
                            <span className="text-muted-foreground">{item.label}</span>
                            <span className="font-medium text-teal-600 dark:text-teal-400">
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
                      <Card key={index} className="p-4 text-center border-teal-200 dark:border-teal-800">
                        <div className="text-xl md:text-2xl font-bold text-teal-600 dark:text-teal-400">
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
                    <Card className="p-6 bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-950/50 dark:to-teal-900/50 border-teal-200 dark:border-teal-800">
                      <h4 className="font-semibold mb-3 text-teal-900 dark:text-teal-100">
                        Time Savings
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-teal-800 dark:text-teal-200">Before:</span>
                          <span className="font-medium text-teal-900 dark:text-teal-100">
                            {project.impact.quantified.timeSavings.before}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-teal-800 dark:text-teal-200">After:</span>
                          <span className="font-medium text-teal-900 dark:text-teal-100">
                            {project.impact.quantified.timeSavings.after}
                          </span>
                        </div>
                        <div className="flex justify-between pt-2 border-t border-teal-300 dark:border-teal-700">
                          <span className="text-teal-800 dark:text-teal-200 font-semibold">
                            Savings:
                          </span>
                          <span className="font-bold text-teal-600 dark:text-teal-400">
                            {project.impact.quantified.timeSavings.savings}
                          </span>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-6 bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-950/50 dark:to-teal-900/50 border-teal-200 dark:border-teal-800">
                      <h4 className="font-semibold mb-3 text-teal-900 dark:text-teal-100">
                        Scale Impact
                      </h4>
                      <div className="space-y-2 text-sm text-teal-800 dark:text-teal-200">
                        <p>
                          <span className="font-semibold">Before:</span>{" "}
                          {project.impact.quantified.scale.featuresBefore}
                        </p>
                        <p>
                          <span className="font-semibold">After:</span>{" "}
                          {project.impact.quantified.scale.featuresAfter}
                        </p>
                        <p className="pt-2 border-t border-teal-300 dark:border-teal-700">
                          <span className="font-bold text-teal-600 dark:text-teal-400">
                            {project.impact.quantified.scale.productivityMultiplier}
                          </span>
                        </p>
                      </div>
                    </Card>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold">Additional Benefits</h4>
                    {project.impact.quantified.additionalBenefits.map((benefit, index) => (
                      <Card key={index} className="p-4 border-teal-200 dark:border-teal-800">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
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
                        className="p-6 bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-950/50 dark:to-teal-900/50 border-teal-200 dark:border-teal-800"
                      >
                        <p className="text-sm italic text-teal-900 dark:text-teal-100 mb-3">
                          "{feedback.quote}"
                        </p>
                        <p className="text-xs text-teal-700 dark:text-teal-300 font-medium">
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
                <Card className="p-6 bg-gradient-to-r from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-900/30 border-teal-300 dark:border-teal-700">
                  <div className="flex items-start gap-3">
                    <Award className="w-6 h-6 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-teal-900 dark:text-teal-100">
                        Recognition
                      </h4>
                      <p className="text-sm text-teal-800 dark:text-teal-200">
                        {project.impact.qualitative.recognition}
                      </p>
                    </div>
                  </div>
                </Card>
              </BlurFade>
            )}
          </section>
        )}

        {/* Section 7: Reflection - Amber Theme */}
        {project.reflection && (
          <section className="mb-20">
            <BlurFade delay={0.1} inView>
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-acorn text-amber-600 dark:text-amber-400">
                    Reflection
                  </h2>
                  <div className="h-1 flex-1 bg-gradient-to-r from-amber-500 to-transparent rounded-full max-w-xs" />
                </div>
              </div>
            </BlurFade>

            <div className="grid md:grid-cols-2 gap-8">
              {/* What Worked Well */}
              <BlurFade delay={0.2} inView>
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-green-600 dark:text-green-400">
                    What Worked Well
                  </h3>
                  <div className="space-y-4">
                    {project.reflection.successful.map((item, index) => (
                      <Card
                        key={index}
                        className="p-5 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/50 dark:to-green-900/50 border-green-200 dark:border-green-800"
                      >
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-green-900 dark:text-green-100">{item}</p>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </BlurFade>

              {/* What to Do Differently */}
              <BlurFade delay={0.3} inView>
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-amber-600 dark:text-amber-400">
                    What I'd Do Differently
                  </h3>
                  <div className="space-y-4">
                    {project.reflection.doingDifferently.map((item, index) => (
                      <Card
                        key={index}
                        className="p-5 bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950/50 dark:to-amber-900/50 border-amber-200 dark:border-amber-800"
                      >
                        <div className="flex items-start gap-3">
                          <TrendingUp className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-amber-900 dark:text-amber-100">{item}</p>
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
                <Card className="p-6 hover:shadow-lg transition-shadow h-full cursor-pointer">
                  <div className="flex items-center gap-4">
                    <TrendingUp className="w-8 h-8 text-teal-600 dark:text-teal-400" />
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
                <Card className="p-6 hover:shadow-lg transition-shadow h-full cursor-pointer">
                  <div className="flex items-center gap-4">
                    <Sparkles className="w-8 h-8 text-teal-600 dark:text-teal-400" />
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
