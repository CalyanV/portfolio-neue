"use client";

import { Badge } from "@/components/ui/badge";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { WarningBox } from "@/components/warning-box";
import BlurFade from "@/components/magicui/blur-fade";
import { useRef } from "react";
import { TrendingUp, Award } from "lucide-react";
import { parseMetricValue } from "@/lib/utils";
import { ProjectVisual } from "@/components/project-visual";

interface Metric {
  value: string;
  label: string;
}

interface InfoBarItem {
  label: string;
  value: string;
}

interface ProjectHeroEnhancedProps {
  title: string;
  subtitle?: string;
  tags?: string[];
  imageUrl?: string;
  videoUrl?: string;
  splineUrl?: string;
  hasNDA?: boolean;
  metrics?: Metric[];
  variant?: "simple" | "complex";
  infoBar?: InfoBarItem[];
  visualCaption?: string;
  award?: string;
}

export function ProjectHeroEnhanced({
  title,
  subtitle,
  tags = [],
  imageUrl,
  videoUrl,
  splineUrl,
  hasNDA = false,
  metrics = [],
  variant = "simple",
  infoBar = [],
  visualCaption,
  award,
}: ProjectHeroEnhancedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative w-full mb-16">
      {/* NDA Warning */}
      {hasNDA && (
        <WarningBox variant="info" title="Note" delay={0}>
          Due to NDA and ODC restrictions, details and visuals have been omitted or
          reimagined to protect confidential information.
        </WarningBox>
      )}

      {variant === "simple" ? (
        /* Simple Layout: Title + Metrics + Large Visual + Info Bar */
        <div className="space-y-8">
          {/* Title Section */}
          <BlurFade delay={0.1} inView>
            <div className="text-center space-y-6">
              <div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
                  {title}
                </h1>
                {subtitle && (
                  <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                    {subtitle}
                  </p>
                )}
              </div>

              {/* Inline Metrics Pills */}
              {(metrics.length > 0 || award) && (
                <div className="flex justify-center gap-4 flex-wrap">
                  {metrics.slice(0, 4).map((metric, index) => {
                    const numericValue = parseMetricValue(metric.value);
                    return (
                      <div
                        key={index}
                        className="inline-flex items-center gap-3 px-5 py-3 bg-muted rounded-full border border-border"
                      >
                        <span className="text-3xl font-bold text-foreground">
                          {metric.value.includes('~') || metric.value.includes('$') ? (
                            <>
                              {metric.value.includes('~') && '~'}
                              {metric.value.includes('$') && '$'}
                              <NumberTicker value={numericValue} delay={0.3 + index * 0.1} />
                              {metric.value.toLowerCase().includes('k') && 'k'}
                              {metric.value.toLowerCase().includes('h') && 'h'}
                            </>
                          ) : (
                            <>
                              <NumberTicker value={numericValue} delay={0.3 + index * 0.1} />
                              {metric.value.includes('x') && 'x'}
                              {metric.value.includes('%') && '%'}
                              {metric.value.toLowerCase().includes('h') && 'h'}
                            </>
                          )}
                        </span>
                        <span className="text-sm text-muted-foreground font-medium">
                          {metric.label}
                        </span>
                      </div>
                    );
                  })}
                  {award && (
                    <div className="inline-flex items-center gap-3 px-5 py-3 bg-muted rounded-full border border-border">
                      <Award className="w-6 h-6 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground font-semibold">
                        {award}
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </BlurFade>

          {/* Large Visual */}
          <BlurFade delay={0.2} inView>
            <div className="w-full max-w-6xl mx-auto">
              <ProjectVisual
                videoUrl={videoUrl}
                imageUrl={imageUrl}
                splineUrl={splineUrl}
                title={title}
                showCaption={true}
                visualCaption={visualCaption}
              />
            </div>
          </BlurFade>

          {/* Info Bar */}
          {infoBar.length > 0 && (
            <BlurFade delay={0.3} inView>
              <div className="flex justify-center gap-8 flex-wrap pb-8 border-b border-border">
                {infoBar.map((item, index) => (
                  <div key={index} className="text-center">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </BlurFade>
          )}

          {/* Tech Stack Badges */}
          {tags.length > 0 && (
            <BlurFade delay={0.4} inView>
              <div className="flex justify-center flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-3 py-1.5 text-sm"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </BlurFade>
          )}
        </div>
      ) : (
        /* Complex Layout: Original Two-Column Layout */
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column: Visual */}
          <BlurFade delay={0.1} inView>
            <div className="space-y-6">
              <ProjectVisual
                videoUrl={videoUrl}
                imageUrl={imageUrl}
                splineUrl={splineUrl}
                title={title}
                showCaption={false}
                visualCaption={visualCaption}
              />

              {/* Title and Subtitle */}
              <div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-3">
                  {title}
                </h1>
                {subtitle && (
                  <p className="text-lg md:text-xl text-muted-foreground">
                    {subtitle}
                  </p>
                )}
              </div>
            </div>
          </BlurFade>

          {/* Right Column: Info Cards */}
          <div className="space-y-6">
            {/* Impact Metrics Card */}
            {metrics.length > 0 && (
              <BlurFade delay={0.2} inView>
                <div
                  ref={metricsRef}
                  className="relative p-6 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                      Impact Metrics
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {metrics.slice(0, 4).map((metric, index) => {
                      const numericValue = parseMetricValue(metric.value);
                      return (
                        <div key={index} className="space-y-1">
                          <div className="text-3xl font-bold text-foreground">
                            {metric.value.includes('~') || metric.value.includes('$') ? (
                              <span>
                                {metric.value.includes('~') && '~'}
                                {metric.value.includes('$') && '$'}
                                <NumberTicker value={numericValue} delay={0.5 + index * 0.1} />
                                {metric.value.toLowerCase().includes('k') && 'k'}
                                {metric.value.toLowerCase().includes('h') && 'h'}
                              </span>
                            ) : (
                              <span>
                                <NumberTicker value={numericValue} delay={0.5 + index * 0.1} />
                                {metric.value.includes('x') && 'x'}
                                {metric.value.includes('%') && '%'}
                                {metric.value.toLowerCase().includes('h') && 'h'}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground leading-tight">
                            {metric.label}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </BlurFade>
            )}

            {/* Tech Stack Badges */}
            {tags.length > 0 && (
              <BlurFade delay={0.3} inView>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="px-3 py-1.5 text-sm"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </BlurFade>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
