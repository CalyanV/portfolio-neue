"use client"

import { useTheme } from "next-themes"
import { usePathname } from "next/navigation"
import { Particles } from "./ui/particles"

export function ParticlesBackground() {
  const { theme } = useTheme()
  const pathname = usePathname()

  // Hide particles on project pages
  const isProjectPage = pathname?.startsWith("/projects/") && pathname !== "/projects"

  if (isProjectPage) {
    return null
  }

  return (
    <Particles
      className="fixed inset-0 -z-10 pointer-events-none"
      quantity={500}
      ease={80}
      staticity={50}
      color={theme === "dark" ? "#ffffff" : "#000000"}
      refresh={false}
    />
  )
}
