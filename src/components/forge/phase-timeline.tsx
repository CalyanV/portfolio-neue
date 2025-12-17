"use client";

import { useState, useRef, ReactNode } from "react";
import { motion } from "motion/react";
import BlurFade from "@/components/magicui/blur-fade";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Phase {
  id: string;
  icon: string;
  title: string;
  duration: string;
  description: string;
  details: {
    whatHappens: string[];
    output?: string[];
    rules?: string[];
  };
}

export interface PhaseTimelineProps {
  phases: Phase[];
  className?: string;
}

function PhaseCard({
  phase,
  index,
  isOpen,
  onToggle,
}: {
  phase: Phase;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <BlurFade delay={0.1 + index * 0.1} inView>
      <div
        ref={ref}
        className="relative bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
      >
        {/* Phase Header */}
        <button
          onClick={onToggle}
          className="w-full px-6 py-5 flex items-start gap-4 text-left hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors"
        >
          {/* Icon */}
          <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 rounded-lg text-2xl shadow-md">
            {phase.icon}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground">
                  {phase.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {phase.description}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full whitespace-nowrap">
                  {phase.duration}
                </span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-neutral-500 transition-transform duration-300 flex-shrink-0",
                    isOpen && "rotate-180"
                  )}
                />
              </div>
            </div>
          </div>
        </button>

        {/* Expandable Content */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{
            height: { duration: 0.3, ease: "easeInOut" },
            opacity: { duration: 0.2, ease: "easeInOut" },
          }}
          className="overflow-hidden"
        >
          <div className="px-6 pb-6 pt-2 border-t border-border">
            <div className="space-y-6 pl-16">
              {/* What Happens */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3">
                  What Happens
                </h4>
                <ul className="space-y-2">
                  {phase.details.whatHappens.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start gap-2 text-sm text-foreground"
                    >
                      <span className="text-blue-500 dark:text-blue-400 mt-1 flex-shrink-0">
                        •
                      </span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Output */}
              {phase.details.output && phase.details.output.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">
                    Output
                  </h4>
                  <ul className="space-y-2">
                    {phase.details.output.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-start gap-2 text-sm text-foreground"
                      >
                        <span className="text-green-500 dark:text-green-400 mt-1 flex-shrink-0">
                          ✓
                        </span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Rules */}
              {phase.details.rules && phase.details.rules.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">
                    Rules
                  </h4>
                  <ul className="space-y-2">
                    {phase.details.rules.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-start gap-2 text-sm text-foreground"
                      >
                        <span className="text-amber-500 dark:text-amber-400 mt-1 flex-shrink-0">
                          ⚡
                        </span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </BlurFade>
  );
}

export function PhaseTimeline({ phases, className }: PhaseTimelineProps) {
  const [openPhases, setOpenPhases] = useState<Set<string>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);
  const phaseRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const togglePhase = (id: string) => {
    setOpenPhases((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className={cn("relative", className)}>
      {/* Timeline Container */}
      <div ref={containerRef} className="relative space-y-6">
        {phases.map((phase, index) => {
          const nextPhase = phases[index + 1];
          return (
            <div key={phase.id} className="relative">
              <div
                ref={(el) => {
                  phaseRefs.current[phase.id] = el;
                }}
              >
                <PhaseCard
                  phase={phase}
                  index={index}
                  isOpen={openPhases.has(phase.id)}
                  onToggle={() => togglePhase(phase.id)}
                />
              </div>

              {/* Animated Beam between phases */}
              {nextPhase && phaseRefs.current[phase.id] && phaseRefs.current[nextPhase.id] && (
                <AnimatedBeam
                  containerRef={containerRef}
                  fromRef={{ current: phaseRefs.current[phase.id] }}
                  toRef={{ current: phaseRefs.current[nextPhase.id] }}
                  curvature={0}
                  pathColor="rgba(100, 100, 255, 0.2)"
                  gradientStartColor="#3b82f6"
                  gradientStopColor="#8b5cf6"
                  duration={3}
                  delay={index * 0.2}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Optional: Vertical Line Behind Cards (commented out as AnimatedBeam provides the flow) */}
      {/* <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 opacity-20" /> */}
    </div>
  );
}

// Default phases data
export const DEFAULT_FORGE_PHASES: Phase[] = [
  {
    id: "planning",
    icon: "📋",
    title: "Planning",
    duration: "~2h",
    description: "Strategic decomposition and architectural planning",
    details: {
      whatHappens: [
        "Brainstorm with user to understand requirements and goals",
        "Decompose feature into manageable user stories",
        "Create dependency graph to identify parallel work streams",
        "Define API contracts between frontend and backend",
        "Generate comprehensive test cases for all components",
        "Create Linear issues with detailed specifications",
      ],
      output: [
        "Detailed user stories with acceptance criteria",
        "Dependency graph showing parallel execution paths",
        "API contract specifications (GraphQL/REST schemas)",
        "Test case suite covering all scenarios",
        "Linear issues ready for execution",
      ],
    },
  },
  {
    id: "parallel-execution",
    icon: "⚡",
    title: "Parallel Execution",
    duration: "3-6h",
    description: "Simultaneous development across multiple agents",
    details: {
      whatHappens: [
        "Multiple AI agents work simultaneously on independent stories",
        "Test-driven development enforced for all code changes",
        "Frontend agent builds components with Storybook visual tests",
        "Backend agent writes mutations with comprehensive unit tests",
        "Orchestrator coordinates dependencies and handoffs",
      ],
      output: [
        "Fully tested frontend components with visual regression tests",
        "Backend APIs with 90%+ unit test coverage",
        "Integration points ready for final merge",
        "Continuous progress updates in Linear",
      ],
      rules: [
        "No code ships without tests",
        "All agents follow the same coding standards",
        "Dependencies must be resolved before integration",
        "Visual components must pass accessibility checks",
      ],
    },
  },
  {
    id: "integration",
    icon: "🔗",
    title: "Integration",
    duration: "30-60m",
    description: "Automated quality gates and comprehensive validation",
    details: {
      whatHappens: [
        "Code review enforced (ESLint, Prettier, TypeScript strict mode)",
        "UX review checks WCAG 2.1 AA compliance automatically",
        "Security review runs SAST and checks for vulnerabilities",
        "API contract verification ensures frontend/backend alignment",
        "E2E tests with Playwright verify complete user flows",
      ],
      output: [
        "Code that passes all linting and type checks",
        "Accessible UI components meeting WCAG standards",
        "Security-scanned code with no critical vulnerabilities",
        "Verified API contracts with no breaking changes",
        "Passing E2E test suite covering critical paths",
      ],
      rules: [
        "All quality gates must pass before deployment",
        "Breaking API changes require approval",
        "Accessibility violations block deployment",
        "Critical security issues trigger automatic rollback",
      ],
    },
  },
  {
    id: "deployment",
    icon: "🚀",
    title: "Deployment",
    duration: "15-30m",
    description: "Safe, automated deployment with monitoring",
    details: {
      whatHappens: [
        "Deploy to staging environment with feature flags",
        "Run comprehensive smoke tests on staging",
        "Deploy to production with gradual rollout",
        "Monitor error rates, performance metrics, and user feedback",
        "Automated rollback triggered if error threshold exceeded",
      ],
      output: [
        "Feature live in production with monitoring enabled",
        "Smoke tests confirming basic functionality",
        "Error tracking and performance dashboards",
        "Rollback plan ready if issues detected",
      ],
      rules: [
        "Staging must pass all smoke tests",
        "Production deployment uses gradual rollout (10% → 50% → 100%)",
        "Error rate >2% triggers automatic rollback",
        "Performance degradation >20% requires investigation",
      ],
    },
  },
  {
    id: "iterate",
    icon: "🔄",
    title: "Iterate",
    duration: "Continuous",
    description: "Continuous improvement based on real-world usage",
    details: {
      whatHappens: [
        "Collect user feedback through analytics and support channels",
        "Identify edge cases not covered by initial tests",
        "Refine UI manually based on user behavior patterns",
        "Fix bugs discovered in production usage",
        "Add features based on usage data and feature requests",
      ],
      output: [
        "Data-driven insights for future improvements",
        "Updated test suite covering new edge cases",
        "UI refinements based on real user behavior",
        "Bug fixes and performance optimizations",
        "Feature backlog prioritized by actual usage",
      ],
      rules: [
        "All production bugs must be tracked in Linear",
        "User feedback triaged within 24 hours",
        "Performance regressions addressed immediately",
        "Feature requests evaluated based on usage data",
      ],
    },
  },
];
