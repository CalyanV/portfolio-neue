"use client";

import { DATA } from "@/data/resume";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-border py-12">
      <div className="px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="font-bold text-lg">{DATA.name}</h3>
              <p className="text-sm text-muted-foreground max-w-xs">
                {DATA.description}
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Quick Links</h4>
              <nav className="flex flex-col space-y-2">
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/projects"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Projects
                </Link>
                <Link
                  href="/blog"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blog
                </Link>
              </nav>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Connect</h4>
              <div className="flex gap-4">
                {Object.entries(DATA.contact.social).map(([platform, data]: [string, any]) => {
                  const IconComponent = data.icon;
                  return (
                    <Link
                      key={platform}
                      href={data.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={platform}
                    >
                      <IconComponent className="size-5" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} {DATA.name}. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Built with Next.js, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
