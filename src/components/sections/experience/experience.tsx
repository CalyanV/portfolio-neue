"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export function Experience() {
  return (
    <section id="experience" className="w-full py-24 lg:py-32">
      <div className="px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12">
          {/* Section Header */}
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                My Experience
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Companies and teams I've had the privilege to work with
              </p>
            </div>
          </BlurFade>

          {/* Experience Timeline */}
          <div className="space-y-4">
            {DATA.work.map((work: any, id) => (
              <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-semibold text-lg">{work.title}</h3>
                          {work.badges && work.badges.map((badge: string) => (
                            <Badge key={badge} variant="secondary" className="text-xs">
                              {badge}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          {work.href ? (
                            <Link
                              href={work.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-foreground transition-colors hover:underline underline-offset-4"
                            >
                              {work.company}
                            </Link>
                          ) : (
                            <span>{work.company}</span>
                          )}
                          {work.location && (
                            <>
                              <span>•</span>
                              <span>{work.location}</span>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground whitespace-nowrap">
                        {work.start} - {work.end ?? "Present"}
                      </div>
                    </div>
                    {work.description && (
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {work.description}
                      </p>
                    )}
                  </div>
                </Card>
              </BlurFade>
            ))}
          </div>

          {/* View Full Resume CTA */}
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <div className="flex justify-center pt-8">
              <Button variant="outline" size="pill" asChild>
                <Link href="/about">
                  View Full Resume <ArrowUpRight className="ml-2 size-5" />
                </Link>
              </Button>
            </div>
          </BlurFade>
        </div>
        </div>
      </div>
    </section>
  );
}
