"use client";

import { Badge } from "@/components/ui/badge";

interface ProjectHeroProps {
  title: string;
  subtitle?: string;
  tags?: string[];
  splineUrl?: string;
}

export function ProjectHero({
  title,
  subtitle,
  tags = [],
  splineUrl,
}: ProjectHeroProps) {
  return (
    <div className="relative w-full mb-12">
      {/* Spline 3D Animation */}
      {splineUrl && (
          <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden mb-8 bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800">
            <iframe
              src={splineUrl}
              frameBorder="0"
              width="100%"
              height="100%"
              className="w-full h-full"
              title={`${title} 3D Animation`}
            />
          </div>
      )}

      {/* Title and Subtitle */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          {title}
        </h1>

      {subtitle && (
          <p className="text-lg md:text-xl text-muted-foreground mb-6">
            {subtitle}
          </p>
      )}

      {/* Tags/Chips */}
      {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-3 py-1 text-sm"
              >
                {tag}
              </Badge>
            ))}
          </div>
      )}
    </div>
  );
}
