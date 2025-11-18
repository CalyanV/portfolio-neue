"use client";

import { useEffect, useRef } from "react";

interface AnimatedGridPatternProps {
  numSquares?: number;
  maxOpacity?: number;
  duration?: number;
  repeatDelay?: number;
  className?: string;
}

export const AnimatedGridPattern: React.FC<AnimatedGridPatternProps> = ({
  numSquares = 50,
  maxOpacity = 0.5,
  duration = 4,
  repeatDelay = 0.5,
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const container = ref.current;
    const squareSize = 40;
    const cols = Math.ceil(container.clientWidth / squareSize);
    const rows = Math.ceil(container.clientHeight / squareSize);

    // Clear existing content
    container.innerHTML = "";

    // Create SVG grid
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", String(container.clientWidth));
    svg.setAttribute("height", String(container.clientHeight));
    svg.setAttribute("class", "absolute inset-0");

    // Draw grid lines
    for (let i = 0; i <= cols; i++) {
      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("x1", String(i * squareSize));
      line.setAttribute("y1", "0");
      line.setAttribute("x2", String(i * squareSize));
      line.setAttribute("y2", String(container.clientHeight));
      line.setAttribute("stroke", "currentColor");
      line.setAttribute("stroke-width", "0.5");
      line.setAttribute("opacity", "0.2");
      svg.appendChild(line);
    }

    for (let i = 0; i <= rows; i++) {
      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("x1", "0");
      line.setAttribute("y1", String(i * squareSize));
      line.setAttribute("x2", String(container.clientWidth));
      line.setAttribute("y2", String(i * squareSize));
      line.setAttribute("stroke", "currentColor");
      line.setAttribute("stroke-width", "0.5");
      line.setAttribute("opacity", "0.2");
      svg.appendChild(line);
    }

    container.appendChild(svg);

    // Create animated squares
    for (let i = 0; i < numSquares; i++) {
      const square = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
      );
      const randomX = Math.random() * container.clientWidth;
      const randomY = Math.random() * container.clientHeight;
      const randomDelay = Math.random() * (duration + repeatDelay);
      const randomDuration = duration + Math.random() * 2;

      square.setAttribute("x", String(randomX));
      square.setAttribute("y", String(randomY));
      square.setAttribute("width", String(squareSize));
      square.setAttribute("height", String(squareSize));
      square.setAttribute("fill", "currentColor");
      square.setAttribute("rx", "4");
      square.setAttribute("class", "animate-pulse");
      square.style.animation = `fadeInOut ${randomDuration}s ease-in-out ${randomDelay}s infinite`;
      square.style.opacity = "0";

      const gridSvg = container.querySelector("svg");
      if (gridSvg) {
        gridSvg.parentElement?.appendChild(square);
      }
    }

    // Add animation keyframes
    if (!document.getElementById("grid-animation-keyframes")) {
      const style = document.createElement("style");
      style.id = "grid-animation-keyframes";
      style.textContent = `
        @keyframes fadeInOut {
          0%, 100% { opacity: 0; }
          50% { opacity: ${maxOpacity}; }
        }
      `;
      document.head.appendChild(style);
    }
  }, [numSquares, maxOpacity, duration, repeatDelay]);

  return (
    <div
      ref={ref}
      className={`relative w-full h-full overflow-hidden ${className || ""}`}
    />
  );
};

export default AnimatedGridPattern;
