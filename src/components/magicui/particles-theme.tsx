"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Particles from "./particles";

interface ParticlesThemeProps {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
  refresh?: boolean;
}

export default function ParticlesTheme({
  className = "",
  quantity = 500,
  staticity = 50,
  ease = 80,
  refresh = false,
}: ParticlesThemeProps) {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <Particles
      className={className}
      quantity={quantity}
      staticity={staticity}
      ease={ease}
      refresh={refresh}
      color={color}
    />
  );
}
