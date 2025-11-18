"use client";

import { useState } from "react";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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

interface AgentArchitectureDiagramProps {
  className?: string;
}

const agents: Agent[] = [
  {
    id: "strategic-planner",
    name: "Strategic Planner",
    type: "planning",
    description: "Breaks down complex tasks into actionable steps",
    icon: Brain,
    color: "#3B82F6",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/50",
    responsibilities: [
      "Task decomposition",
      "Priority assignment",
      "Resource allocation",
      "Timeline planning",
    ],
  },
  {
    id: "frontend-agent",
    name: "Frontend Agent",
    type: "execution",
    description: "Handles UI/UX implementation and frontend logic",
    icon: Palette,
    color: "#10B981",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/50",
    responsibilities: [
      "Component development",
      "Style implementation",
      "Responsive design",
      "User interactions",
    ],
  },
  {
    id: "backend-agent",
    name: "Backend Agent",
    type: "execution",
    description: "Develops APIs, databases, and server-side logic",
    icon: Database,
    color: "#10B981",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/50",
    responsibilities: [
      "API development",
      "Database design",
      "Business logic",
      "Data validation",
    ],
  },
  {
    id: "orchestrator",
    name: "Orchestrator",
    type: "execution",
    description: "Coordinates parallel task execution",
    icon: Workflow,
    color: "#10B981",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/50",
    responsibilities: [
      "Task coordination",
      "Parallel execution",
      "Dependency management",
      "Progress tracking",
    ],
  },
  {
    id: "code-reviewer",
    name: "Code Reviewer",
    type: "review",
    description: "Ensures code quality and best practices",
    icon: Code,
    color: "#F59E0B",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/50",
    responsibilities: [
      "Code review",
      "Best practices",
      "Performance optimization",
      "Refactoring suggestions",
    ],
  },
  {
    id: "ux-reviewer",
    name: "UX Reviewer",
    type: "review",
    description: "Reviews user experience and design consistency",
    icon: Eye,
    color: "#F59E0B",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/50",
    responsibilities: [
      "UX evaluation",
      "Accessibility checks",
      "Design consistency",
      "Usability testing",
    ],
  },
  {
    id: "security-specialist",
    name: "Security Specialist",
    type: "review",
    description: "Identifies security vulnerabilities and risks",
    icon: Shield,
    color: "#F59E0B",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/50",
    responsibilities: [
      "Security audits",
      "Vulnerability scanning",
      "Compliance checks",
      "Risk assessment",
    ],
  },
  {
    id: "deployment-agent",
    name: "Deployment Agent",
    type: "deployment",
    description: "Manages deployment and release processes",
    icon: Rocket,
    color: "#8B5CF6",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/50",
    responsibilities: [
      "Build automation",
      "Deployment orchestration",
      "Environment management",
      "Rollback procedures",
    ],
  },
];

