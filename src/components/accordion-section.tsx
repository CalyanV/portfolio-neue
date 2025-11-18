"use client";

import { useState, ReactNode } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { ChevronDown } from "lucide-react";

export interface AccordionItem {
  title: string;
  content: ReactNode;
}

interface AccordionSectionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

export function AccordionSection({
  items,
  allowMultiple = false,
}: AccordionSectionProps) {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    setOpenItems((prev) => {
      const newSet: Set<number> = allowMultiple ? new Set(prev) : new Set<number>();
      if (prev.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <div className="space-y-4 my-8">
      {items.map((item, index) => {
        const isOpen = openItems.has(index);
        return (
          <BlurFade key={index} delay={0.1 + index * 0.05} inView>
            <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden bg-white dark:bg-neutral-900">
              {/* Accordion Header */}
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
              >
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                  {item.title}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-neutral-500 transition-transform duration-200 ${
                    isOpen ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              {/* Accordion Content */}
              {isOpen && (
                <div className="px-6 pb-4 pt-2 border-t border-neutral-200 dark:border-neutral-800">
                  <div className="prose dark:prose-invert max-w-none text-sm">
                    {item.content}
                  </div>
                </div>
              )}
            </div>
          </BlurFade>
        );
      })}
    </div>
  );
}
