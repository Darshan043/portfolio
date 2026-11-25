"use client";

import type { ReactNode } from "react";
import { ClientCanvas } from "@/three/client-canvas";
import type { SceneCanvasProps } from "@/three/scene-canvas";
import { cn } from "@/lib/utils";

export type BaseSceneProps = {
  className?: string;
  children?: ReactNode;
  canvas?: Omit<SceneCanvasProps, "children">;
};

export function BaseScene({ className, children, canvas }: BaseSceneProps) {
  return (
    <div className={cn("h-full w-full", className)}>
      <ClientCanvas {...canvas}>{children}</ClientCanvas>
    </div>
  );
}
