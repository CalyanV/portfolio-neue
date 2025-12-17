"use client";

import { About } from "@/components/sections/about/about";
import { Contact } from "@/components/sections/contact/contact";
import { Experience } from "@/components/sections/experience/experience";
import { Footer } from "@/components/sections/footer/footer";
import { Hero } from "@/components/sections/hero/hero";
import { Projects } from "@/components/sections/projects/projects";
import { Skills } from "@/components/sections/skills/skills";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-[100dvh]">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
