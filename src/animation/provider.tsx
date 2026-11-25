"use client";

import { useEffect, type ReactNode } from "react";
import { ensureScrollLoop, stopScrollLoop } from "@/animation/loop";
import { REDUCED_MOTION_QUERY } from "@/animation/reduced-motion";
import "lenis/dist/lenis.css";

export function AnimationProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const media = window.matchMedia(REDUCED_MOTION_QUERY);

    const sync = () => {
      ensureScrollLoop();
    };

    sync();
    media.addEventListener("change", sync);

    return () => {
      media.removeEventListener("change", sync);
      stopScrollLoop();
    };
  }, []);

  return children;
}
