"use client";

import { useState, ReactNode } from "react";
import BlurFade from "@/components/magicui/blur-fade";

export interface Tab {
  id: string;
  label: string;
  content: ReactNode;
}

interface ProjectTabsProps {
  tabs: Tab[];
  defaultTab?: string;
}

export function ProjectTabs({ tabs, defaultTab }: ProjectTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const activeContent = tabs.find((tab) => tab.id === activeTab)?.content;

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="border-b border-border mb-8">
        <nav className="flex space-x-8" aria-label="Tabs">
          {tabs.map((tab, index) => (
            <BlurFade key={tab.id} delay={0.1 + index * 0.05} inView>
              <button
                onClick={() => setActiveTab(tab.id)}
                className={`
                  relative py-4 px-1 text-sm font-medium transition-colors
                  ${
                    activeTab === tab.id
                      ? "text-foreground"
                      : "text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300"
                  }
                `}
                aria-current={activeTab === tab.id ? "page" : undefined}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-900 dark:bg-neutral-100"
                    style={{
                      animation: "slideIn 0.3s ease-out",
                    }}
                  />
                )}
              </button>
            </BlurFade>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="py-6">
        <BlurFade key={activeTab} delay={0.1} inView>
          {activeContent}
        </BlurFade>
      </div>
    </div>
  );
}
