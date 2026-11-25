"use client";

import { Canvas, type CanvasProps } from "@react-three/fiber";
import { Suspense, use, type ReactNode } from "react";
import { browser } from "react-dom";

export type SceneCanvasProps = Omit<CanvasProps, "children"> & {
  children?: ReactNode;
};

function WebGLCanvas({ children, ...props }: SceneCanvasProps) {
  use(browser("WebGL renders in the browser only."));

  return (
    <Canvas {...props}>
      <Suspense fallback={null}>{children}</Suspense>
    </Canvas>
  );
}

export function SceneCanvas(props: SceneCanvasProps) {
  return (
    <Suspense fallback={null}>
      <WebGLCanvas {...props} />
    </Suspense>
  );
}
