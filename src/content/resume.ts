import { z } from "zod";

const resumeSchema = z.object({
  title: z.literal("My Resume"),
  description: z.literal(
    "Explore my professional resume to learn more about my skills, experience, projects, and education.",
  ),
  href: z.literal("/resume/Darshan_AR_Resume.pdf"),
  fileName: z.literal("Darshan_AR_Resume.pdf"),
});

export const resume = resumeSchema.parse({
  title: "My Resume",
  description:
    "Explore my professional resume to learn more about my skills, experience, projects, and education.",
  href: "/resume/Darshan_AR_Resume.pdf",
  fileName: "Darshan_AR_Resume.pdf",
});

export type Resume = z.infer<typeof resumeSchema>;
