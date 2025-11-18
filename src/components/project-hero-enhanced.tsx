"use client";

import { Badge } from "@/components/ui/badge";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { WarningBox } from "@/components/warning-box";
import BlurFade from "@/components/magicui/blur-fade";
import { useRef } from "react";
import { TrendingUp, Award } from "lucide-react";
import Spline from "@splinetool/react-spline/next";
import Image from "next/image";

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

  // Parse metric values for NumberTicker
  const parseMetricValue = (value: string) => {
    // Extract numeric value from strings like "7x", "96%", "~73k", "$120k"
    const numMatch = value.match(/[\d.]+/);
    if (!numMatch) return 0;
    const num = parseFloat(numMatch[0]);

    // Handle thousands (k)
    if (value.toLowerCase().includes('k')) {
      return num;
    }
    return num;
  };

  const formatMetricValue = (value: string, tickerValue: number) => {
    // Return the formatted value with suffix
    if (value.includes('x')) return `${tickerValue}x`;
    if (value.includes('%')) return `${tickerValue}%`;
    if (value.toLowerCase().includes('k')) return `~${tickerValue}k`;
    if (value.includes('$')) return `$${tickerValue}k`;
    return tickerValue.toString();
  };

  // Render visual component (shared between both variants)
  const renderVisual = (showCaption = false) => (
    <>
      {videoUrl ? (
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900/40 dark:to-neutral-800/40 border-2 border-neutral-200 dark:border-neutral-700 shadow-2xl hover:shadow-3xl transition-shadow">
          <video
            src={videoUrl}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      ) : imageUrl ? (
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900/40 dark:to-neutral-800/40 border-2 border-neutral-200 dark:border-neutral-700 shadow-2xl hover:shadow-3xl transition-shadow">
          <Image
            src={imageUrl}
            alt={`${title} interface preview`}
            fill
            className="object-cover"
            unoptimized={imageUrl.endsWith('.gif')}
          />
        </div>
      ) : splineUrl ? (
        <div className="spline-wrapper relative w-full aspect-square lg:aspect-auto lg:h-[600px] rounded-2xl overflow-hidden bg-gradient-to-br from-teal-100 to-teal-200 dark:from-teal-900/40 dark:to-teal-800/40 border border-teal-200 dark:border-teal-700">
          <div className="absolute inset-0 spline-container">
            <Spline
              scene={splineUrl}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
      ) : null}
      {showCaption && visualCaption && (
        <p className="text-center text-sm text-muted-foreground mt-4">
          {visualCaption}
        </p>
      )}
    </>
  );

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
                  <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
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
                        className="inline-flex items-center gap-3 px-5 py-3 bg-teal-100 dark:bg-teal-900/30 rounded-full border border-teal-200 dark:border-teal-700"
                      >
                        <span className="text-3xl font-bold text-teal-900 dark:text-teal-100">
                          {metric.value.includes('~') || metric.value.includes('$') ? (
                            <>
                              {metric.value.includes('~') && '~'}
                              {metric.value.includes('$') && '$'}
                              <NumberTicker value={numericValue} delay={0.3 + index * 0.1} />
                              {metric.value.toLowerCase().includes('k') && 'k'}
                            </>
                          ) : (
                            <>
                              <NumberTicker value={numericValue} delay={0.3 + index * 0.1} />
                              {metric.value.includes('x') && 'x'}
                              {metric.value.includes('%') && '%'}
                            </>
                          )}
                        </span>
                        <span className="text-sm text-teal-800 dark:text-teal-200 font-medium">
                          {metric.label}
                        </span>
                      </div>
                    );
                  })}
                  {award && (
                    <div className="inline-flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-amber-100 to-yellow-100 dark:from-amber-900/30 dark:to-yellow-900/30 rounded-full border-2 border-amber-300 dark:border-amber-700">
                      <Award className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                      <span className="text-sm text-amber-900 dark:text-amber-100 font-semibold">
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
              {renderVisual(true)}
            </div>
          </BlurFade>

          {/* Info Bar */}
          {infoBar.length > 0 && (
            <BlurFade delay={0.3} inView>
              <div className="flex justify-center gap-8 flex-wrap pb-8 border-b border-neutral-200 dark:border-neutral-800">
                {infoBar.map((item, index) => (
                  <div key={index} className="text-center">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
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
                    className="px-3 py-1.5 text-sm bg-neutral-100 dark:bg-neutral-900/30 text-neutral-900 dark:text-neutral-100 border-neutral-200 dark:border-neutral-700"
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
              {renderVisual(false)}

              {/* Title and Subtitle */}
              <div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-3">
                  {title}
                </h1>
                {subtitle && (
                  <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400">
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
                  className="relative p-6 rounded-xl bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                    <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 uppercase tracking-wide">
                      Impact Metrics
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {metrics.slice(0, 4).map((metric, index) => {
                      const numericValue = parseMetricValue(metric.value);
                      return (
                        <div key={index} className="space-y-1">
                          <div className="text-3xl font-bold bg-gradient-to-br from-neutral-900 to-neutral-600 dark:from-neutral-100 dark:to-neutral-400 bg-clip-text text-transparent">
                            {metric.value.includes('~') || metric.value.includes('$') ? (
                              <span>
                                {metric.value.includes('~') && '~'}
                                {metric.value.includes('$') && '$'}
                                <NumberTicker value={numericValue} delay={0.5 + index * 0.1} />
                                {metric.value.toLowerCase().includes('k') && 'k'}
                              </span>
                            ) : (
                              <span>
                                <NumberTicker value={numericValue} delay={0.5 + index * 0.1} />
                                {metric.value.includes('x') && 'x'}
                                {metric.value.includes('%') && '%'}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-tight">
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
                      className="px-3 py-1.5 text-sm bg-teal-100 dark:bg-teal-900/30 text-teal-900 dark:text-teal-100 border-teal-200 dark:border-teal-700 hover:bg-teal-200 dark:hover:bg-teal-800/40 transition-colors"
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
