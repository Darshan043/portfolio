"use client";

import dynamic from "next/dynamic";
import type { SceneCanvasProps } from "@/three/scene-canvas";

const SceneCanvas = dynamic(
  () => import("@/three/scene-canvas").then((mod) => mod.SceneCanvas),
  { ssr: false },
);

export function ClientCanvas(props: SceneCanvasProps) {
  return <SceneCanvas {...props} />;
}
