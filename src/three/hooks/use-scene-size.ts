"use client";

import { useThree } from "@react-three/fiber";

export function useSceneSize() {
  return useThree((state) => state.size);
}