export function AgentArchitectureDiagram({
  className,
}: AgentArchitectureDiagramProps) {
  const [hoveredAgent, setHoveredAgent] = useState<Agent | null>(null);
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);

  const getAgentsByOrbit = () => {
    return {
      inner: agents.filter((a) => a.type === "planning"),
      middle: agents.filter((a) => a.type === "execution"),
      outer: agents.filter((a) => a.type === "review" || a.type === "deployment"),
    };
  };

  const orbits = getAgentsByOrbit();

  return (
    <div className={cn("w-full", className)}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Orbiting Circles Visualization */}
        <div className="relative flex items-center justify-center">
          <Card className="w-full aspect-square max-w-[600px] border-2">
            <CardContent className="p-0">
              <div className="relative h-full w-full flex items-center justify-center overflow-hidden p-8">
                {/* Central Node - Main Session */}
                <div className="absolute z-10 flex flex-col items-center justify-center">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
                    <div className="relative bg-card border-2 border-primary rounded-full p-6 shadow-lg">
                      <Network className="w-12 h-12 text-primary" />
                    </div>
                  </div>
                  <div className="mt-3 text-center">
                    <p className="font-semibold text-sm">Main Session</p>
                    <p className="text-xs text-muted-foreground">Coordinator</p>
                  </div>
                </div>

                {/* Inner Orbit - Planning Agents */}
                <OrbitingCircles
                  radius={120}
                  duration={30}
                  path={true}
                  iconSize={60}
                >
                  {orbits.inner.map((agent) => (
                    <AgentNode
                      key={agent.id}
                      agent={agent}
                      onHover={setHoveredAgent}
                      onClick={setSelectedAgent}
                      isSelected={selectedAgent?.id === agent.id}
                    />
                  ))}
                </OrbitingCircles>

                {/* Middle Orbit - Execution Agents */}
                <OrbitingCircles
                  radius={200}
                  duration={40}
                  reverse={true}
                  path={true}
                  iconSize={60}
                >
                  {orbits.middle.map((agent) => (
                    <AgentNode
                      key={agent.id}
                      agent={agent}
                      onHover={setHoveredAgent}
                      onClick={setSelectedAgent}
                      isSelected={selectedAgent?.id === agent.id}
                    />
                  ))}
                </OrbitingCircles>

                {/* Outer Orbit - Review & Deployment Agents */}
                <OrbitingCircles
                  radius={280}
                  duration={50}
                  path={true}
                  iconSize={60}
                >
                  {orbits.outer.map((agent) => (
                    <AgentNode
                      key={agent.id}
                      agent={agent}
                      onHover={setHoveredAgent}
                      onClick={setSelectedAgent}
                      isSelected={selectedAgent?.id === agent.id}
                    />
                  ))}
                </OrbitingCircles>
              </div>
            </CardContent>
          </Card>

          {/* Legend */}
          <div className="absolute bottom-4 left-4 bg-card/80 backdrop-blur-sm border rounded-lg p-3 shadow-lg">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500" />
                <span className="text-xs font-medium">Planning</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-xs font-medium">Execution</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-orange-500" />
                <span className="text-xs font-medium">Review</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-purple-500" />
                <span className="text-xs font-medium">Deployment</span>
              </div>
            </div>
          </div>
        </div>

        {/* Agent Details Panel */}
        <div className="lg:sticky lg:top-8">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-lg">
                {selectedAgent || hoveredAgent
                  ? `${(selectedAgent || hoveredAgent)?.name}`
                  : "Agent Details"}
              </CardTitle>
              {(selectedAgent || hoveredAgent) && (
                <Badge
                  variant="outline"
                  className="w-fit"
                  style={{
                    borderColor: (selectedAgent || hoveredAgent)?.color,
                    color: (selectedAgent || hoveredAgent)?.color,
                  }}
                >
                  {(selectedAgent || hoveredAgent)?.type.toUpperCase()}
                </Badge>
              )}
            </CardHeader>
            <CardContent className="space-y-4">
              {selectedAgent || hoveredAgent ? (
                <>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {(selectedAgent || hoveredAgent)?.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-2">
                      {(selectedAgent || hoveredAgent)?.responsibilities.map(
                        (resp, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm"
                          >
                            <span
                              className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0"
                              style={{
                                backgroundColor:
                                  (selectedAgent || hoveredAgent)?.color,
                              }}
                            />
                            <span>{resp}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  {selectedAgent && (
                    <button
                      onClick={() => setSelectedAgent(null)}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors underline"
                    >
                      Clear selection
                    </button>
                  )}
                </>
              ) : (
                <div className="text-center py-8">
                  <p className="text-sm text-muted-foreground">
                    Hover or click on an agent to view details
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Each agent specializes in different aspects of development
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Architecture Stats */}
          <Card className="mt-4 border-2">
            <CardContent className="p-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">9</p>
                  <p className="text-xs text-muted-foreground">
                    Specialized Agents
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-500">5x</p>
                  <p className="text-xs text-muted-foreground">
                    Faster Execution
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-orange-500">3</p>
                  <p className="text-xs text-muted-foreground">Review Layers</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-purple-500">1</p>
                  <p className="text-xs text-muted-foreground">
                    Deploy Pipeline
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

interface AgentNodeProps {
  agent: Agent;
  onHover: (agent: Agent | null) => void;
  onClick: (agent: Agent) => void;
  isSelected: boolean;
}

function AgentNode({ agent, onHover, onClick, isSelected }: AgentNodeProps) {
  const Icon = agent.icon;

  return (
    <div
      className="group relative cursor-pointer"
      onMouseEnter={() => onHover(agent)}
      onMouseLeave={() => onHover(null)}
      onClick={() => onClick(agent)}
    >
      {/* Glow effect on hover/select */}
      <div
        className={cn(
          "absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300",
          isSelected && "opacity-50"
        )}
        style={{ backgroundColor: agent.color }}
      />

      {/* Agent Circle */}
      <div
        className={cn(
          "relative bg-card border-2 rounded-full p-3 shadow-lg transition-all duration-300",
          "group-hover:scale-110 group-hover:shadow-xl",
          isSelected && "scale-110 shadow-xl ring-2 ring-offset-2",
          agent.bgColor,
          agent.borderColor
        )}
        style={{
          ...(isSelected && { borderColor: agent.color }),
          color: agent.color,
        }}
      >
        <Icon className="w-6 h-6" />
      </div>

      {/* Tooltip */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50 whitespace-nowrap">
        <div className="bg-popover text-popover-foreground border rounded-md px-2 py-1 text-xs font-medium shadow-md">
          {agent.name}
        </div>
      </div>
    </div>
  );
}
