import { UseCaseCard } from "./use-case-card";

// Example use cases data for FORGE case study
const useCaseExamples = [
  {
    icon: "📧",
    title: "Monthly Newsletter System",
    timeSaved: "5h vs 21h traditional (76% faster)",
    complexity: "High",
    agents: 6,
    impact:
      "Automated multi-section newsletter generation with dynamic content sourcing, personalization, and multi-channel distribution.",
    requirement:
      "Build a system to automatically generate and distribute monthly newsletters featuring events, articles, member spotlights, and community updates with minimal manual effort.",
    challenges: [
      "Content aggregation from multiple sources (events calendar, blog, member database)",
      "Dynamic personalization based on member interests and engagement history",
      "Multi-format output (HTML email, PDF archive, web preview)",
      "Scheduling and distribution across different time zones",
      "A/B testing different subject lines and content arrangements",
    ],
    timeline: [
      {
        phase: "Planning & Architecture",
        duration: "45 min",
        description:
          "Designed agent orchestration flow and defined data sources",
      },
      {
        phase: "Agent Development",
        duration: "2.5 hours",
        description:
          "Built 6 specialized agents: Content Aggregator, Personalization Engine, Template Builder, Preview Generator, Distribution Manager, Analytics Tracker",
      },
      {
        phase: "Integration & Testing",
        duration: "1.5 hours",
        description:
          "Connected agents, tested workflows, implemented error handling",
      },
      {
        phase: "Refinement",
        duration: "45 min",
        description: "Optimized performance, added scheduling capabilities",
      },
    ],
    whatShipped: [
      "Automated content curation from 5+ different data sources",
      "Dynamic personalization engine supporting 12 member segments",
      "Multi-format output generator (HTML, PDF, plain text)",
      "Intelligent send-time optimization based on engagement patterns",
      "Real-time preview interface for last-minute edits",
      "Comprehensive analytics dashboard tracking open rates and clicks",
    ],
    userFeedback: {
      quote:
        "What used to take our communications team a full day now happens in under an hour. The personalization is better than what we did manually.",
      author: "Sarah Chen, Communications Director",
    },
  },
  {
    icon: "🎉",
    title: "Group Invitation System",
    timeSaved: "3.5h vs 12h traditional (71% faster)",
    complexity: "Medium",
    agents: 5,
    impact:
      "Streamlined group event creation with smart guest list management, automated reminders, and RSVP tracking.",
    requirement:
      "Create a feature allowing members to invite groups to events with smart filtering, batch invitations, and automated follow-ups.",
    challenges: [
      "Complex filtering logic for group selection (by interests, location, membership tier)",
      "Avoiding duplicate invitations across overlapping groups",
      "Managing different notification preferences and schedules",
      "Tracking RSVPs and generating real-time attendance reports",
    ],
    timeline: [
      {
        phase: "Requirements Analysis",
        duration: "30 min",
        description:
          "Mapped out user flows and identified edge cases with duplicate invitations",
      },
      {
        phase: "Agent Implementation",
        duration: "2 hours",
        description:
          "Built Group Filter Agent, Invitation Orchestrator, RSVP Tracker, Reminder Scheduler, Analytics Agent",
      },
      {
        phase: "UI Integration",
        duration: "45 min",
        description: "Connected agents to frontend invitation form",
      },
      {
        phase: "Testing & Deployment",
        duration: "15 min",
        description: "Tested edge cases and deployed to production",
      },
    ],
    whatShipped: [
      "Advanced group filtering with 15+ filter criteria",
      "Smart duplicate detection preventing double invitations",
      "Batch invitation processor handling 1000+ invites/minute",
      "Automated reminder system with customizable schedules",
      "Real-time RSVP dashboard with attendance forecasting",
    ],
    userFeedback: {
      quote:
        "The smart filtering saved us hours. We can now target exactly the right audience without manual spreadsheet work.",
      author: "Mike Rodriguez, Events Coordinator",
    },
  },
  {
    icon: "📸",
    title: "Photo Upload & Processing",
    timeSaved: "2h vs 8h traditional (75% faster)",
    complexity: "Low",
    agents: 3,
    impact:
      "Automated image upload with intelligent processing, compression, and gallery organization.",
    requirement:
      "Enable bulk photo uploads for events with automatic resizing, compression, face detection, and smart album creation.",
    challenges: [
      "Handling large batch uploads without blocking the UI",
      "Optimizing images for web while maintaining quality",
      "Organizing photos into albums based on content and metadata",
    ],
    timeline: [
      {
        phase: "Setup & Configuration",
        duration: "20 min",
        description:
          "Configured image processing pipeline and storage integration",
      },
      {
        phase: "Agent Development",
        duration: "1 hour",
        description:
          "Built Upload Manager, Image Processor, Album Organizer agents",
      },
      {
        phase: "Testing & Polish",
        duration: "40 min",
        description: "Tested with various image formats and large batches",
      },
    ],
    whatShipped: [
      "Drag-and-drop bulk upload supporting 100+ images",
      "Automatic image optimization (WebP conversion, responsive variants)",
      "Smart album creation based on EXIF data and upload patterns",
      "Progress tracking with retry logic for failed uploads",
      "Gallery preview with lazy loading and infinite scroll",
    ],
    liveExample: "https://example.com/photos/demo",
    userFeedback: {
      quote:
        "Uploading photos from our conference used to be a nightmare. Now it's literally drag, drop, and done.",
      author: "Emma Thompson, Community Manager",
    },
  },
];

// Example usage component
export function UseCaseExamplesSection() {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl font-bold">Real Features Built with FORGE</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          These aren't mockups or prototypes. These are production features
          serving thousands of users, built in a fraction of the traditional
          development time.
        </p>
      </div>

      <div className="grid gap-6">
        {useCaseExamples.map((useCase, index) => (
          <UseCaseCard key={index} useCase={useCase} />
        ))}
      </div>
    </div>
  );
}

// Export use cases for individual use
export { useCaseExamples };
