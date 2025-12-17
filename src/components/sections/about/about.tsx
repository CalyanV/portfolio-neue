"use client";

import Image from "next/image";
import Link from "next/link";
import BlurFade from "@/components/magicui/blur-fade";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { ArrowUpRight } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export function About() {
  return (
    <section className="w-full py-24 lg:py-32" id="about">
      <div className="px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-10 lg:grid-cols-2">
          {/* Left Column: Text Content */}
          <div className="space-y-4">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About Me
              </h2>
            </BlurFade>
            <div className="space-y-4">
              <BlurFade delay={BLUR_FADE_DELAY * 6}>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {DATA.summary}
                </p>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 7}>
                <div className="flex gap-2">
                  <Button variant="outline" size="pill" asChild>
                    <Link href="/about">
                      View Resume <ArrowUpRight className="ml-2 size-5" />
                    </Link>
                  </Button>
                  <Link href="#contact">
                    <InteractiveHoverButton>Get in Touch</InteractiveHoverButton>
                  </Link>
                </div>
              </BlurFade>
            </div>
          </div>

          {/* Right Column: Image */}
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <div className="grid gap-4 sm:gap-6">
              <Image
                alt="About Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                height={310}
                src={DATA.avatarUrl}
                sizes="100vw"
                width={550}
              />
            </div>
          </BlurFade>
        </div>
        </div>
      </div>
    </section>
  );
}
