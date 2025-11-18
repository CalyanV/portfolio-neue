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

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    mermaid.initialize({
      startOnLoad: true,
      theme: "default",
      securityLevel: "loose",
      fontFamily: "system-ui, -apple-system, sans-serif",
    });

    if (ref.current) {
      // Clear previous content
      ref.current.innerHTML = chart;
      mermaid.contentLoaded();
    }
  }, [chart, isClient]);

  if (!isClient) {
    return <div className={className} style={{ minHeight: "200px" }} />;
  }

  return <div ref={ref} className={`mermaid ${className}`} />;
}
