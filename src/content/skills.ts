import { z } from "zod";

export const skillIconNames = [
  "react",
  "html",
  "css",
  "node",
  "python",
  "genai",
  "llm",
  "mongodb",
  "postgresql",
  "supabase",
] as const;

const skillSchema = z.object({
  name: z.string().min(1),
  icon: z.enum(skillIconNames),
});

export const skills = z
  .array(skillSchema)
  .length(10)
  .parse([
    { name: "React", icon: "react" },
    { name: "HTML", icon: "html" },
    { name: "CSS", icon: "css" },
    { name: "Node.js", icon: "node" },
    { name: "Python", icon: "python" },
    { name: "Generative AI", icon: "genai" },
    { name: "Large Language Models", icon: "llm" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "Supabase", icon: "supabase" },
  ]);

export type Skill = z.infer<typeof skillSchema>;
export type SkillIconName = (typeof skillIconNames)[number];
