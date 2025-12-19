"use client";

import { Contact } from "@/components/sections/contact/contact";
import { Footer } from "@/components/sections/footer/footer";
import { Hero } from "@/components/sections/hero/hero";
import { Projects } from "@/components/sections/projects/projects";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-[100dvh]">
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
