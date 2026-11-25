import { REDUCED_MOTION_QUERY } from "@/animation/reduced-motion";

type ScrollLoop = {
  stop: () => void;
};

let token = 0;
let pendingToken: number | null = null;
let activeLoop: ScrollLoop | null = null;

export function stopScrollLoop() {
  token += 1;
  pendingToken = null;
  activeLoop?.stop();
}

function motionAllowed() {
  return !window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

/**
 * One GSAP ticker drives Lenis. Lenis does not start its own rAF loop.
 * The ticker stays off when the user prefers reduced motion.
 */
export function ensureScrollLoop() {
  if (typeof window === "undefined") {
    return;
  }

  if (!motionAllowed()) {
    stopScrollLoop();
    return;
  }

  if (activeLoop || pendingToken === token) {
    return;
  }

  const myToken = token;
  pendingToken = myToken;

  void (async () => {
    try {
      const [{ gsap, ScrollTrigger, registerGsapPlugins }, { default: Lenis }] =
        await Promise.all([import("@/animation/gsap"), import("lenis")]);

      if (myToken !== token || !motionAllowed() || activeLoop) {
        return;
      }

      registerGsapPlugins();

      const lenis = new Lenis({
        autoRaf: false,
        respectReducedMotion: true,
      });

      if (myToken !== token || !motionAllowed()) {
        lenis.destroy();
        return;
      }

      const onScroll = () => {
        ScrollTrigger.update();
      };

      lenis.on("scroll", onScroll);

      const onTick = (time: number) => {
        lenis.raf(time * 1000);
      };

      gsap.ticker.add(onTick);
      gsap.ticker.lagSmoothing(0);

      let stopped = false;
      const loop: ScrollLoop = {
        stop() {
          if (stopped) {
            return;
          }

          stopped = true;
          gsap.ticker.remove(onTick);
          gsap.ticker.lagSmoothing(500, 33);
          lenis.off("scroll", onScroll);
          lenis.destroy();

          if (activeLoop === loop) {
            activeLoop = null;
          }
        },
      };

      if (myToken !== token || !motionAllowed()) {
        loop.stop();
        return;
      }

      activeLoop = loop;
    } finally {
      if (pendingToken === myToken) {
        pendingToken = null;
      }
    }
  })();
}
