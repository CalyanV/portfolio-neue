"use client";

import { Fragment, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import {
  Brain,
  Code,
  Database,
  Workflow,
  Shield,
  Eye,
  Palette,
  Rocket,
  Network,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";

interface Agent {
  id: string;
  name: string;
  type: "planning" | "execution" | "review" | "deployment" | "coordinator";
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
  borderColor: string;
  responsibilities: string[];
}

const agents: Agent[] = [
  {
    id: "strategic-planner",
    name: "Strategic Planner",
    type: "planning",
    description: "Breaks down complex tasks into actionable steps with API contracts and Linear issues",
    icon: Brain,
    color: "#3B82F6",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/50",
    responsibilities: [
      "Task decomposition into stories",
      "Define API contracts upfront",
      "Create Linear project structure",
      "Plan agent coordination",
    ],
  },
  {
    id: "frontend-agent",
    name: "Frontend Agent",
    type: "execution",
    description: "Builds pixel-perfect UI components with Playwright visual tests",
    icon: Palette,
    color: "#10B981",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/50",
    responsibilities: [
      "Build React components (shadcn/Magic UI)",
      "Implement Tailwind styling",
      "Write Playwright visual tests",
      "Match API contracts exactly",
    ],
  },
  {
    id: "backend-agent",
    name: "Backend Agent",
    type: "execution",
    description: "Creates type-safe server logic with comprehensive unit tests",
    icon: Database,
    color: "#10B981",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/50",
    responsibilities: [
      "Write Convex mutations/queries",
      "Implement business logic",
      "Write unit tests (100% coverage)",
      "Match API contracts exactly",
    ],
  },
  {
    id: "orchestrator",
    name: "Orchestrator",
    type: "execution",
    description: "Coordinates multiple agents working in parallel",
    icon: Workflow,
    color: "#10B981",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/50",
    responsibilities: [
      "Launch agents in parallel",
      "Coordinate dependencies",
      "Ensure API contract alignment",
      "Monitor progress",
    ],
  },
  {
    id: "code-reviewer",
    name: "Code Reviewer",
    type: "review",
    description: "Enforces code quality and TypeScript standards",
    icon: Code,
    color: "#F59E0B",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/50",
    responsibilities: [
      "ESLint validation",
      "TypeScript type checking",
      "Code style enforcement",
      "Best practices review",
    ],
  },
  {
    id: "ux-reviewer",
    name: "UX Reviewer",
    type: "review",
    description: "Validates accessibility and design compliance",
    icon: Eye,
    color: "#F59E0B",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/50",
    responsibilities: [
      "WCAG 2.1 AA compliance",
      "Keyboard navigation testing",
      "Screen reader compatibility",
      "Visual regression checks",
    ],
  },
  {
    id: "security-specialist",
    name: "Security Specialist",
    type: "review",
    description: "Detects vulnerabilities and security issues",
    icon: Shield,
    color: "#F59E0B",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/50",
    responsibilities: [
      "SAST scanning (Semgrep)",
      "Dependency vulnerability checks",
      "Auth/permissions validation",
      "Injection prevention",
    ],
  },
  {
    id: "deployment-agent",
    name: "Deployment Agent",
    type: "deployment",
    description: "Automates staging and production deployments",
    icon: Rocket,
    color: "#8B5CF6",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/50",
    responsibilities: [
      "Deploy to staging (Vercel + Convex)",
      "Run smoke tests",
      "Deploy to production",
      "Automated rollback on errors",
    ],
  },
];

function AgentCard({ agent }: {
  agent: Agent;
}) {
  const Icon = agent.icon;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <TooltipProvider>
      <Tooltip delayDuration={300}>
        <TooltipTrigger asChild>
          <Card
            className={cn(
              agent.borderColor,
              "cursor-pointer transition-all duration-200 hover:shadow-md",
              isExpanded && "shadow-lg"
            )}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className={cn("p-2 rounded-lg", agent.bgColor)} style={{ color: agent.color }}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-semibold text-sm">{agent.name}</h3>
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 text-muted-foreground transition-transform duration-200 flex-shrink-0",
                        isExpanded && "rotate-180"
                      )}
                    />
                  </div>
                  <Badge variant="secondary" className="text-xs mb-2">
                    {agent.type}
                  </Badge>
                  <p className={cn(
                    "text-xs text-muted-foreground",
                    !isExpanded && "line-clamp-2"
                  )}>
                    {agent.description}
                  </p>
                </div>
              </div>

              {/* Expanded Details */}
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  isExpanded ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                )}
              >
                <div className="pt-4 border-t border-border">
                  <h4 className="text-xs font-semibold mb-3 uppercase tracking-wide text-muted-foreground">
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {agent.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start gap-2 text-xs">
                        <CheckCircle2
                          className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                          style={{ color: agent.color }}
                        />
                        <span className="text-muted-foreground">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TooltipTrigger>

        <TooltipContent side="top" className="max-w-xs">
          <div className="space-y-2">
            <p className="font-semibold text-sm">{agent.name}</p>
            <ul className="space-y-1">
              {agent.responsibilities.map((responsibility, index) => (
                <li key={index} className="text-xs flex items-start gap-1.5">
                  <span className="text-primary mt-0.5">•</span>
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export function AgentArchitectureDiagramSimple() {
  const grouped = {
    planning: agents.filter((a) => a.type === "planning"),
    execution: agents.filter((a) => a.type === "execution"),
    review: agents.filter((a) => a.type === "review"),
    deployment: agents.filter((a) => a.type === "deployment"),
  };

  return (
    <div className="w-full space-y-8">
      {/* Central Coordinator */}
      <div className="flex justify-center">
        <Card className="max-w-sm border-2 border-primary">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-md opacity-50" />
                <div className="relative bg-card border-2 border-primary rounded-full p-4">
                  <Network className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg">Main Session</h3>
                <Badge variant="outline">Coordinator</Badge>
                <p className="text-sm text-muted-foreground mt-2">
                  Orchestrates all 8 specialized agents with context engineering
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Agent Grid by Type */}
      <div className="space-y-6">
        {/* Planning */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-blue-500" />
            <h3 className="font-semibold text-sm uppercase tracking-wide text-blue-600 dark:text-blue-400">
              Planning
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-3">
            {grouped.planning.map((agent) => (
              <AgentCard
                key={agent.id}
                agent={agent}
                
                
              />
            ))}
          </div>
        </div>

        {/* Execution */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <h3 className="font-semibold text-sm uppercase tracking-wide text-green-600 dark:text-green-400">
              Parallel Execution
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {grouped.execution.map((agent) => (
              <AgentCard
                key={agent.id}
                agent={agent}
                
                
              />
            ))}
          </div>
        </div>

        {/* Review */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-orange-500" />
            <h3 className="font-semibold text-sm uppercase tracking-wide text-orange-600 dark:text-orange-400">
              Quality Gates
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {grouped.review.map((agent) => (
              <AgentCard
                key={agent.id}
                agent={agent}
                
                
              />
            ))}
          </div>
        </div>

        {/* Deployment */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-purple-500" />
            <h3 className="font-semibold text-sm uppercase tracking-wide text-purple-600 dark:text-purple-400">
              Deployment
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-3">
            {grouped.deployment.map((agent) => (
              <AgentCard
                key={agent.id}
                agent={agent}
                
                
              />
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-4 text-center bg-card border-border">
          <div className="text-2xl font-bold text-primary">9</div>
          <div className="text-xs text-muted-foreground">Specialized Agents</div>
        </Card>
        <Card className="p-4 text-center bg-card border-border">
          <div className="text-2xl font-bold text-primary">4-6x</div>
          <div className="text-xs text-muted-foreground">Parallel Speed</div>
        </Card>
        <Card className="p-4 text-center bg-card border-border">
          <div className="text-2xl font-bold text-primary">100%</div>
          <div className="text-xs text-muted-foreground">Test Coverage</div>
        </Card>
        <Card className="p-4 text-center bg-card border-border">
          <div className="text-2xl font-bold text-primary">3</div>
          <div className="text-xs text-muted-foreground">Review Layers</div>
        </Card>
      </div>
    </div>
  );
}
