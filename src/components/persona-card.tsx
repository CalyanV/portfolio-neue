"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export interface Persona {
  name: string;
  age?: number;
  title: string;
  image?: string;
  description: string;
  challenges?: string;
  needs?: string;
}

interface PersonaCardProps {
  persona: Persona;
  delay?: number;
}

export function PersonaCard({ persona, delay = 0 }: PersonaCardProps) {
  const initials = persona.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <BlurFade delay={delay} inView>
      <div className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow">
        {/* Header with Avatar */}
        <div className="flex items-center gap-4 mb-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={persona.image} alt={persona.name} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-xl font-semibold text-foreground">
              {persona.name}
              {persona.age && (
                <span className="text-neutral-500 ml-2">({persona.age})</span>
              )}
            </h3>
            <p className="text-sm text-muted-foreground">
              {persona.title}
            </p>
          </div>
        </div>

        {/* Description */}
        {persona.description && (
          <div className="mb-4">
            <p className="text-sm text-foreground">
              {persona.description}
            </p>
          </div>
        )}

        {/* Challenges */}
        {persona.challenges && (
          <div className="mb-3">
            <h4 className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase mb-1">
              Challenges
            </h4>
            <p className="text-sm text-foreground">
              {persona.challenges}
            </p>
          </div>
        )}

        {/* Needs */}
        {persona.needs && (
          <div>
            <h4 className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase mb-1">
              Needs
            </h4>
            <p className="text-sm text-foreground">
              {persona.needs}
            </p>
          </div>
        )}
      </div>
    </BlurFade>
  );
}

interface PersonaGridProps {
  personas: Persona[];
}

export function PersonaGrid({ personas }: PersonaGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
      {personas.map((persona, index) => (
        <PersonaCard
          key={persona.name}
          persona={persona}
          delay={0.1 + index * 0.1}
        />
      ))}
    </div>
  );
}
