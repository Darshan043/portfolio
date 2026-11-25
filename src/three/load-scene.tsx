"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";

export function loadScene<P extends object>(
  loader: () => Promise<{ default: ComponentType<P> }>,
) {
  return dynamic(loader, { ssr: false });
}
