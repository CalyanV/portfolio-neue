import { DATA } from "@/data/resume";
import { ProjectHero } from "@/components/project-hero";
import { ProjectTabs } from "@/components/project-tabs";
import { MetricsGrid } from "@/components/metrics-grid";
import { WorkflowDiagram } from "@/components/workflow-diagram";
import { AccordionSection } from "@/components/accordion-section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import BlurFade from "@/components/magicui/blur-fade";
import {
  Sparkles,
  Rocket,
  Target,
  Users,
  CheckCircle2,
  XCircle,
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

const LimitationsGrid = lazy(() =>
  import("@/components/forge/limitations-grid").then((mod) => ({
    default: mod.LimitationsGrid,
  }))
);

import { DEFAULT_LIMITATIONS } from "@/components/forge/limitations-grid";


// Find FORGE project data
const project = DATA.projects.find((p) => p.href === "/projects/forge");

// Extract inline data arrays to constants
const WORKFLOW_PHASES = [
  { icon: "📋", title: "Planning", duration: "~2h", desc: "Brainstorm, decompose into stories, define API contracts, create Linear issues" },
  { icon: "⚡", title: "Parallel Execution", duration: "3-6h", desc: "Multiple agents work simultaneously with TDD enforced and API contracts aligned" },
  { icon: "🔗", title: "Integration", duration: "30-60m", desc: "Code review, UX review, security scan, E2E tests, visual regression checks" },
  { icon: "🚀", title: "Deployment", duration: "15-30m", desc: "Staging deployment → smoke tests → production with automated rollback" },
  { icon: "🔄", title: "Iterate", duration: "Continuous", desc: "Ship 60%, collect feedback, refine based on real usage patterns" },
];

const USE_CASES = [
  {
    icon: "📧",
    title: "Monthly Newsletter Generation",
    time: "5h vs 21h traditional (76% faster)",
    complexity: "High",
    agents: 6,
    desc: "Built automated newsletter system with cron, Resend API, email templates, and archive view.",
  },
  {
    icon: "👥",
    title: "Group Invitation System",
    time: "3.5h",
    complexity: "Medium",
    agents: 5,
    desc: "Secure token generation, magic links, email delivery, and invitation state management.",
  },
  {
    icon: "📸",
    title: "Photo Upload with Cloudinary",
    time: "2h",
    complexity: "Low",
    agents: 3,
    desc: "Cloudinary integration with drag-and-drop upload, image optimization, and full testing.",
  },
];

const SECOND_SATURDAY_STATS = [
  { value: "75 hours", label: "Built over 45 days" },
  { value: "24,400", label: "Lines of code" },
  { value: "350", label: "Lines per hour" },
  { value: "460/460", label: "Tests passing" },
  { value: "100%", label: "Test coverage" },
  { value: "WCAG 2.1 AA", label: "Compliant" },
  { value: "Zero", label: "Vulnerabilities" },
  { value: "6x faster", label: "Than traditional" },
];

const AGENT_CARDS = [
  {
    icon: "🧭",
    title: "Main Session",
    subtitle: "Coordinator/Planner",
    description: "Orchestrates all specialized agents, maintains context, ensures alignment.",
    tools: "Linear MCP, GitHub MCP",
    colSpan: "col-span-1 md:col-span-2",
    rowSpan: "row-span-2",
    gradient: "from-primary/5 to-primary/10 border-primary/20",
  },
  {
    icon: "📋",
    title: "Strategic Planner",
    subtitle: "Feature Planning & Design",
    gradient: "from-orange-500/5 to-orange-500/10",
  },
  {
    icon: "🎨",
    title: "Frontend Agent",
    subtitle: "Pixel-Perfect UI Development",
    gradient: "from-green-500/5 to-green-500/10",
  },
  {
    icon: "🎯",
    title: "Orchestrator",
    subtitle: "Multi-Agent Coordination",
    colSpan: "col-span-1 md:col-span-2",
    gradient: "from-purple-500/5 to-purple-500/10",
  },
  {
    icon: "⚙️",
    title: "Backend Agent",
    subtitle: "Type-Safe Server Logic",
    gradient: "from-blue-500/5 to-blue-500/10",
  },
  {
    icon: "♿",
    title: "UX Reviewer",
    subtitle: "Accessibility & Design",
    gradient: "from-cyan-500/5 to-cyan-500/10",
  },
  {
    icon: "🔒",
    title: "Security Specialist",
    subtitle: "Vulnerability Detection",
    gradient: "from-amber-500/5 to-amber-500/10",
  },
  {
    icon: "🔍",
    title: "Code Reviewer",
    subtitle: "Quality & Standards",
    gradient: "from-emerald-500/5 to-emerald-500/10",
  },
  {
    icon: "🚀",
    title: "Deployment Agent",
    subtitle: "Automated CI/CD Pipeline",
    colSpan: "col-span-1 md:col-span-3",
    gradient: "from-indigo-500/5 to-indigo-500/10",
  },
];

const BEFORE_AFTER_COMPARISON = {
  before: [
    { label: "Features/Month", value: "2" },
    { label: "Test Coverage", value: "~40%" },
    { label: "Deployment Time", value: "2-3 days" },
    { label: "Bugs in Production", value: "Weekly" },
    { label: "Role", value: "Designer Only" },
    { label: "Feedback Loop", value: "Weeks" },
  ],
  after: [
    { label: "Features/Month", value: "8-10" },
    { label: "Test Coverage", value: "100%" },
    { label: "Deployment Time", value: "30 minutes" },
    { label: "Bugs in Production", value: "Rare" },
    { label: "Role", value: "Product Engineer" },
    { label: "Feedback Loop", value: "Days" },
  ],
};

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
        {/* Hero Section */}
        <ProjectHero
        title={project.title}
        subtitle={project.subtitle || ""}
        tags={[...project.technologies]}
        splineUrl={project.splineUrl}
      />

      {/* Project Tabs */}
      <div className="mb-16">
        <ProjectTabs
          tabs={[
            {
              id: "overview",
              label: "Overview",
              content: (
                <div className="space-y-8">

                  {/* Quick Stats */}
                  <BlurFade delay={0.1} inView>
                    <div className="space-y-4">
                      <h2 className="text-3xl font-bold tracking-tight font-acorn">
                        Overview
                      </h2>
                      <p className="text-lg text-muted-foreground max-w-3xl">
                        {project.overview?.intro}
                      </p>
                    </div>
                  </BlurFade>

                  <BlurFade delay={0.2} inView>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Timeline</p>
                        <p className="text-base font-medium">{project.overview?.timeline}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Platform</p>
                        <p className="text-base font-medium">{project.overview?.platform}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Role</p>
                        <p className="text-base font-medium">{project.overview?.role}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Team</p>
                        <p className="text-base font-medium">{project.overview?.team}</p>
                      </div>
                    </div>
                  </BlurFade>

                  {/* Impact Metrics */}
                  <BlurFade delay={0.3} inView>
                    <div className="space-y-4">
                      <h2 className="text-3xl font-bold tracking-tight font-acorn">
                        Impact
                      </h2>
                      {project.metrics?.impact && (
                        <MetricsGrid metrics={[...project.metrics.impact]} columns={2} />
                      )}
                    </div>
                  </BlurFade>

                  {/* Overall Metrics */}
                  {project.metrics?.overall && (
                    <BlurFade delay={0.4} inView>
                      <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tight font-acorn">
                          What I Built
                        </h2>
                        <MetricsGrid metrics={[...project.metrics.overall]} columns={2} />
                      </div>
                    </BlurFade>
                  )}

                  {/* Problem Section */}
                  <BlurFade delay={0.5} inView>
                    <div className="space-y-6">
                      <h2 className="text-3xl font-bold tracking-tight font-acorn">
                        The Problem I Needed to Solve
                      </h2>

                      <p className="text-lg text-muted-foreground max-w-3xl">
                        {project.problem?.statement}
                      </p>

                      <div className="prose dark:prose-invert max-w-none">
                        <p className="text-base whitespace-pre-line">{project.problem?.story}</p>
                      </div>

                      {project.problem?.goals && (
                        <div className="space-y-4">
                          <h3 className="text-xl font-semibold">Goals</h3>
                          <ul className="space-y-2">
                            {project.problem.goals.map((goal, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <Target className="w-5 h-5 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                                <span>{goal}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </BlurFade>

                  {/* Solution Workflow */}
                  {project.solution?.automation && (
                    <BlurFade delay={0.6} inView>
                      <div className="space-y-6">
                        <h2 className="text-3xl font-bold tracking-tight font-acorn">
                          The Solution
                        </h2>

                        <WorkflowDiagram
                          before={{
                            title: "❌ Traditional Sequential Development",
                            steps: [...project.solution.automation.before],
                          }}
                          after={{
                            title: "✅ What I Built Instead",
                            steps: [...project.solution.automation.after],
                          }}
                        />

                        <p className="text-base text-muted-foreground mt-8">
                          {project.solution.automation.summary}
                        </p>
                      </div>
                    </BlurFade>
                  )}

                </div>
              ),
            },
            {
              id: "architecture",
              label: "Architecture",
              content: (
                <div className="space-y-8">
                  {/* Architecture Overview */}
                  <BlurFade delay={0.1} inView>
                    <div className="space-y-4">
                      <h2 className="text-3xl font-bold tracking-tight font-acorn">
                        9 Specialized Agents, One Coordinated System
                      </h2>

                      <p className="text-lg text-muted-foreground max-w-3xl">
                        Each agent has specific expertise and context. They work in parallel, enforce quality gates, and ship production-ready code. Hover over any agent to learn more.
                      </p>
                    </div>
                  </BlurFade>

                  <BlurFade delay={0.2} inView>
                    <Suspense
                      fallback={
                        <div className="flex items-center justify-center py-12">
                          <div className="text-muted-foreground">Loading architecture diagram...</div>
                        </div>
                      }
                    >
                      <AgentArchitectureDiagramSimple />
                    </Suspense>
                  </BlurFade>

                  {/* 5-Phase Workflow */}
                  <BlurFade delay={0.3} inView>
                    <div className="space-y-6">
                      <h2 className="text-3xl font-bold tracking-tight font-acorn">
                        From Idea to Production in 5 Phases
                      </h2>

                      <p className="text-lg text-muted-foreground max-w-3xl">
                        FORGE orchestrates your entire development workflow, from planning to deployment, with quality enforced at every step.
                      </p>

                      <div className="grid gap-4">
                        {WORKFLOW_PHASES.map((phase, i) => (
                          <Card key={i} className="p-6">
                            <div className="flex items-start gap-4">
                              <div className="text-3xl">{phase.icon}</div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                  <h3 className="font-semibold text-lg">{phase.title}</h3>
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

                  {/* Agent Deep Dives - Accordion */}
                  <BlurFade delay={0.4} inView>
                    <div className="space-y-4">
                      <h2 className="text-3xl font-bold tracking-tight font-acorn">
                        Meet the 9 Specialized Agents
                      </h2>

                      <p className="text-lg text-muted-foreground max-w-3xl">
                        Each agent has specific expertise, tools, and context. Expand to see exactly how each agent works.
                      </p>

                      <AccordionSection
                        items={[
                          {
                            title: "View All 9 Specialized Agents",
                            content: (
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[160px] mt-4">
                                {AGENT_CARDS.map((agent, index) => (
                                  <Card
                                    key={index}
                                    className={`${agent.colSpan || "col-span-1"} ${
                                      agent.rowSpan || "row-span-1"
                                    } p-6 bg-gradient-to-br ${agent.gradient}`}
                                  >
                                    <div className="flex flex-col gap-3 h-full">
                                      <div className={agent.rowSpan ? "text-5xl" : "text-4xl"}>
                                        {agent.icon}
                                      </div>
                                      <div className="flex-1">
                                        <h3
                                          className={
                                            agent.rowSpan ? "text-xl font-bold mb-2" : "text-base font-semibold"
                                          }
                                        >
                                          {agent.title}
                                        </h3>
                                        <p
                                          className={
                                            agent.rowSpan
                                              ? "text-base text-muted-foreground mb-2"
                                              : "text-xs text-muted-foreground mt-1"
                                          }
                                        >
                                          {agent.subtitle}
                                        </p>
                                        {agent.description && (
                                          <p className="text-sm text-muted-foreground">{agent.description}</p>
                                        )}
                                        {agent.tools && (
                                          <p className="text-xs text-muted-foreground/60 mt-2">{agent.tools}</p>
                                        )}
                                      </div>
                                    </div>
                                  </Card>
                                ))}
                              </div>
                            ),
                          },
                        ]}
                      />
                    </div>
                  </BlurFade>

                  {/* Use Cases */}
                  <BlurFade delay={0.5} inView>
                    <div className="space-y-6">
                      <h2 className="text-3xl font-bold tracking-tight font-acorn">
                        FORGE in Action: Real Features from Second Saturday
                      </h2>

                      <p className="text-lg text-muted-foreground max-w-3xl">
                        These aren't hypothetical examples. These are actual features I built using FORGE, showing exactly how the framework handles real product development.
                      </p>

                      <div className="grid gap-6">
                        {USE_CASES.map((use, i) => (
                          <Card key={i} className="p-6">
                            <div className="flex items-start gap-4">
                              <div className="text-4xl">{use.icon}</div>
                              <div className="flex-1 space-y-2">
                                <h3 className="text-xl font-semibold">{use.title}</h3>
                                <p className="text-sm text-teal-600 dark:text-teal-400 font-medium">{use.time}</p>
                                <div className="flex gap-2 flex-wrap">
                                  <Badge variant="secondary">Complexity: {use.complexity}</Badge>
                                  <Badge variant="secondary">Agents: {use.agents}</Badge>
                                </div>
                                <p className="text-muted-foreground text-sm">{use.desc}</p>
                              </div>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </BlurFade>
                </div>
              ),
            },
            {
              id: "results",
              label: "Results & Impact",
              content: (
                <div className="space-y-8">

                  {/* Impact & Metrics Section */}
                  <BlurFade delay={0.1} inView>
                    <div className="space-y-4">
                      <h2 className="text-3xl font-bold tracking-tight font-acorn">
                        The Results: Building Second Saturday
                      </h2>

                      <p className="text-lg text-muted-foreground max-w-3xl">
                        Numbers don't lie. Here's the actual impact of building with FORGE compared to traditional development approaches.
                      </p>
                    </div>
                  </BlurFade>

                  {/* Before/After Grid */}
                  <BlurFade delay={0.2} inView>
                    <div className="grid md:grid-cols-2 gap-6">
                      <Card className="p-6 space-y-4">
                        <h3 className="text-xl font-semibold flex items-center gap-2">
                          <XCircle className="w-5 h-5 text-red-500" />
                          Before FORGE
                        </h3>
                        <div className="space-y-3 text-sm">
                          {BEFORE_AFTER_COMPARISON.before.map((item, index) => (
                            <div key={index} className="flex justify-between">
                              <span className="text-muted-foreground">{item.label}</span>
                              <span className="font-medium">{item.value}</span>
                            </div>
                          ))}
                        </div>
                      </Card>

                      <Card className="p-6 space-y-4 border-teal-600/50">
                        <h3 className="text-xl font-semibold flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                          After FORGE
                        </h3>
                        <div className="space-y-3 text-sm">
                          {BEFORE_AFTER_COMPARISON.after.map((item, index) => (
                            <div key={index} className="flex justify-between">
                              <span className="text-muted-foreground">{item.label}</span>
                              <span className="font-medium text-teal-600 dark:text-teal-400">{item.value}</span>
                            </div>
                          ))}
                        </div>
                      </Card>
                    </div>
                  </BlurFade>

                  {/* Second Saturday Stats */}
                  <BlurFade delay={0.3} inView>
                    <div className="space-y-6">
                      <h3 className="text-2xl font-semibold">Second Saturday by the Numbers</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {SECOND_SATURDAY_STATS.map((stat, index) => (
                          <Card key={index} className="p-4 text-center">
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

                  {/* Building FORGE */}
                  {project.solution?.adoption && (
                    <BlurFade delay={0.4} inView>
                      <div className="space-y-6">
                        <h2 className="text-3xl font-bold tracking-tight font-acorn">
                          Building FORGE
                        </h2>

                        <p className="text-base whitespace-pre-line">{project.solution.adoption.description}</p>

                        {project.solution.adoption.metrics && (
                          <div className="grid md:grid-cols-2 gap-6">
                            {project.solution.adoption.metrics.map((metric, index) => (
                              <Card key={index} className="p-6 text-center">
                                <div className="text-3xl font-bold text-teal-600 dark:text-teal-400">
                                  {metric.value}
                                </div>
                                <div className="text-sm text-muted-foreground mt-2">
                                  {metric.label}
                                </div>
                              </Card>
                            ))}
                          </div>
                        )}
                      </div>
                    </BlurFade>
                  )}
                </div>
              ),
            },
            {
              id: "learnings",
              label: "Learnings & Future",
              content: (
                <div className="space-y-8">

                  {/* Limitations & Future */}
                  <BlurFade delay={0.1} inView>
                    <div className="space-y-6">
                      <h2 className="text-3xl font-bold tracking-tight font-acorn">
                        Being Honest: What FORGE Does Well (and What It Doesn't)
                      </h2>

                      <p className="text-lg text-muted-foreground max-w-3xl">
                        No tool is perfect. Here's where FORGE excels, where it struggles, and what's coming next.
                      </p>
                    </div>
                  </BlurFade>

                  <BlurFade delay={0.2} inView>
                    <Suspense
                      fallback={
                        <div className="flex items-center justify-center py-12">
                          <div className="text-muted-foreground">Loading limitations...</div>
                        </div>
                      }
                    >
                      <LimitationsGrid {...DEFAULT_LIMITATIONS} />
                    </Suspense>
                  </BlurFade>

                  {/* Learnings */}
                  {project.learnings && (
                    <BlurFade delay={0.3} inView>
                      <div className="space-y-6">
                        <h2 className="text-3xl font-bold tracking-tight font-acorn">
                          Key Learnings
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                          {project.learnings.map((learning, index) => (
                            <Card key={index} className="p-6 space-y-2">
                              <h3 className="text-lg font-semibold flex items-center gap-2">
                                <Sparkles className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                                {learning.title}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {learning.description}
                              </p>
                            </Card>
                          ))}
                        </div>
                      </div>
                    </BlurFade>
                  )}
                </div>
              ),
            },
          ]}
        />
      </div>

      {/* CTA Section - Outside tabs */}
      <section className="space-y-8 pb-12">
        <BlurFade delay={0.1} inView>
          <h2 className="text-3xl font-bold tracking-tight font-acorn text-center">
            Want to See More?
          </h2>
        </BlurFade>

        <BlurFade delay={0.2} inView>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center">
            Explore Second Saturday live, check out the code, or get in touch to discuss how FORGE could work for your product ideas.
          </p>
        </BlurFade>

        <BlurFade delay={0.3} inView>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link href="/">
              <Card className="p-6 hover:shadow-lg transition-shadow h-full cursor-pointer">
                <div className="flex items-center gap-4">
                  <Users className="w-8 h-8 text-teal-600 dark:text-teal-400" />
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

        {/* Footer Note */}
        <BlurFade delay={0.4} inView>
          <div className="text-center text-sm text-muted-foreground pb-8">
            <p>Built with FORGE. Designed and developed by Kalyan Chandana.</p>
            <p className="mt-2">This page itself was built using the same framework it documents. Meta? Yes. Functional? Absolutely.</p>
          </div>
        </BlurFade>
      </div>
    </>
  );
}
