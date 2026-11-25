/**
 * Component transitions can import `motion/react` through this loader.
 * Keep scroll-linked work on the single GSAP ticker in `loop.ts`.
 */
export function loadMotion() {
  return import("motion/react");
}
