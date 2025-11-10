"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { Icons } from "@/components/icons";
import { GlobeIcon, CalendarIcon } from "lucide-react";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export default function AboutPage() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex gap-8 lg:gap-16 relative">
      {/* Left Sidebar - Sticky */}
      <aside className="hidden lg:block lg:w-1/3 sticky top-0 self-start h-screen py-12">
        <div className="flex flex-col items-center space-y-6">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <Avatar className="size-32 border">
              <AvatarImage alt="Kalyan Chandana" src={DATA.avatarUrl} />
              <AvatarFallback>KC</AvatarFallback>
            </Avatar>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <GlobeIcon className="size-4" />
              <span>Charlotte, NC</span>
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <div className="flex gap-2">
              <Badge variant="outline">English</Badge>
            </div>
          </BlurFade>

          {/* Navigation Menu */}
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <nav className="flex flex-col space-y-2 mt-8 w-full text-center">
              <button
                onClick={() => scrollToSection("introduction")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Introduction
              </button>
              <button
                onClick={() => scrollToSection("work")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Work Experience
              </button>
              <button
                onClick={() => scrollToSection("studies")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Studies
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Technical Skills
              </button>
            </nav>
          </BlurFade>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 space-y-16 pb-16">
        {/* Hero/Introduction Section */}
        <section id="introduction" className="space-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className="flex items-center justify-between">
              <h1 className="text-5xl font-bold tracking-tight">Kalyan Chandana</h1>
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <p className="text-xl text-muted-foreground">Product Designer</p>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <Link href="mailto:kalyanvenkatesh.cha@gmail.com">
              <InteractiveHoverButton className="inline-flex">
                <span className="flex items-center gap-2">
                  <CalendarIcon className="size-4" />
                  <span>Schedule a call</span>
                </span>
              </InteractiveHoverButton>
            </Link>
          </BlurFade>

          {/* Social Links */}
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <div className="flex gap-6">
              <Link
                href="https://github.com/kalyanchandana"
                target="_blank"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icons.github className="size-4" />
                <span>GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/kalyan-chandana/"
                target="_blank"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icons.linkedin className="size-4" />
                <span>LinkedIn</span>
              </Link>
              <Link
                href="https://x.com/kalyan_chandana"
                target="_blank"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icons.x className="size-4" />
                <span>X</span>
              </Link>
              <Link
                href="mailto:kalyanvenkatesh.cha@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icons.email className="size-4" />
                <span>Email</span>
              </Link>
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <p className="text-muted-foreground leading-relaxed max-w-2xl">
              6+ years experience as a Product Designer, turning ambiguity into tangible, shipped solutions.
              I architect product experiences, automate workflows, and own the results, thriving in the intersection
              of strategy and execution. My expertise spans user research, scalable design systems, and data-driven design,
              consistently delivering elegant, accessible, and impactful solutions from complex needs.
            </p>
          </BlurFade>
        </section>

        {/* Work Experience Section */}
        <section id="work" className="space-y-8">
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <h2 className="text-3xl font-bold">Work Experience</h2>
          </BlurFade>

          {/* CUBEXIT */}
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="space-y-4">
              <div className="flex justify-between items-baseline">
                <h3 className="text-2xl font-semibold">CubeX</h3>
                <span className="text-sm text-muted-foreground">2025 - Present</span>
              </div>
              <p className="text-cyan-500 text-sm">Product Designer</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Contributed to 594% increase in website traffic through UX improvements that reduced bounce rate by 87% and increased session duration by 27%.</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Architected and launched a comprehensive, scalable design system in Figma, significantly boosting team design efficiency and reducing development time by 40%.</span>
                </li>
              </ul>
            </div>
          </BlurFade>

          {/* Omni Healing */}
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <div className="space-y-4">
              <div className="flex justify-between items-baseline">
                <h3 className="text-2xl font-semibold">Omni Healing</h3>
                <span className="text-sm text-muted-foreground">2024 - 2024</span>
              </div>
              <p className="text-cyan-500 text-sm">Design Lead</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Successfully led a high-priority design project with bi-weekly Agile sprints, achieving 100% on-time delivery, shipping 10 critical user flows.</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Reduced average user task time by 25% through intuitive interface redesigns and workflow optimization.</span>
                </li>
              </ul>
            </div>
          </BlurFade>

          {/* University of Maryland */}
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="space-y-4">
              <div className="flex justify-between items-baseline">
                <h3 className="text-2xl font-semibold">University of Maryland</h3>
                <span className="text-sm text-muted-foreground">2023 - 2024</span>
              </div>
              <p className="text-cyan-500 text-sm">Product Designer / Graduate Assistant</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Led extensive user research, conducting 30+ user interviews, 12 SME interviews, 20+ cognitive walkthroughs, and 20+ usability testing sessions.</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Built a comprehensive design system with 50+ reusable and accessible components.</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Enhanced user task success rates by 31% in usability tests through iterative design refinements.</span>
                </li>
              </ul>
            </div>
          </BlurFade>

          {/* Renaura Wellness */}
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <div className="space-y-4">
              <div className="flex justify-between items-baseline">
                <h3 className="text-2xl font-semibold">Renaura Wellness</h3>
                <span className="text-sm text-muted-foreground">2022 - 2022</span>
              </div>
              <p className="text-cyan-500 text-sm">Design Lead</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Redesigned e-commerce platform resulting in 17x sales growth through improved product discovery and simplified checkout process.</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Led and mentored a talented team of three designers while personally handling product strategy and technical implementation.</span>
                </li>
              </ul>
            </div>
          </BlurFade>

          {/* Infosys (Apple) */}
          <BlurFade delay={BLUR_FADE_DELAY * 15}>
            <div className="space-y-4">
              <div className="flex justify-between items-baseline">
                <h3 className="text-2xl font-semibold">Infosys (Apple)</h3>
                <span className="text-sm text-muted-foreground">2019 - 2021</span>
              </div>
              <p className="text-cyan-500 text-sm">UI/UX Designer / Sr. Consultant</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Increased operational efficiency by 7x for 7000+ global retail staff by designing a highly intuitive custom automation tool.</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Designed secure and fully WCAG-compliant web interfaces, enabling global accessibility for all users.</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Designed for 10,000+ global users across different time zones and languages.</span>
                </li>
              </ul>
            </div>
          </BlurFade>
        </section>

        {/* Studies Section */}
        <section id="studies" className="space-y-8">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <h2 className="text-3xl font-bold">Studies</h2>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 17}>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">University of Maryland</h3>
              <p className="text-sm text-muted-foreground">Masters in Human Computer Interaction | GPA: 3.9</p>
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 18}>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Vellore Institute of Technology</h3>
              <p className="text-sm text-muted-foreground">Bachelors in Production and Industrial Engineering | GPA: 3.3</p>
            </div>
          </BlurFade>
        </section>

        {/* Technical Skills Section */}
        <section id="skills" className="space-y-8">
          <BlurFade delay={BLUR_FADE_DELAY * 19}>
            <h2 className="text-3xl font-bold">Technical Skills</h2>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 20}>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Figma</h3>
              <p className="text-sm text-muted-foreground">
                Expert in creating design systems, prototyping, and collaborative design workflows.
              </p>
              <div className="flex gap-2">
                <Badge variant="outline" className="text-xs">Design Systems</Badge>
                <Badge variant="outline" className="text-xs">Prototyping</Badge>
                <Badge variant="outline" className="text-xs">UI/UX</Badge>
              </div>
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 21}>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">User Research</h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive experience in conducting user interviews, usability testing, and data-driven design decisions.
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline" className="text-xs">Usability Testing</Badge>
                <Badge variant="outline" className="text-xs">A/B Testing</Badge>
                <Badge variant="outline" className="text-xs">Heuristic Evaluation</Badge>
                <Badge variant="outline" className="text-xs">User Interviews</Badge>
              </div>
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 22}>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Development</h3>
              <p className="text-sm text-muted-foreground">
                Building next-gen products with modern web technologies and AI integration.
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline" className="text-xs">React.js</Badge>
                <Badge variant="outline" className="text-xs">Next.js</Badge>
                <Badge variant="outline" className="text-xs">TypeScript</Badge>
                <Badge variant="outline" className="text-xs">HTML/CSS</Badge>
                <Badge variant="outline" className="text-xs">Claude Code</Badge>
                <Badge variant="outline" className="text-xs">AI Integration</Badge>
              </div>
            </div>
          </BlurFade>
        </section>
      </main>
    </div>
  );
}
