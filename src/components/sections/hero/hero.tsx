"use client";

import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Highlighter } from "@/components/magicui/highlighter";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { OrganicBackground } from "@/components/organic-background";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-[100dvh] text-center space-y-8 px-6 -mt-12 sm:-mt-24 pt-12 sm:pt-24"
    >
      <OrganicBackground />
      {/* Featured Work Badge */}
      <BlurFade delay={BLUR_FADE_DELAY}>
        <Link
          href="/projects/forge"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 backdrop-blur-sm px-6 py-2 text-sm font-medium transition-all hover:bg-secondary/80 hover:border-border/60"
        >
          <AnimatedShinyText className="text-sm">
            <span className="font-bold">✨ Forge v1.3</span> | Featured Work
          </AnimatedShinyText>
        </Link>
      </BlurFade>

      {/* Main Headline */}
      <div className="space-y-8 max-w-4xl mx-auto">
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-garamond tracking-tight leading-[1.1]">
            I design. I build. I think {" "}
            <Highlighter
              action="underline"
              color="#39bfc6"
              strokeWidth={3}
              iterations={3}
            >
              in systems.
            </Highlighter>{" "}
          </h1>
        </BlurFade>

        {/* Subheadline */}
        <BlurFadeText
          delay={BLUR_FADE_DELAY * 3}
          className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          text="I'm KC. Currently designing and building deep agent frameworks and context engines to multiply what teams can deliver. Open to B2B and enterprise opportunities"
        />
      </div>

      {/* CTA Buttons */}
      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          {/* Secondary CTA - About Me */}
          <Link href="/about">
            <button className="flex items-center justify-center rounded-full border bg-background px-6 py-2.5 text-sm font-semibold gap-2 cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors">
              <Avatar className="size-4">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
              About Me
            </button>
          </Link>

          {/* Primary CTA - View Resume */}
          <Link href="/KC Resume.pdf" target="_blank" rel="noopener noreferrer">
            <InteractiveHoverButton className="text-sm">
              <span>View Resume</span>
            </InteractiveHoverButton>
          </Link>
        </div>
      </BlurFade>
    </section>
  );
}
