"use client";

import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

export interface WorkflowStep {
  label: string;
  description?: string;
}

interface WorkflowColumnProps {
  title: string;
  steps: WorkflowStep[];
  variant?: "before" | "after";
  delay?: number;
}

function WorkflowColumn({
  title,
  steps,
  variant = "before",
  delay = 0,
}: WorkflowColumnProps) {
  const variantStyles = {
    before: {
      headerBg: "bg-red-100 dark:bg-red-900/30",
      headerText: "text-red-900 dark:text-red-100",
      border: "border-red-200 dark:border-red-800",
    },
    after: {
      headerBg: "bg-green-100 dark:bg-green-900/30",
      headerText: "text-green-900 dark:text-green-100",
      border: "border-green-200 dark:border-green-800",
    },
  };

  const style = variantStyles[variant];

  return (
      <div
        className={`border ${style.border} rounded-lg overflow-hidden bg-white dark:bg-neutral-900`}
      >
        <div className={`${style.headerBg} px-4 py-3`}>
          <h3 className={`${style.headerText} font-semibold text-lg`}>
            {title}
          </h3>
        </div>
        <div className="p-4">
          {steps.map((step, index) => (
            <div key={index} className="mb-4 last:mb-0">
              <div className="flex items-start gap-3">
                <div
                  className={`
                  flex-shrink-0 w-8 h-8 rounded-full
                  ${
                    variant === "before"
                      ? "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300"
                      : "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300"
                  }
                  flex items-center justify-center text-sm font-semibold
                `}
                >
                  {index + 1}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-neutral-900 dark:text-neutral-100 text-sm">
                    {step.label}
                  </p>
                  {step.description && (
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
                      {step.description}
                    </p>
                  )}
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="ml-4 mt-2 mb-2 border-l-2 border-neutral-200 dark:border-neutral-800 h-4" />
              )}
            </div>
          ))}
        </div>
      </div>
  );
}

interface WorkflowDiagramProps {
  before: {
    title: string;
    steps: WorkflowStep[];
  };
  after: {
    title: string;
    steps: WorkflowStep[];
  };
}

export function WorkflowDiagram({ before, after }: WorkflowDiagramProps) {
  return (
    <div className="my-8">
      <div className="grid grid-cols-1 gap-6 items-center">
        <WorkflowColumn
          title={before.title}
          steps={before.steps}
          variant="before"
          delay={0.1}
        />
        <div className="flex justify-center py-4">
          <ArrowRight className="w-8 h-8 text-neutral-400 rotate-90" />
        </div>
        <WorkflowColumn
          title={after.title}
          steps={after.steps}
          variant="after"
          delay={0.2}
        />
      </div>
    </div>
  );
}
