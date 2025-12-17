"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const BLUR_FADE_DELAY = 0.04;

export function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Add form submission logic
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="w-full py-24 lg:py-32">
      <div className="px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-10 lg:grid-cols-2">
          {/* Left Column: Text Content */}
          <div className="space-y-4">
            <BlurFade delay={BLUR_FADE_DELAY * 16}>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Get in Touch
              </h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 17}>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Send me a message and I&apos;ll respond whenever I can.
              </p>
            </BlurFade>
          </div>

          {/* Right Column: Contact Form */}
          <BlurFade delay={BLUR_FADE_DELAY * 18}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Enter your message"
                  rows={5}
                  required
                />
              </div>
              <InteractiveHoverButton type="submit" className="w-full">
                Send Message
              </InteractiveHoverButton>
            </form>
          </BlurFade>
        </div>
        </div>
      </div>
    </section>
  );
}
