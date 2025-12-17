"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { DATA } from "@/data/resume";
import { Info } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export function Projects() {
  return (
    <section id="projects" className="w-full py-24 lg:py-32">
      <div className="px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12">
          {/* Header Section */}
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-4">
              <BlurFade delay={BLUR_FADE_DELAY * 11}>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  My Projects
                </h2>
              </BlurFade>
            </div>
            <div className="space-y-4">
              <BlurFade delay={BLUR_FADE_DELAY * 12}>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Here are some of my projects where I've turned code into cool, functional stuff.
                </p>
              </BlurFade>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {DATA.projects.map((project, index) => (
              <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 13 + index * 0.05}>
                <Link href={project.href || "#"}>
                  <Card className="group relative overflow-hidden bg-muted border-border hover:bg-accent transition-all h-full flex flex-col">
                    {/* Project Image */}
                    <div className="relative w-full h-64 bg-muted overflow-hidden">
                      {project.video ? (
                        <video
                          src={project.video}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                        />
                      ) : project.image ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-muted/50">
                          <span className="text-6xl opacity-20">🎨</span>
                        </div>
                      )}
                    </div>

                    {/* Project Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                        {project.description}
                      </p>

                      {/* Technology Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="px-3 py-1 text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                          <Badge variant="secondary" className="px-3 py-1 text-xs">
                            +{project.technologies.length - 4}
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Info Icon */}
                    <div className="absolute bottom-4 right-4">
                      <div className="p-2 rounded-full bg-background/80 backdrop-blur-sm">
                        <Info className="size-4 text-muted-foreground" />
                      </div>
                    </div>
                  </Card>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
