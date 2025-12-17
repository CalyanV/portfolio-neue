"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Clock,
  Users,
  Zap,
  CheckCircle2,
  AlertCircle,
  Calendar,
  ExternalLink,
  Quote,
} from "lucide-react";

export interface UseCase {
  icon: string;
  title: string;
  timeSaved: string; // e.g., "5h vs 21h traditional (76% faster)"
  complexity: string; // e.g., "High", "Medium", "Low"
  agents: number;
  impact: string;
  requirement: string;
  challenges: string[];
  timeline: {
    phase: string;
    duration: string;
    description: string;
  }[];
  whatShipped: string[];
  liveExample?: string;
  userFeedback?: {
    quote: string;
    author: string;
  };
}

export interface UseCaseCardProps {
  useCase: UseCase;
  className?: string;
  defaultOpen?: boolean;
}

export function UseCaseCard({
  useCase,
  className,
  defaultOpen = false,
}: UseCaseCardProps) {
  const [isExpanded, setIsExpanded] = useState(defaultOpen);

  const getComplexityColor = (complexity: string) => {
    switch (complexity.toLowerCase()) {
      case "high":
        return "bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20";
      case "medium":
        return "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20";
      case "low":
        return "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20";
      default:
        return "bg-neutral-500/10 text-neutral-700 dark:text-neutral-400 border-neutral-500/20";
    }
  };

  return (
    <Card
      className={cn(
        "border border-border overflow-hidden transition-all duration-300",
        isExpanded && "ring-2 ring-accent/50",
        className
      )}
    >
      <Accordion
        type="single"
        collapsible
        value={isExpanded ? "item-1" : ""}
        onValueChange={(value) => setIsExpanded(value === "item-1")}
      >
        <AccordionItem value="item-1" className="border-none">
          <AccordionTrigger className="hover:no-underline px-6 py-5 hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-colors">
            <div className="flex items-start gap-4 w-full pr-4">
              {/* Icon */}
              <div className="text-4xl mt-1 flex-shrink-0">{useCase.icon}</div>

              {/* Content */}
              <div className="flex-1 text-left space-y-3">
                {/* Title */}
                <h3 className="text-lg font-semibold text-foreground">
                  {useCase.title}
                </h3>

                {/* Metadata Grid */}
                <div className="flex flex-wrap gap-2">
                  {/* Time Saved Badge */}
                  <Badge
                    variant="secondary"
                    className="gap-1.5 px-2.5 py-1 bg-accent/10 text-accent-foreground border-accent/20"
                  >
                    <Clock className="w-3.5 h-3.5" />
                    <span className="font-medium">{useCase.timeSaved}</span>
                  </Badge>

                  {/* Complexity Badge */}
                  <Badge
                    variant="outline"
                    className={cn(
                      "gap-1.5 px-2.5 py-1",
                      getComplexityColor(useCase.complexity)
                    )}
                  >
                    <Zap className="w-3.5 h-3.5" />
                    <span className="font-medium">
                      {useCase.complexity} Complexity
                    </span>
                  </Badge>

                  {/* Agents Badge */}
                  <Badge
                    variant="outline"
                    className="gap-1.5 px-2.5 py-1 bg-primary/5 text-primary border-primary/20"
                  >
                    <Users className="w-3.5 h-3.5" />
                    <span className="font-medium">
                      {useCase.agents} Agent{useCase.agents !== 1 ? "s" : ""}
                    </span>
                  </Badge>
                </div>

                {/* Impact Preview */}
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {useCase.impact}
                </p>
              </div>
            </div>
          </AccordionTrigger>

          <AccordionContent className="px-6 pb-6 pt-2">
            <div className="space-y-6 border-t border-border pt-6">
              {/* Requirement Section */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-accent" />
                  Requirement
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {useCase.requirement}
                </p>
              </div>

              {/* Challenges Section */}
              {useCase.challenges && useCase.challenges.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-500" />
                    Key Challenges
                  </h4>
                  <ul className="space-y-2">
                    {useCase.challenges.map((challenge, index) => (
                      <li
                        key={index}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-yellow-500 mt-0.5">•</span>
                        <span className="flex-1">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Timeline Section */}
              {useCase.timeline && useCase.timeline.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-accent" />
                    Development Timeline
                  </h4>
                  <div className="space-y-3">
                    {useCase.timeline.map((phase, index) => (
                      <div
                        key={index}
                        className="relative pl-6 border-l-2 border-border pb-3 last:pb-0"
                      >
                        <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-accent"></div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <h5 className="text-sm font-medium text-foreground">
                              {phase.phase}
                            </h5>
                            <Badge
                              variant="secondary"
                              className="text-xs px-1.5 py-0"
                            >
                              {phase.duration}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {phase.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* What Shipped Section */}
              {useCase.whatShipped && useCase.whatShipped.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    What Shipped
                  </h4>
                  <ul className="space-y-2">
                    {useCase.whatShipped.map((item, index) => (
                      <li
                        key={index}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="flex-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* User Feedback Section */}
              {useCase.userFeedback && (
                <div className="bg-muted/50 rounded-lg p-4 border border-border">
                  <div className="flex items-start gap-3">
                    <Quote className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div className="space-y-2">
                      <p className="text-sm italic text-foreground">
                        "{useCase.userFeedback.quote}"
                      </p>
                      <p className="text-xs text-muted-foreground">
                        — {useCase.userFeedback.author}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Live Example Link */}
              {useCase.liveExample && (
                <div className="pt-2">
                  <a
                    href={useCase.liveExample}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors group"
                  >
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    View Live Example
                  </a>
                </div>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
}
