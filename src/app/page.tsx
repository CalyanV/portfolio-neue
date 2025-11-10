"use client";

import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Highlighter } from "@/components/magicui/highlighter";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { ProjectCard } from "@/components/project-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero" className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-8">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background/50 backdrop-blur-sm px-6 py-2 text-sm font-medium transition-all hover:border-foreground/40"
          >
            <AnimatedShinyText className="text-sm">
              <span className="font-bold">✨ Apple</span> | Featured Work
            </AnimatedShinyText>
          </Link>
        </BlurFade>

        <div className="space-y-8 max-w-4xl mx-auto">
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-acorn tracking-tight leading-tight">
              Great products don't just work, they <Highlighter action="underline" color="#39bfc6" strokeWidth={2} iterations={3}>understand</Highlighter> you
            </h1>
          </BlurFade>

          <BlurFadeText
            delay={BLUR_FADE_DELAY * 3}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto"
            text="Hi, I'm KC, a product designer with over 6 years of experience, specializing in AI. I design and build products where technology fades into the background and experience takes center stage."
          />
        </div>

        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <InteractiveHoverButton className="text-sm">
            <span className="flex items-center gap-2">
              <Avatar className="size-5">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
              <span>About – {DATA.name}</span>
            </span>
          </InteractiveHoverButton>
        </BlurFade>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-medium tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-medium tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a dm{" "}
                <Link
                  href={DATA.contact.social.X.url}
                  className="text-blue-500 hover:underline"
                >
                  with a direct question on twitter
                </Link>{" "}
                and I&apos;ll respond whenever I can. I will ignore all
                soliciting.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
