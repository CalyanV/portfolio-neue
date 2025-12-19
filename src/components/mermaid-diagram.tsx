"use client";

import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";

interface MermaidDiagramProps {
  chart: string;
  className?: string;
}

export function MermaidDiagram({ chart, className = "" }: MermaidDiagramProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Check for dark mode
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkDarkMode();

    // Listen for theme changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isClient) return;

    mermaid.initialize({
      startOnLoad: true,
      theme: isDark ? "dark" : "default",
      securityLevel: "loose",
      fontFamily: "system-ui, -apple-system, sans-serif",
    });

    if (ref.current) {
      // Clear previous content and re-render
      ref.current.innerHTML = chart;
      mermaid.contentLoaded();
    }
  }, [chart, isClient, isDark]);

  if (!isClient) {
    return <div className={className} style={{ minHeight: "200px" }} />;
  }

  return <div ref={ref} className={`mermaid ${className}`} />;
}
