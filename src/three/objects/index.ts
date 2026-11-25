/** GLB and GLTF files in `public/models` are served from this path. */
export const MODEL_PUBLIC_PATH = "/models" as const;

export type ModelSource = {
  src: `${typeof MODEL_PUBLIC_PATH}/${string}`;
};
