"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return (
      <Button variant="ghost" type="button" size="icon" className="px-2">
        <span className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      type="button"
      size="icon"
      className="px-2"
      onClick={toggleTheme}
    >
      {resolvedTheme === "dark" ? (
        <MoonIcon className="h-[1.2rem] w-[1.2rem] text-neutral-200" />
      ) : (
        <SunIcon className="h-[1.2rem] w-[1.2rem] text-neutral-800" />
      )}
    </Button>
  );
}
