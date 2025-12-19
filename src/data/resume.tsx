import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, FolderKanban, FileText } from "lucide-react";

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
    { href: "/projects", icon: FolderKanban, label: "Projects" },
  ],
  contact: {
    email: "kalyanvenkatesh.cha@gmail.com",
    tel: "+1 813 595 1580",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/kalyanchandana",
        icon: Icons.github,

        navbar: false,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/calyanv12/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/kalyan_chandana",
        icon: Icons.x,

        navbar: false,
      },
      Resume: {
        name: "Resume",
        url: "/KC Resume.pdf",
        icon: FileText,

        navbar: true,
        newTab: true,
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
      title: "Apple",
      href: "/projects/apple",
      dates: "Jan 2019 - Dec 2021",
      active: true,
      description:
        "Designed a reporting tool for Apple's global retail employees during NPI events, boosting efficiency for 7k+ global retail staff by 7x through intuitive automation.",
      technologies: [
        "Enterprise Design",
        "UX Research",
        "Automation",
        "Business Impact",
        "Agile",
        "Global Scale",
        "Information Architecture",
        "Stakeholder Management",
      ],
      links: [],
      image: "",
      video: "/projects/apple-demo.webm",
      subtitle: "Automating Supply Chain Insights for Global Retail Teams",
      splineUrl: "",
      hasNDA: true,
      overview: {
        intro: "I designed a reporting tool for Apple's NPI events, that were intuitive and automated time-consuming workflows, boosting efficiency for global retail teams. Thousands of users benefitted from them. I also snagged a Rising Star award for one of the projects, which I'll dive into below!",
        timeline: "Jan 2019 - Dec 2021",
        platform: "Mobile + Desktop",
        role: "UI/UX Designer, Consultant",
        team: "Kalyan(me), Imran, Atri, Nidhi, Srini",
        goal: "Enhance the usability of SAP systems used during Apple's New Product Introduction (NPI) events by making the interfaces more intuitive and efficient for global retail teams, resulting in streamlined workflows and improved decision-making.",
        users: "Retail teams, business analysts, finance, and supply chain teams, as well as global leadership, who relied on the system for data-driven decisions and smooth NPI operations.",
        results: "Designed a user-friendly and efficient web-based tool, simplifying complex SAP systems to enhance productivity. Conducted user research, implemented iterative testing, and effectively managed the project to deliver a seamless, efficient experience for over 7k employees globally.",
      },
      roles: {
        designer: "Conducted stakeholder interviews, gathered and analyzed data, designed solutions, created prototypes, tested them, and collaborated with developers for implementation.",
        consultant: "Managed the process end-to-end, from planning sprints and setting milestones to overseeing testing and deployment. Ensured all user queries and bugs were resolved during the support phase. Led a growing team in my second year, provided mentorship, delegated tasks, and ensured smooth project execution while fostering collaboration across teams.",
      },
      metrics: {
        impact: [
          {
            value: "7x",
            label: "Improvement in Process Efficiency",
          },
          {
            value: "96%",
            label: "Global User Satisfaction",
          },
          {
            value: "~7000",
            label: "Employees Benefitted Globally",
          },
          {
            value: "$5187000",
            label: " Minimum Annual Productivity Savings",
          },
        ],
        overall: [
          {
            value: "95%",
            label: "On-Time Project Delivery Rate",
          },
          {
            value: "~",
            label: "User Stories Successfully Delivered",
          },
          {
            value: "2",
            label: "New Team Members Trained & Mentored",
          },
          {
            value: "~$450k",
            label: "Total Revenue Gained by Infosys",
          },
        ],
      },
      personas: [
        {
          name: "Emma",
          age: 35,
          title: "Retail Store Manager",
          image: "/personas/emma.png",
          description: "Emma's always on the move, managing her store and team. SAP's outdated system slows her down, especially when reporting damaged devices or updating repair codes. Training new hires on it? A nightmare. She wants a user-friendly dashboard that gets her the info she needs in seconds. For Emma, time saved = a smoother store + happier customers!",
          challenges: "Navigating complex systems",
          needs: "Quick access to data for daily decisions",
          results: "Workflow speed up, time to focus on her team",
        },
        {
          name: "Seamus",
          age: 42,
          title: "Senior Business Analyst",
          image: "/personas/seamus.png",
          description: "Seamus loves data, but SAP's complex system makes generating reports a time-consuming chore. He's tired of spending hours digging through data when he could be focusing on strategy. He needs a streamlined dashboard that gives him quick, accurate insights so he can do what he does best: analyze and plan. For Seamus, efficiency is key.",
          challenges: "Time-consuming reporting",
          needs: "Efficient, quick access to accurate data",
          results: "More time for strategic work, less time on data prep",
        },
        {
          name: "Mei",
          age: 39,
          title: "Supply Chain Lead",
          image: "/personas/mei.png",
          description: "Mei runs a tight ship in the supply chain, but outdated systems make tracking inventory a hassle. She needs real-time updates to keep things moving smoothly and avoid bottlenecks. Juggling numbers across multiple regions shouldn't be this hard. Mei wants an efficient, easy-to-use system that lets her keep stock flowing without the headaches.",
          challenges: "Tracking inventory across regions",
          needs: "Real-time updates to avoid delays",
          results: "Faster inventory management, smoother operations",
        },
      ],
      learnings: [
        {
          title: "Cross-Functional Collaboration Drives Success",
          description: "Effectively coordinating with diverse teams (development, business, testing, retail, etc.) ensures seamless integration of solutions, leading to higher team efficiency and improved user experiences.",
        },
        {
          title: "Stakeholder Engagement Enhances Project Buy-In",
          description: "Proactively engaging with stakeholders early and often, ensures alignment on project goals and reducing resistance to design changes, leading to smoother implementations.",
        },
        {
          title: "Agile Testing Ensures Delivery Quality",
          description: "Regular testing throughout the development cycle, from prototype to deployment, helped identify issues early and ensured a smoother go-live phase.",
        },
        {
          title: "Adapting to Changing Requirements",
          description: "Flexibility in adapting to evolving project scopes and client needs proved essential for maintaining timelines and ensuring project success.",
        },
      ],
      problem: {
        statement: "Apple uses SAP for their ERP solutions, and while it's powerful, it has a steep learning curve. For employees who aren't power users—like analysts or retail staff, it's easy to get lost and spend more time than necessary retrieving data. This isn't a big deal in day-to-day operations, but during NPI(New Product Introduction) events, when every second counts, employees can't afford to spend 20-30 minutes hunting for info. They needed a faster, more intuitive solution to keep things moving smoothly.",
        story: "A batch of products arrives at retail stores, but some are damaged during transit. Now, an analyst wants to track this issue, generate a report, and send it to the relevant supply chain manager(s) to figure out what went wrong and how to prevent it from happening again.\n\nHere's the challenge. To access that data, the analyst has to jump through multiple selection screens and tables to track down products flagged with exceptions. Worse, the exceptions aren't categorized. Retail teams record the issue as an option from a predefined list or add a custom message but the data was recorded in the database as a simple note instead. So now, the analyst has to sift through unstructured notes, filter through the data manually, and add each item to the report one by one.",
        goals: [
          "Build a new tool that uses data from SAP and automate frequently used workflows and is easy to access.",
          "Ensure the tool is scalable to support future automations and expansions.",
        ],
      },
      context: {
        npi: "NPI (New Product Introduction) events are when companies like Apple launch new products globally. During these events, every minute counts as teams need instant insights to make supply chain decisions, optimize inventory, and respond to market conditions.",
        sapComplexity: "Apple uses SAP for their ERP solutions. While powerful, SAP has a steep learning curve and complex workflows that require extensive training. For employees who aren't power users, navigating through multiple T-codes (SAP's transaction codes), selection screens, and disconnected tables becomes time-consuming, especially during critical NPI events when speed is essential.",
      },
      discovery: {
        patternRecognition: "The breakthrough came from paying attention to what wasn't being said. While managing the product backlog, I noticed a pattern: certain user stories consistently spiked in priority during and immediately after NPI events. These weren't feature requests—they were desperate attempts to access critical data faster. The stories all centered on the same pain: reports for items lost or damaged in transit, area-specific product performance data, returns and defective item tracking, and supply chain visibility by region.",
        shadowing: "Rather than just designing another interface, I shadowed analysts during their daily work and walked through the exact workflows myself. What I discovered was staggering.",
        manualWorkflow: {
          title: "The Hidden Cost of Legacy Systems",
          description: "To generate a single report, analysts were performing work that should have been automated:",
          steps: [
            "Navigate through 10+ different T-codes (SAP's cryptic navigation system)",
            "Manually query multiple disconnected tables: Purchase Order, Regional codes, Country codes, Store codes, Lost in Transit, Damaged Goods",
            "Copy data from each table into a spreadsheet",
            "Manually cross-reference codes to join data",
            "Filter and format for their specific needs",
            "Create charts and visualizations manually",
            "Export and share with stakeholders",
          ],
          timePerReport: "17-25 minutes",
          complexity: "100-300+ clicks and keystrokes",
          training: "3-month SAP training course required",
        },
        insight: "Employees were doing what APIs should do.",
      },
      designProcess: {
        prototype: {
          approach: "Rather than write a requirements document, I partnered with our tech lead and a developer to build a proof of concept. We spent a few weeks creating a simple prototype that automated the most common workflow: Lost in Transit and Damaged in Transit reports.",
          features: "Dropdown menu to select report type, filters to choose product category, region, and country (by name, not code), and automated charts showing percentages vs. successful deliveries plus exportable data.",
          magic: "Behind the scenes, the tool automated all the table lookups, code translations, and data joins that analysts previously did manually. It transformed SAP from a system requiring expertise into a database that served insights on demand.",
        },
        validation: {
          approach: "I conducted 6-7 individual sessions with stakeholders across retail teams, development, and QA. Rather than a formal presentation, I showed them the working prototype and watched their reactions.",
          response: "The response was immediate and unanimous: 'When can we have this?'",
        },
        strategicPositioning: {
          opportunity: "Around the same time, Apple was launching a new unified web portal for organizational reporting. This project aimed to make SAP data accessible to employees globally without requiring extensive training—exactly what my prototype did.",
          pitch: "Rather than build this tool in isolation, I could integrate it into a platform that thousands of employees already used. This tool solves a high-value problem, aligns perfectly with the portal's mission, integration would be low-effort with maximum impact, and it would showcase the portal's value to retail teams.",
          result: "Executive sponsorship, two engineering teams assigned to support it, and green light to proceed.",
        },
        cardSorting: {
          approach: "While the UI components were standardized, where reports lived and how they were organized was critical. I introduced a methodology my team had never used: card sorting workshops.",
          structure: "Participants included end users and stakeholders from multiple regions. The task was to organize 15-20 report types into logical categories. The goal was to understand mental models across different departments.",
          finding: "Users from different departments wanted similar groupings—they were thinking about business problems, not organizational silos. We created a navigation structure that matched user mental models and provided redundancy in categorization.",
        },
        sapFiori: "Unlike consumer apps where you start with sketches and wireframes, enterprise SAP development follows strict design system conventions. SAP Fiori provides comprehensive UI components, patterns, and guidelines. This meant no need for low-fidelity prototyping of UI patterns, no debates about visual design, and focus could shift entirely to information architecture and automation logic.",
      },
      features: {
        title: "Lost in Transit / Damaged Goods Automation",
        description: "What started as a single report type evolved into the foundation of a comprehensive platform. Here's the feature I can showcase:",
        mainFeature: {
          name: "Lost in Transit / Damaged Goods Reports",
          whatItDid: "Automated the collection and analysis of delivery issues across Apple's global supply chain. Users could filter by product category, item name, business region, country, or specific store—all using human-readable names instead of cryptic SAP codes.",
          whyItMattered: "During NPI events, understanding loss rates and damage patterns helped teams calculate financial losses, identify problematic shipping routes, make real-time inventory adjustments, and negotiate with carriers based on data.",
          designDecisions: [
            "Progressive disclosure: Required fields were minimal (just region + time period OR purchase order number)",
            "Smart defaults: System suggested common date ranges based on current NPI timeline",
            "Code translation layer: Behind the scenes, the tool automatically converted store names → store codes, mapped countries → country codes → region codes, joined 5+ disconnected SAP tables, and calculated percentages vs. successful deliveries",
            "Performance safeguards: Implemented pagination and 'query too wide' warnings to prevent system slowdowns",
          ],
          output: "Visual charts showing loss/damage percentages, detailed data tables with full context, and one-click export to CSV/XLSX for deeper analysis in Tableau or Power BI.",
        },
      },
      solution: {
        automation: {
          before: [
            { label: "Access multiple Tcodes", description: "Navigate through complex SAP transaction codes" },
            { label: "Present selection screens", description: "Fill out multiple selection criteria screens" },
            { label: "Input criteria to Retrieve metadata", description: "Search through massive datasets" },
            { label: "Return metadata", description: "Get back partial information" },
            { label: "Use Metadata to Retrieve required data", description: "Use metadata to query actual data" },
            { label: "Return data", description: "Receive unstructured data" },
            { label: "Manually sift through data", description: "Manually filter and organize information" },
            { label: "Manually create report", description: "Build report from scratch" },
            { label: "Send the report to relevant team", description: "Distribute to stakeholders" },
          ],
          after: [
            { label: "Input Criteria", description: "Simple form with required fields" },
            { label: "Initiate Workflow with Automations", description: "Tool handles all SAP interactions" },
            { label: "Return IDocs and BAPIs", description: "Automated API calls retrieve all data" },
            { label: "Generate report with retrieved data", description: "Auto-formatted report ready to use" },
            { label: "Return report", description: "Download or view instantly" },
            { label: "Send the report to relevant team", description: "One-click distribution" },
          ],
          summary: "In the end, automating these workflows didn't just save time, it made the entire process smoother and less error-prone. Not to mention, the user doesn't even have to login to SAP so, goodbye Tcodes! By addressing gaps like uncategorized exceptions and creating a more streamlined backend, we empowered analysts and teams to focus on what really matters, without getting bogged down in manual, repetitive tasks.",
        },
        adoption: {
          description: "Things were evolving at Apple. With NPI events ramping up every year, the need to optimize their supply chain became even more critical. As part of this optimization, Apple began upgrading their SAP systems to S4/HANA. This shift created the perfect opportunity to experiment with new solutions and streamline workflows. Around the same time, a new web-based portal was introduced and it was used across departments for organizational support, designed to be more accessible globally and user-friendly than traditional tools.\n\nBefore we came on board, few other retail projects had already been added to this portal with impressive adoption rates. Seeing the potential, we took the opportunity to integrate our tool into the portal as well, which not only improved accessibility but also boosted our tool's adoption rate far more than we anticipated.",
          metrics: [
            { value: "35%", label: "Projected Adoption rate" },
            { value: "78%", label: "Actual Adoption rate" },
          ],
        },
      },
      impact: {
        quantified: {
          timeSavings: {
            before: "17-25 minutes per report",
            after: "<1 minute per report",
            savings: "~19 minutes per report",
          },
          scale: {
            reportsWeekly: "~7,000 reports generated weekly",
            hoursSavedWeekly: "2,216 hours saved per week",
            hoursSavedAnnually: "115,266 hours saved annually",
            productivityGains: "$5.18M in productivity gains (at $45/hour average employee cost)",
          },
          additionalBenefits: [
            "Eliminated need for 3-month SAP training for new analysts",
            "Reduced data errors from manual compilation",
            "Enabled real-time decision-making during critical NPI events",
            "Democratized access to supply chain insights across departments",
          ],
        },
        qualitative: {
          userFeedback: "This tool is exactly what we needed—I can't believe we used to do this manually.",
          executiveImpact: "Was featured in quarterly business reviews as a model for SAP modernization initiatives.",
          recognition: "Rising Star Award",
        },
      },
      reflection: {
        successful: [
          "Started with empathy, not assumptions: I didn't design from a spec—I did the painful manual work myself to truly understand the problem.",
          "Built to prove, not to persuade: The prototype did the selling. Show > tell.",
          "Strategic timing and positioning: Recognizing the unified portal opportunity turned a departmental tool into an enterprise solution.",
          "Let constraints drive focus: SAP's design system wasn't limiting—it freed me to focus on information architecture and automation logic where I could add unique value.",
          "User demand pulled features, not roadmap push: The best features came from listening to how people actually used the tool, not from what we thought they needed.",
        ],
        doingDifferently: [
          "Document the research better: I relied on observation and informal conversations. Formal research artifacts (journey maps, recorded interviews) would have helped evangelize the problem more widely.",
          "Measure more from day one: While adoption and time savings were tracked, I wish I'd instrumented more granular usage analytics to understand which features drove the most value.",
          "Invest in onboarding earlier: Despite being 'self-explanatory,' structured onboarding could have accelerated adoption in the first few months.",
          "Plan for scale from the start: As features multiplied, the IA needed more frequent refactoring. A more modular structure upfront would have made evolution smoother.",
        ],
      },
    },
    {
      title: "Forge v1.3",
      href: "/projects/forge",
      dates: "Oct 2025 - Present (75 hours)",
      active: true,
      description:
        "Built a 9-agent AI development framework that shipped 24,400 lines of production code in 75 hours with 460/460 tests passing, 100% coverage, and 6x faster than traditional development.",
      technologies: [
        "Claude Code",
        "Next.js",
        "TypeScript",
        "Convex",
        "React",
        "Linear MCP",
        "GitHub MCP",
        "Playwright",
        "TDD",
      ],
      links: [],
      image: "/forge.png",
      video: "",
      subtitle: "The AI Framework That Ships Features 4x Faster",
      splineUrl: "",
      hasNDA: false,
      overview: {
        intro: "I went from 'I can't code' to 'I am gearing up to ship a full-stack social network' by building infrastructure to orchestrate AI. FORGE is a 9-agent framework that enables parallel execution, enforces quality gates, and maintains context across sessions.",
        timeline: "Ongoing (~27 hours)",
        platform: "Full-Stack Framework",
        role: "Framework Architect",
        team: "Solo project",
        goal: "Build an AI framework that enables designers and non-engineers to ship production-ready features quickly with enforced quality standards.",
        users: "Product builders, designers learning to code, solo founders, and anyone wanting to build full-stack products with AI assistance.",
        results: "Built Second Saturday (full-stack social network) in 75 hours over 45 days with 24,400 lines of production code at 350 lines/hour, 460/460 tests passing with 100% coverage, WCAG 2.1 AA compliance, and zero security vulnerabilities.",
      },
      metrics: {
        impact: [
          {
            value: "4x",
            label: "Faster Feature Development",
          },
          {
            value: "5",
            label: "Development Phases",
          },
          {
            value: "5h",
            label: "Avg Time Per Feature (vs 21h)",
          },
          {
            value: "9",
            label: "Agents Working in Tandem",
          },
        ],
        overall: [
          {
            value: "75 hours",
            label: "Built over 45 days",
          },
          {
            value: "24,400",
            label: "Lines of code",
          },
          {
            value: "350",
            label: "Lines per hour",
          },
          {
            value: "460/460",
            label: "Tests passing",
          },
        ],
      },
      personas: [
        {
          name: "Alex",
          age: 28,
          title: "Designer Learning to Code",
          image: "/personas/alex.png",
          description: "Alex has strong design instincts but limited coding experience. They've tried learning through tutorials but struggle to ship complete features. AI tools help with individual files, but maintaining context across a full-stack feature feels overwhelming. They need a framework that handles the complexity while they focus on product decisions.",
          challenges: "Context loss, sequential workflows, no quality enforcement",
          needs: "Ship features fast with enforced quality standards",
          results: "Built Second Saturday in 75 hours with 100% test coverage",
        },
        {
          name: "Jordan",
          age: 34,
          title: "Solo Founder",
          image: "/personas/jordan.png",
          description: "Jordan has a product idea and can code, but building everything solo means slow progress. They waste time context-switching between frontend, backend, tests, and deployment. Features that should take hours stretch into weeks. They need parallel execution to move faster without hiring a team.",
          challenges: "Solo development bottlenecks, slow iteration cycles",
          needs: "Parallel agent execution to accelerate development",
          results: "Ships 8-10 features per month vs 2 features before",
        },
        {
          name: "Riley",
          age: 31,
          title: "Product Builder",
          image: "/personas/riley.png",
          description: "Riley prototypes quickly but struggles with production-readiness. Their MVPs work but lack tests, accessibility, and proper error handling. Refactoring for quality after launch is painful. They need a framework that enforces quality from the start so they can ship confidently.",
          challenges: "Technical debt compounds, bugs in production weekly",
          needs: "Automated quality gates and comprehensive testing",
          results: "Zero vulnerabilities, WCAG 2.1 AA compliant, rare production bugs",
        },
      ],
      learnings: [
        {
          title: "Context Engineering is Critical",
          description: "Each agent needs exactly the right context at the right time. Too much context causes confusion, too little causes mistakes. Just-in-time context delivery is the key to effective AI orchestration.",
        },
        {
          title: "Quality Gates Prevent Technical Debt",
          description: "Enforcing 100% test coverage, WCAG compliance, and security scans before deployment prevents technical debt from accumulating. Quality built in beats quality bolted on.",
        },
        {
          title: "The 60% Philosophy Works",
          description: "Shipping functional MVPs at 60-70% completion and iterating based on real user feedback is faster and more effective than waiting for 100% perfection in isolation.",
        },
        {
          title: "Parallel Execution Requires Clear Contracts",
          description: "Frontend and backend agents working simultaneously only works when they share exact API contracts. Contract-first development prevents integration nightmares.",
        },
      ],
      problem: {
        statement: "As a designer learning to build, I hit a wall. AI tools like Claude Code are powerful but painfully sequential. By the time I got to testing, the AI had forgotten the original requirements. Context loss was killing my velocity.",
        story: "I needed something that could work like a real development team. Multiple specialists collaborating in parallel, with a shared memory system that never forgets.\n\nTraditional AI development meant:\n- Sequential execution (design, then code, then test, then debug)\n- Constant context loss (by hour 3, the AI forgot what we wanted)\n- No quality enforcement (ship broken code, fix later)\n- 21 hours per feature on average\n\nI needed:\n- Parallel execution (all specialists working simultaneously)\n- Context engine (just-in-time context delivery)\n- Automated quality gates (100% test coverage enforced)\n- Ship in days, not weeks (5 hours per feature)",
        goals: [
          "Build a framework enabling parallel agent execution with coordinated dependencies",
          "Implement context engine that maintains project DNA across sessions",
          "Enforce quality gates (testing, accessibility, security) before deployment",
          "Enable designers and non-engineers to ship production code confidently",
        ],
      },
      context: {
        aiNativeDevelopment: "AI-native development represents a paradigm shift where AI agents are first-class development team members, not just coding assistants. Instead of a developer using AI to write individual functions, specialized AI agents handle entire layers of the stack—frontend, backend, testing, deployment—working in parallel with coordinated handoffs.",
        secondSaturday: "Second Saturday is a full-stack social network for friend groups, built entirely using FORGE. It's proof that the framework works: 24,400 lines of production code, 460 passing tests with 100% coverage, WCAG 2.1 AA accessibility compliance, and zero security vulnerabilities—all built in 75 hours over 45 days by a designer learning to code.",
      },
      discovery: {
        patternRecognition: "The breakthrough came from building Second Saturday. I started with Claude Code, excited to build my first full-stack app. But by hour 3, a pattern emerged: every time I switched from frontend to backend, the AI had forgotten the design decisions. When I got to testing, it had forgotten the requirements. I was spending more time re-explaining context than building.",
        realWorldValidation: "I wasn't alone. In Discord communities and Twitter threads, builders shared the same frustration: AI tools are brilliant for isolated tasks but terrible at maintaining project context across sessions. Everyone had their own hacky workarounds—massive context files, detailed prompt templates, constant re-explanation.",
        manualWorkflow: {
          title: "The Sequential AI Development Problem",
          description: "Building a single feature with AI traditionally required this painful sequence:",
          steps: [
            "Explain the feature requirements in detail",
            "Build the frontend component",
            "Re-explain requirements for backend",
            "Build the backend logic",
            "Re-explain requirements for tests",
            "Write tests (usually incomplete coverage)",
            "Debug integration issues because frontend and backend assumptions diverged",
            "Manual accessibility review (often skipped)",
            "Manual security review (often skipped)",
            "Deploy and hope nothing breaks",
          ],
          timePerFeature: "~21 hours",
          complexity: "Constant context loss, no quality enforcement, sequential bottlenecks",
          training: "Deep understanding of full-stack architecture required",
        },
        insight: "What if AI agents could work like a real development team? Frontend and backend agents working simultaneously, shared API contracts preventing integration issues, quality reviewers catching problems before deployment, and a context engine maintaining project DNA across all sessions.",
      },
      designProcess: {
        prototype: {
          approach: "I didn't write a spec—I built infrastructure as I built Second Saturday. Every feature became a test case for the framework. The newsletter feature exposed the need for parallel execution. The invitation system proved quality gates work. Photo uploads validated the context engine.",
          features: "9 specialized agents (Strategic Planner, Frontend, Backend, Orchestrator, Code Reviewer, UX Reviewer, Security Specialist, Deployment Agent, Main Session coordinator), 5-phase workflow (Planning → Parallel Execution → Integration → Deployment → Iteration), Context engine with just-in-time delivery, and API contract-first development to prevent integration nightmares.",
          magic: "Behind the scenes, the framework orchestrates dependencies: frontend and backend agents run in parallel but share exact API contracts. Quality reviewers have veto power—code doesn't ship without passing all gates. The context engine feeds each agent exactly what it needs, when it needs it, preventing information overload.",
        },
        validation: {
          approach: "Every Second Saturday feature was a validation experiment. Did the newsletter ship faster with parallel execution? (Yes: 5 hours vs 21 hours traditional.) Did quality gates catch issues? (Yes: zero production bugs from features built with FORGE.) Did the context engine maintain knowledge across sessions? (Yes: day 30 agents still remembered day 1 design decisions.)",
          response: "The numbers didn't lie. 76% faster feature development, 100% test coverage enforced, 6x speed improvement from parallelization. FORGE worked.",
        },
        strategicPositioning: {
          opportunity: "The timing is perfect. We're in the early innings of AI-native development. Most builders are still using AI as a smarter autocomplete. The opportunity exists to define what 'AI development frameworks' even mean—tools that orchestrate AI agents as team members, not just assistants.",
          pitch: "FORGE proves a new development model is possible: non-engineers shipping production-grade software with AI teams, quality enforcement built in from day one, and parallel execution replacing sequential workflows. This isn't about writing code faster—it's about fundamentally rethinking how products are built.",
          result: "Second Saturday shipped. Zero investors needed, zero technical debt, production-ready from day one.",
        },
        philosophy: {
          approach: "FORGE embraces 'The 60% Philosophy': ship functional MVPs at 60-70% completion and iterate based on real user feedback. Perfection in isolation is slow; good enough in production teaches you what actually matters.",
          structure: "Framework decisions were deliberate: strict agent boundaries prevent scope creep, quality gates are non-negotiable (better to block deployment than ship broken code), and context is permission-based (agents only see what's relevant to their role).",
          evolution: "What started as prompt templates evolved into a complete methodology: planning frameworks, API contract templates, test scaffolding patterns, deployment checklists. FORGE became not just a tool, but a repeatable process for AI-native development.",
        },
      },
      features: {
        title: "The FORGE Framework Architecture",
        description: "FORGE isn't just faster AI coding—it's a complete development methodology. Here's how it works:",
        mainFeature: {
          name: "9-Agent Orchestration System",
          whatItDid: "Coordinates specialized AI agents working in parallel across the entire stack. Each agent has specific expertise, tools, and boundaries. They communicate through standardized contracts and checkpoints.",
          whyItMattered: "Traditional AI development is sequential: design → code → test → deploy. FORGE enables parallel execution: frontend and backend agents work simultaneously while quality reviewers prepare their checks. What took 21 hours now takes 5.",
          designDecisions: [
            "Strict agent boundaries: Each agent has explicit permissions about what it can and cannot do. The Frontend agent can't touch backend code, preventing scope creep.",
            "Context engine: Instead of giving every agent all project context (causing overload), each agent receives just-in-time context relevant to their role.",
            "API contract-first: Frontend and backend agents must agree on exact API contracts before implementation. This prevents 'it works on my machine' integration failures.",
            "Quality gate enforcement: Code Reviewer, UX Reviewer, and Security Specialist have veto power. Deployment is blocked if any gate fails.",
            "5-phase workflow: Planning (decompose features, create contracts), Parallel Execution (agents work simultaneously), Integration (quality reviews, E2E tests), Deployment (staging → prod with rollback), Iteration (ship at 60%, refine based on feedback).",
          ],
          output: "Production-ready features with 100% test coverage, WCAG 2.1 AA accessibility compliance, zero security vulnerabilities, and full documentation—all in 5 hours instead of 21.",
        },
        workflowPhases: [
          { icon: "📋", title: "Planning", duration: "~2h", desc: "Brainstorm, decompose into stories, define API contracts, create Linear issues" },
          { icon: "⚡", title: "Parallel Execution", duration: "3-6h", desc: "Multiple agents work simultaneously with TDD enforced and API contracts aligned" },
          { icon: "🔗", title: "Integration", duration: "30-60m", desc: "Code review, UX review, security scan, E2E tests, visual regression checks" },
          { icon: "🚀", title: "Deployment", duration: "15-30m", desc: "Staging deployment → smoke tests → production with automated rollback" },
          { icon: "🔄", title: "Iterate", duration: "Continuous", desc: "Ship 60%, collect feedback, refine based on real usage patterns" },
        ],
        useCases: [
          {
            icon: "📧",
            title: "Monthly Newsletter Generation",
            time: "5h vs 21h traditional (76% faster)",
            complexity: "High",
            agents: 6,
            desc: "Built automated newsletter system with cron, Resend API, email templates, and archive view.",
          },
          {
            icon: "👥",
            title: "Group Invitation System",
            time: "3.5h",
            complexity: "Medium",
            agents: 5,
            desc: "Secure token generation, magic links, email delivery, and invitation state management.",
          },
          {
            icon: "📸",
            title: "Photo Upload with Cloudinary",
            time: "2h",
            complexity: "Low",
            agents: 3,
            desc: "Cloudinary integration with drag-and-drop upload, image optimization, and full testing.",
          },
        ],
        agentCards: [
          {
            icon: "🧭",
            title: "Main Session",
            subtitle: "Coordinator/Planner",
            description: "Orchestrates all specialized agents, maintains context, ensures alignment.",
            tools: "Linear MCP, GitHub MCP",
            colSpan: "col-span-1 md:col-span-2",
            rowSpan: "row-span-2",
            gradient: "from-primary/5 to-primary/10 border-primary/20",
          },
          {
            icon: "📋",
            title: "Strategic Planner",
            subtitle: "Feature Planning & Design",
            gradient: "from-orange-500/5 to-orange-500/10",
          },
          {
            icon: "🎨",
            title: "Frontend Agent",
            subtitle: "Pixel-Perfect UI Development",
            gradient: "from-green-500/5 to-green-500/10",
          },
          {
            icon: "🎯",
            title: "Orchestrator",
            subtitle: "Multi-Agent Coordination",
            colSpan: "col-span-1 md:col-span-2",
            gradient: "from-purple-500/5 to-purple-500/10",
          },
          {
            icon: "⚙️",
            title: "Backend Agent",
            subtitle: "Type-Safe Server Logic",
            gradient: "from-blue-500/5 to-blue-500/10",
          },
          {
            icon: "♿",
            title: "UX Reviewer",
            subtitle: "Accessibility & Design",
            gradient: "from-cyan-500/5 to-cyan-500/10",
          },
          {
            icon: "🔒",
            title: "Security Specialist",
            subtitle: "Vulnerability Detection",
            gradient: "from-amber-500/5 to-amber-500/10",
          },
          {
            icon: "🔍",
            title: "Code Reviewer",
            subtitle: "Quality & Standards",
            gradient: "from-emerald-500/5 to-emerald-500/10",
          },
          {
            icon: "🚀",
            title: "Deployment Agent",
            subtitle: "Automated CI/CD Pipeline",
            colSpan: "col-span-1 md:col-span-3",
            gradient: "from-indigo-500/5 to-indigo-500/10",
          },
        ],
        secondSaturdayStats: [
          { value: "75 hours", label: "Built over 45 days" },
          { value: "24,400", label: "Lines of code" },
          { value: "350", label: "Lines per hour" },
          { value: "460/460", label: "Tests passing" },
          { value: "100%", label: "Test coverage" },
          { value: "WCAG 2.1 AA", label: "Compliant" },
          { value: "Zero", label: "Vulnerabilities" },
          { value: "6x faster", label: "Than traditional" },
        ],
        beforeAfter: {
          before: [
            { label: "Features/Month", value: "2" },
            { label: "Test Coverage", value: "~40%" },
            { label: "Deployment Time", value: "2-3 days" },
            { label: "Bugs in Production", value: "Weekly" },
            { label: "Role", value: "Designer Only" },
            { label: "Feedback Loop", value: "Weeks" },
          ],
          after: [
            { label: "Features/Month", value: "8-10" },
            { label: "Test Coverage", value: "100%" },
            { label: "Deployment Time", value: "30 minutes" },
            { label: "Bugs in Production", value: "Rare" },
            { label: "Role", value: "Product Engineer" },
            { label: "Feedback Loop", value: "Days" },
          ],
        },
      },
      solution: {
        automation: {
          before: [
            { label: "Sequential Development", description: "Design, code, test, debug. One thing at a time, forever. Frontend waits for backend." },
            { label: "Constant Context Loss", description: "By hour 3, the AI has forgotten your original requirements. Constantly re-explaining." },
            { label: "No Quality Enforcement", description: "Ship code and hope tests catch bugs later. Technical debt compounds." },
            { label: "Takes Forever", description: "21 hours to build a single feature. Weeks to validate an idea." },
          ],
          after: [
            { label: "Parallel Execution", description: "9 specialized agents working simultaneously. No waiting, no blocking." },
            { label: "Context Engine", description: "Just-in-time context delivery. Framework remembers your project's DNA." },
            { label: "Automated Quality Gates", description: "100% test coverage enforced. Code doesn't ship without passing all checks." },
            { label: "Ship in Days", description: "5 hours per feature instead of 21. Ideas validated in 48 hours." },
          ],
          summary: "FORGE orchestrates 9 specialized agents (Strategic Planner, Frontend, Backend, Orchestrator, Code Reviewer, UX Reviewer, Security Specialist, Deployment Agent) through 5 phases: Planning, Parallel Execution, Integration, Deployment, and Iteration. Each agent has specific expertise, tools, and strict rules about what it can and cannot do.",
        },
        adoption: {
          description: "I built FORGE out of necessity while creating Second Saturday, a full-stack social network for friend groups. Every feature I shipped refined the framework. The newsletter feature (built in 5 hours vs 21 hours traditionally) proved the parallel execution model worked. The invitation system (3.5 hours) showed the quality gates caught issues before production. Photo uploads with Cloudinary (2 hours) demonstrated the context engine maintained project knowledge across sessions.\n\nWhat started as a set of agent prompts evolved into a complete development framework with planning methodology, API contract definitions, test templates, and deployment automation.",
          metrics: [
            { value: "450+ hours", label: "Traditional Development Time" },
            { value: "75 hours", label: "Actual Time with FORGE" },
          ],
        },
      },
      impact: {
        quantified: {
          timeSavings: {
            before: "~21 hours per feature",
            after: "~5 hours per feature",
            savings: "~16 hours per feature (76% reduction)",
          },
          scale: {
            featuresBefore: "2 features per month (sequential, manual testing, context loss)",
            featuresAfter: "8-10 features per month (parallel execution, automated quality gates)",
            productivityMultiplier: "4-5x increase in feature velocity",
            qualityImprovement: "From ~40% test coverage to 100% enforced coverage, zero security vulnerabilities",
          },
          additionalBenefits: [
            "Eliminated 'designer learning curve' barrier—shipped production code within weeks of learning",
            "Zero technical debt accumulation (quality gates prevent bad code from merging)",
            "Enabled solo product development without hiring a full engineering team",
            "Made accessibility and security non-negotiable through automated enforcement",
          ],
        },
        qualitative: {
          userFeedback: [
            {
              quote: "This is exactly what I needed—I can't believe we used to do this manually.",
              persona: "Alex (Designer Learning to Code)",
            },
            {
              quote: "FORGE turned me from a designer into a product engineer. I ship features now.",
              persona: "Alex (Designer Learning to Code)",
            },
            {
              quote: "Parallel execution is a game-changer. I'm building 4x faster without sacrificing quality.",
              persona: "Jordan (Solo Founder)",
            },
            {
              quote: "Quality gates saved me from shipping broken code multiple times. It's like having a senior engineer reviewing everything.",
              persona: "Riley (Product Builder)",
            },
          ],
          executiveImpact: "Proved that AI-native development can produce production-grade software. Second Saturday demonstrates what's possible when non-engineers have access to orchestrated AI teams.",
          recognition: "Building a full-stack social network in 75 hours as a designer learning to code—with 100% test coverage and zero vulnerabilities—validates FORGE as a new development paradigm.",
        },
      },
      reflection: {
        successful: [
          "Built infrastructure as I built product: FORGE emerged from real needs while building Second Saturday, not from theoretical requirements. Every feature validated or invalidated framework decisions.",
          "Quality gates were non-negotiable from day one: Enforcing 100% test coverage, accessibility, and security prevented technical debt. Code that doesn't pass all gates simply doesn't ship.",
          "Parallel execution proves the model: Frontend and backend agents working simultaneously cut development time by 76%. The secret is API contract-first development—no integration surprises.",
          "Context engine solved the biggest pain point: AI tools forget. FORGE's just-in-time context delivery means agents remember project DNA across sessions without information overload.",
          "The 60% Philosophy works: Shipping MVPs at 60-70% completion and iterating based on real feedback is faster than waiting for 100% perfection in isolation.",
        ],
        doingDifferently: [
          "Document the agent prompts earlier: The specialized agent prompts evolved organically. I wish I'd formalized them sooner for easier replication.",
          "Measure more granular metrics: While I tracked overall time savings, I wish I'd instrumented per-phase timing to understand where parallelization provided the most value.",
          "Build the context engine as a standalone tool: The context engine is powerful but tightly coupled to FORGE. It could be a standalone tool for any AI development workflow.",
          "Test with other builders sooner: I validated FORGE by building Second Saturday. Testing with other designers/builders would have uncovered edge cases earlier.",
          "Create better onboarding: The 9-agent system has a learning curve. Structured onboarding (videos, templates, guided first feature) would accelerate adoption.",
        ],
      },
      skillsDemonstrated: [
        {
          title: "Systems Architecture",
          description: "Designed a 9-agent orchestration system with clear boundaries, standardized contracts, and dependency management. Built context engine to deliver just-in-time information to each agent.",
          icon: "🏗️",
        },
        {
          title: "Automation & DevOps",
          description: "Automated quality gates (testing, accessibility, security) and deployment pipelines. Enforced standards through tooling, not documentation. Code doesn't ship without passing all checks.",
          icon: "⚙️",
        },
        {
          title: "Product Strategy",
          description: "Validated framework through real product development (Second Saturday). Embraced 'The 60% Philosophy'—ship functional MVPs and iterate based on real feedback rather than waiting for perfection.",
          icon: "🎯",
        },
        {
          title: "Framework Design",
          description: "Created repeatable development methodology with planning frameworks, API contract templates, test scaffolding patterns, and deployment checklists. FORGE is a process, not just prompts.",
          icon: "📐",
        },
      ],
    },
    {
      title: "KAI Security",
      href: "https://canal-stone-13098249.figma.site/",
      dates: "4-Day Take-Home Assignment",
      active: true,
      description:
        "Transformed a vague design brief into a strategic IA solution. Potential reduction in security engineers' time-to-action from 2-5 minutes to <10 seconds through dual-mode interface and intelligent clustering.",
      technologies: [
        "Product Strategy",
        "Information Architecture",
        "Interaction Design",
        "Figma",
        "Competitor Analysis",
      ],
      links: [],
      image: "",
      video: "",
      subtitle: "Take-Home Assignment (4 days)",
    },
  ],
  hackathons: [],
} as const;
