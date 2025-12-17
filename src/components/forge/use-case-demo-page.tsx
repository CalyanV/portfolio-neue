/**
 * DEMO PAGE - UseCaseCard Component
 *
 * This file demonstrates how to use the UseCaseCard component
 * in a full page layout for the FORGE case study.
 *
 * Usage: Import this component into your FORGE project page
 */

import { UseCaseCard } from "./use-case-card";
import { useCaseExamples } from "./use-case-examples";

export function UseCaseDemoPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      {/* Header Section */}
      <div className="text-center space-y-6 mb-16">
        <div className="inline-block">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
            Real Production Features
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Built with FORGE
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          These aren't mockups or prototypes. These are production features
          serving thousands of users, built in a fraction of the traditional
          development time.
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="text-center p-6 rounded-lg border border-border bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-950">
          <div className="text-3xl font-bold text-accent mb-2">74%</div>
          <div className="text-sm text-muted-foreground">
            Average Time Savings
          </div>
        </div>
        <div className="text-center p-6 rounded-lg border border-border bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-950">
          <div className="text-3xl font-bold text-accent mb-2">14</div>
          <div className="text-sm text-muted-foreground">
            Specialized Agents
          </div>
        </div>
        <div className="text-center p-6 rounded-lg border border-border bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-950">
          <div className="text-3xl font-bold text-accent mb-2">3</div>
          <div className="text-sm text-muted-foreground">
            Production Features
          </div>
        </div>
      </div>

      {/* Use Case Cards */}
      <div className="space-y-6">
        {useCaseExamples.map((useCase, index) => (
          <UseCaseCard
            key={index}
            useCase={useCase}
            defaultOpen={index === 0} // First card starts open
          />
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center p-8 rounded-lg border border-border bg-gradient-to-br from-accent/5 to-accent/10">
        <h2 className="text-2xl font-bold mb-4">
          Want to see FORGE in action?
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          These use cases represent just a fraction of what's possible with
          FORGE. The platform continues to evolve with new agents and
          capabilities being added regularly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#architecture"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors"
          >
            View Architecture
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border font-medium hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}

// Alternative: Minimal version without header/footer
export function UseCaseCardsOnly() {
  return (
    <div className="space-y-6">
      {useCaseExamples.map((useCase, index) => (
        <UseCaseCard key={index} useCase={useCase} />
      ))}
    </div>
  );
}

// Alternative: Single use case showcase
export function SingleUseCaseShowcase() {
  const featuredUseCase = useCaseExamples[0]; // Monthly Newsletter

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Featured Use Case</h2>
        <p className="text-muted-foreground">
          Our most complex implementation showcasing FORGE's multi-agent
          orchestration capabilities.
        </p>
      </div>
      <UseCaseCard useCase={featuredUseCase} defaultOpen />
    </div>
  );
}
