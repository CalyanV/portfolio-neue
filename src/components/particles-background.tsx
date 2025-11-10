"use client"

import { useTheme } from "next-themes"
import { Particles } from "./ui/particles"

export function ParticlesBackground() {
  const { theme } = useTheme()

  return (
    <Particles
      className="absolute inset-0 -z-10 pointer-events-none"
      quantity={500}
      ease={80}
      staticity={50}
      color={theme === "dark" ? "#ffffff" : "#000000"}
      refresh={false}
    />
  )
}
