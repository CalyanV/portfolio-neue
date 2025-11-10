import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "KC",
  initials: "KC",
  url: "https://kalyan.design",
  location: "Charlotte, NC",
  locationLink: "https://www.google.com/maps/place/charlotte",
  description:
    "Product Designer with 6+ years of experience, specializing in AI. I design and build products where technology fades into the background and experience takes center stage.",
  summary:
    "6+ years experience as a Product Designer, turning ambiguity into tangible, shipped solutions. I architect product experiences, automate workflows, and own the results, thriving in the intersection of strategy and execution. My expertise spans user research, scalable design systems, and data-driven design, consistently delivering elegant, accessible, and impactful solutions from complex needs.",
  avatarUrl: "/me.png",
  skills: [
    "Figma",
    "User Research",
    "A/B Testing",
    "Usability Testing",
    "Design Systems",
    "WCAG 2.1",
    "React.js",
    "Next.js",
    "TypeScript",
    "HTML/CSS",
    "Claude Code",
    "Prompt Engineering",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "kalyanvenkatesh.cha@gmail.com",
    tel: "+1 813 595 1580",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/kalyanchandana",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kalyan-chandana/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/kalyan_chandana",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:kalyanvenkatesh.cha@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "CUBEXIT INC",
      href: "https://cubexit.com",
      badges: [],
      location: "FL (Multiple Clients), Remote",
      title: "Product Designer",
      logoUrl: "/cubexit.png",
      start: "Jan 2025",
      end: "Present",
      description:
        "Contributed to 594% increase in website traffic through UX improvements. Architected and launched a comprehensive, scalable design system in Figma, reducing development time by 40%. Conducted heuristic evaluations and competitor benchmarking. Implemented E2E CRM for clients using Service Design principles.",
    },
    {
      company: "Omni Healing",
      href: "https://omnihealing.com",
      badges: [],
      location: "Hartford, CT, Remote",
      title: "Design Lead",
      logoUrl: "/omni.png",
      start: "Sep 2024",
      end: "Dec 2024",
      description:
        "Led high-priority design project with bi-weekly Agile sprints, achieving 100% on-time delivery. Reduced average user task time by 25% through intuitive interface redesigns. Maintained WCAG 2.1 compliance across all touchpoints. Built robust Figma design system with 40+ reusable components.",
    },
    {
      company: "University of Maryland",
      href: "https://umd.edu",
      badges: [],
      location: "College Park, MD",
      title: "Product Designer / Graduate Assistant",
      logoUrl: "/umd.png",
      start: "Jan 2023",
      end: "May 2024",
      description:
        "Led extensive user research: 30+ user interviews, 12 SME interviews, 20+ cognitive walkthroughs, 20+ usability tests. Built comprehensive design system with 50+ accessible components. Enhanced user task success rates by 31%. Improved user satisfaction by 23% through research-driven UX enhancements.",
    },
    {
      company: "Renaura Wellness",
      href: "https://renaura.in",
      badges: [],
      location: "India",
      title: "Design Lead",
      logoUrl: "/renaura.png",
      start: "Jan 2022",
      end: "Apr 2022",
      description:
        "Redesigned e-commerce platform resulting in 17x sales growth. Led and mentored team of 3 designers. Increased customer retention by 16%. Cut user task completion time by 20%. Pioneered A/B testing for checkout flow optimizations.",
    },
    {
      company: "Infosys (Apple)",
      href: "https://infosys.com",
      badges: [],
      location: "India",
      title: "UI/UX Designer / Sr. Consultant",
      logoUrl: "/infosys.png",
      start: "Jan 2019",
      end: "Dec 2021",
      description:
        "Increased operational efficiency by 7x for 7000+ global retail staff through custom automation tool. Designed WCAG-compliant web interfaces. Met Apple's security and privacy standards. Reduced project rework by 35%. Designed for 10,000+ global users.",
    },
  ],
  education: [
    {
      school: "University of Maryland",
      href: "https://umd.edu",
      degree: "Masters in Human Computer Interaction",
      logoUrl: "/umd.png",
      start: "2022",
      end: "2024",
    },
    {
      school: "Vellore Institute of Technology",
      href: "https://vit.ac.in",
      degree: "Bachelors in Production and Industrial Engineering",
      logoUrl: "/vit.png",
      start: "2014",
      end: "2018",
    },
  ],
  projects: [
    {
      title: "Project 1",
      href: "https://example.com",
      dates: "Jan 2024 - Present",
      active: true,
      description:
        "Your project description here.",
      technologies: [
        "Figma",
        "React.js",
        "Next.js",
        "TypeScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://example.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Project 2",
      href: "https://example.com",
      dates: "Jan 2023 - Dec 2023",
      active: true,
      description:
        "Your project description here.",
      technologies: [
        "Figma",
        "User Research",
        "Prototyping",
      ],
      links: [
        {
          type: "Website",
          href: "https://example.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [],
} as const;
