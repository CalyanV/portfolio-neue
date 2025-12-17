"use client";

import React, { useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";

interface SmoothScrollProps {
  children: React.ReactNode;
}

function SmoothScroll({ children }: SmoothScrollProps) {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    // Start lenis on mount
    lenis.start();

    return () => {
      // Stop lenis on unmount
      lenis.stop();
    };
  }, [lenis]);

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.125,
        duration: 1.5,
       smoothWheel: true,
        syncTouch: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;
