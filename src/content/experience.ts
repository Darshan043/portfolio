import { z } from "zod";

const experienceSchema = z.object({
  company: z.string().min(1),
  role: z.string().min(1),
  duration: z.string().min(1),
  description: z.string().min(1),
  logo: z.object({
    src: z.string().min(1),
    alt: z.string().min(1),
    width: z.number().int().positive(),
    height: z.number().int().positive(),
  }),
});

export const experiences = z
  .array(experienceSchema)
  .length(2)
  .parse([
    {
      company: "Datamoo.AI",
      role: "AI Engineer",
      duration: "June 2025 – July 2025",
      description:
        "Worked on AI engineering activities and gained practical experience with AI technologies and AI tools.",
      logo: {
        src: "/images/datamoo.png",
        alt: "Datamoo.AI logo",
        width: 80,
        height: 72,
      },
    },
    {
      company: "Thiranex",
      role: "Full Stack Developer",
      duration: "October 2026 – November 2026",
      description:
        "Worked on full-stack development and gained practical experience building applications using React and full-stack development concepts.",
      logo: {
        src: "/images/thiranex.png",
        alt: "Thiranex logo",
        width: 77,
        height: 91,
      },
    },
  ]);

export type Experience = z.infer<typeof experienceSchema>;
