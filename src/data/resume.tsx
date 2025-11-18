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
      video: "",
      subtitle: "Automating Supply Chain Insights for Global Retail Teams",
      splineUrl: "https://prod.spline.design/g30VOwmMAPvtDYGb/scene.splinecode",
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
      title: "FORGE",
      href: "/projects/forge",
      dates: "Oct 2025 - Nov 2025 (75 hours)",
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
      image: "",
      video: "",
      subtitle: "The AI Framework That Ships Features 76% Faster",
      splineUrl: "",
      hasNDA: false,
      overview: {
        intro: "I went from 'I can't code' to 'I shipped a full-stack social network in 75 hours' by building infrastructure to orchestrate AI. FORGE is a 9-agent framework that enables parallel execution, enforces quality gates, and maintains context across sessions.",
        timeline: "Oct 2024 - Nov 2024 (75 hours over 45 days)",
        platform: "Full-Stack Framework",
        role: "Framework Architect, Product Engineer",
        team: "Solo project",
        goal: "Build an AI framework that enables designers and non-engineers to ship production-ready features quickly with enforced quality standards.",
        users: "Product builders, designers learning to code, solo founders, and anyone wanting to build full-stack products with AI assistance.",
        results: "Built Second Saturday (full-stack social network) in 75 hours over 45 days with 24,400 lines of production code at 350 lines/hour, 460/460 tests passing with 100% coverage, WCAG 2.1 AA compliance, and zero security vulnerabilities.",
      },
      metrics: {
        impact: [
          {
            value: "76%",
            label: "Faster Feature Development",
          },
          {
            value: "100%",
            label: "Test Coverage Enforced",
          },
          {
            value: "5h",
            label: "Avg Time Per Feature (vs 21h)",
          },
          {
            value: "4-6x",
            label: "Parallel Speed Improvement",
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
