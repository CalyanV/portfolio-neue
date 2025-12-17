/**
 * Example usage of PhaseTimeline component
 *
 * This file demonstrates how to use the PhaseTimeline component
 * in your FORGE case study page.
 */

import { PhaseTimeline, DEFAULT_FORGE_PHASES } from "./phase-timeline";

export function PhaseTimelineExample() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          FORGE Workflow
        </h2>
        <p className="text-lg text-muted-foreground">
          Our AI-powered development process follows a structured 5-phase workflow
          that ensures quality, speed, and reliability.
        </p>
      </div>

      {/* Use the PhaseTimeline component with default phases */}
      <PhaseTimeline phases={DEFAULT_FORGE_PHASES} />

      {/* Or customize with your own phases */}
      {/*
      <PhaseTimeline
        phases={[
          {
            id: "custom-phase",
            icon: "🎯",
            title: "Custom Phase",
            duration: "1h",
            description: "Your custom phase description",
            details: {
              whatHappens: ["Step 1", "Step 2"],
              output: ["Output 1"],
              rules: ["Rule 1"]
            }
          }
        ]}
        className="mt-8"
      />
      */}
    </section>
  );
}
