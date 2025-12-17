"use client";

import { useState } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Plus, Minus } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

const skillCategories = [
  {
    title: "Product Design",
    description: "Product Design involves creating user-centered digital products through research, wireframing, prototyping, and testing. This skill includes a variety of design tools and methodologies to ensure a seamless user experience.",
    icon: "🎨",
    skills: ["Figma", "User Research", "A/B Testing", "Usability Testing", "Design Systems", "WCAG 2.1"],
  },
  {
    title: "Web Development",
    description: "Web Development involves creating websites and web applications that are both visually appealing and highly functional. This skill encompasses a variety of technologies, frameworks, and best practices to ensure a seamless user experience and performance.",
    icon: "💻",
    skills: ["React.js", "Next.js", "TypeScript", "HTML/CSS"],
  },
  {
    title: "Deep Agents",
    description: "Deep Agents focuses on building intelligent systems using AI and machine learning. This skill includes working with large language models, prompt engineering, and creating autonomous agents.",
    icon: "🤖",
    skills: ["Claude Code", "Prompt Engineering"],
  },
  {
    title: "Marketing",
    description: "Marketing involves promoting products and services through various digital channels. This skill includes content creation, SEO, analytics, and strategic planning to reach target audiences effectively.",
    icon: "📈",
    skills: ["SEO", "Content Strategy", "Analytics", "Social Media"],
  },
];

export function Skills() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section id="skills" className="w-full py-24 lg:py-32">
      <div className="px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12">
          {/* Header Section */}
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-4">
              <BlurFade delay={BLUR_FADE_DELAY * 9}>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  My Skills
                </h2>
              </BlurFade>
            </div>
            <div className="space-y-4">
              <BlurFade delay={BLUR_FADE_DELAY * 10}>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Here are some of my skills where I've turned knowledge into expertise, making things happen.
                </p>
              </BlurFade>
            </div>
          </div>

          {/* Skill Cards Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
            {skillCategories.map((category, index) => (
              <BlurFade key={category.title} delay={BLUR_FADE_DELAY * 11 + index * 0.05}>
                <Card
                  className="relative p-6 bg-muted border-border hover:bg-accent transition-all cursor-pointer"
                  onClick={() => toggleCard(index)}
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-3 flex-1">
                        <div className="text-4xl">{category.icon}</div>
                        <h3 className="text-xl font-bold">{category.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {category.description}
                        </p>
                      </div>
                      <button
                        className="flex-shrink-0 ml-4 p-2 rounded-full hover:bg-background/50 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleCard(index);
                        }}
                      >
                        {expandedCard === index ? (
                          <Minus className="size-4" />
                        ) : (
                          <Plus className="size-4" />
                        )}
                      </button>
                    </div>

                    {/* Expanded Skills */}
                    {expandedCard === index && (
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-border animate-in slide-in-from-top-2">
                        {category.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="px-3 py-1 text-sm"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
