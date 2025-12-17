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
          href="#projects"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 backdrop-blur-sm px-6 py-2 text-sm font-medium transition-all hover:bg-secondary/80 hover:border-border/60"
        >
          <AnimatedShinyText className="text-sm">
            <span className="font-bold">✨ Apple</span> | Featured Work
          </AnimatedShinyText>
        </Link>
      </BlurFade>

      {/* Main Headline */}
      <div className="space-y-8 max-w-4xl mx-auto">
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-garamond tracking-tight leading-[1.1]">
            Great products don't just work, they{" "}
            <Highlighter
              action="underline"
              color="#39bfc6"
              strokeWidth={2}
              iterations={3}
            >
              understand
            </Highlighter>{" "}
            you
          </h1>
        </BlurFade>

        {/* Subheadline */}
        <BlurFadeText
          delay={BLUR_FADE_DELAY * 3}
          className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          text="Hi, I'm KC, a product designer with over 6 years of experience, specializing in AI. I design and build products where technology fades into the background and experience takes center stage."
        />
      </div>

      {/* CTA Button */}
      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <Link href="/about">
          <InteractiveHoverButton className="text-sm">
            <span className="flex items-center gap-2">
              <Avatar className="size-5">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
              <span>About – {DATA.name}</span>
            </span>
          </InteractiveHoverButton>
        </Link>
      </BlurFade>
    </section>
  );
}
