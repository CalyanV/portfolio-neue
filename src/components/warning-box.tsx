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
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
      borderColor: "border-yellow-200 dark:border-yellow-800",
      iconColor: "text-yellow-600 dark:text-yellow-500",
      textColor: "text-yellow-900 dark:text-yellow-100",
    },
    info: {
      icon: Info,
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-800",
      iconColor: "text-blue-600 dark:text-blue-500",
      textColor: "text-blue-900 dark:text-blue-100",
    },
    danger: {
      icon: AlertCircle,
      bgColor: "bg-red-50 dark:bg-red-900/20",
      borderColor: "border-red-200 dark:border-red-800",
      iconColor: "text-red-600 dark:text-red-500",
      textColor: "text-red-900 dark:text-red-100",
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
