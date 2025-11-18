import { CheckCircle2, AlertTriangle, Rocket } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface LimitationItem {
  title: string;
  description?: string;
}

export interface LimitationsGridProps {
  whatWorks: LimitationItem[];
  currentLimits: LimitationItem[];
  whatsNext: LimitationItem[];
  className?: string;
}

export const DEFAULT_LIMITATIONS = {
  whatWorks: [
    {
      title: "Ships MVPs fast (60-70%)",
      description: "Rapidly builds functional prototypes to validate ideas quickly",
    },
    {
      title: "Enforces quality gates",
      description: "Built-in checks ensure code quality standards are maintained",
    },
    {
      title: "Maintains context",
      description: "Keeps track of project state and requirements throughout development",
    },
    {
      title: "Enables solo building",
      description: "Empowers individual developers to build complete features independently",
    },
    {
      title: "Parallel execution",
      description: "Runs multiple tasks simultaneously for faster development cycles",
    },
  ],
  currentLimits: [
    {
      title: "Testing false positives",
      description: "Occasionally flags valid code as problematic during automated testing",
    },
    {
      title: "UI needs polish",
      description: "Interface refinement and user experience improvements still in progress",
    },
    {
      title: "Complex state tricky",
      description: "Managing intricate state logic requires additional iteration",
    },
    {
      title: "Context optimization evolving",
      description: "Fine-tuning how context is managed across large codebases",
    },
    {
      title: "Tool usage improving",
      description: "Enhancing efficiency and accuracy of tool interactions",
    },
  ],
  whatsNext: [
    {
      title: "Database migration agent",
      description: "Automated handling of schema changes and data migrations",
    },
    {
      title: "Component library agent",
      description: "Intelligent component generation and reusability patterns",
    },
    {
      title: "Better tool usage",
      description: "Enhanced integration and optimization of development tools",
    },
    {
      title: "Public marketplace",
      description: "Community-driven agent templates and shared workflows",
    },
    {
      title: "Claude Skills integration",
      description: "Deep integration with Claude's specialized capabilities",
    },
  ],
};

export function LimitationsGrid({
  whatWorks,
  currentLimits,
  whatsNext,
  className,
}: LimitationsGridProps) {
  return (
    <div className={cn("space-y-8", className)}>
      <div className="grid grid-cols-1 gap-8">
        {/* What Works Column */}
        <Card className="border-green-500/20 bg-green-500/5">
          <CardHeader className="pb-6 px-8 pt-8">
            <CardTitle className="flex items-center gap-3 text-green-600 dark:text-green-400">
              <CheckCircle2 className="h-6 w-6" />
              What Works
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 px-8 pb-8">
            {whatWorks.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-start gap-3">
                  <Badge
                    variant="outline"
                    className="mt-0.5 border-green-500/30 bg-green-500/10 text-green-700 dark:text-green-300"
                  >
                    ✓
                  </Badge>
                  <div className="flex-1 space-y-2">
                    <p className="text-sm font-medium leading-tight">
                      {item.title}
                    </p>
                    {item.description && (
                      <p className="text-xs text-muted-foreground">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Current Limits Column */}
        <Card className="border-amber-500/20 bg-amber-500/5">
          <CardHeader className="pb-6 px-8 pt-8">
            <CardTitle className="flex items-center gap-3 text-amber-600 dark:text-amber-400">
              <AlertTriangle className="h-6 w-6" />
              Current Limits
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 px-8 pb-8">
            {currentLimits.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-start gap-3">
                  <Badge
                    variant="outline"
                    className="mt-0.5 border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300"
                  >
                    !
                  </Badge>
                  <div className="flex-1 space-y-2">
                    <p className="text-sm font-medium leading-tight">
                      {item.title}
                    </p>
                    {item.description && (
                      <p className="text-xs text-muted-foreground">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* What's Next Column */}
        <Card className="border-blue-500/20 bg-blue-500/5">
          <CardHeader className="pb-6 px-8 pt-8">
            <CardTitle className="flex items-center gap-3 text-blue-600 dark:text-blue-400">
              <Rocket className="h-6 w-6" />
              What&apos;s Next
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 px-8 pb-8">
            {whatsNext.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-start gap-3">
                  <Badge
                    variant="outline"
                    className="mt-0.5 border-blue-500/30 bg-blue-500/10 text-blue-700 dark:text-blue-300"
                  >
                    →
                  </Badge>
                  <div className="flex-1 space-y-2">
                    <p className="text-sm font-medium leading-tight">
                      {item.title}
                    </p>
                    {item.description && (
                      <p className="text-xs text-muted-foreground">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Philosophy Quote Section */}
      <Card className="border-muted bg-muted/20">
        <CardContent className="pt-6">
          <blockquote className="border-l-4 border-primary pl-4 italic">
            <p className="text-sm text-muted-foreground md:text-base">
              &quot;Better to ship 60% fast and iterate than wait for 100%
              perfect and ship nothing.&quot;
            </p>
          </blockquote>
        </CardContent>
      </Card>
    </div>
  );
}
