"use client";

import { ReactNode } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { AlertTriangle, Info, AlertCircle } from "lucide-react";

interface WarningBoxProps {
  children: ReactNode;
  variant?: "warning" | "info" | "danger";
  title?: string;
  delay?: number;
}

export function WarningBox({
  children,
  variant = "warning",
  title,
  delay = 0,
}: WarningBoxProps) {
  const variants = {
    warning: {
      icon: AlertTriangle,
      bgColor: "bg-muted/50",
      borderColor: "border-border",
      iconColor: "text-primary",
      textColor: "text-foreground",
    },
    info: {
      icon: Info,
      bgColor: "bg-primary/5",
      borderColor: "border-primary/30",
      iconColor: "text-primary",
      textColor: "text-foreground",
    },
    danger: {
      icon: AlertCircle,
      bgColor: "bg-destructive/10",
      borderColor: "border-destructive/30",
      iconColor: "text-destructive",
      textColor: "text-foreground",
    },
  };

  const config = variants[variant];
  const Icon = config.icon;

  return (
    <BlurFade delay={delay} inView>
      <div
        className={`
          ${config.bgColor}
          ${config.borderColor}
          border rounded-lg p-4 my-6
        `}
      >
        <div className="flex gap-3">
          <Icon className={`${config.iconColor} w-5 h-5 flex-shrink-0 mt-0.5`} />
          <div className="flex-1">
            {title && (
              <h4
                className={`${config.textColor} font-semibold text-sm mb-1`}
              >
                {title}
              </h4>
            )}
            <div className={`${config.textColor} text-sm`}>{children}</div>
          </div>
        </div>
      </div>
    </BlurFade>
  );
}
