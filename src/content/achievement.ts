import { z } from "zod";

const achievementSchema = z.object({
  placement: z.literal("First Runner-Up"),
  event: z.literal("Idea2Impact Hackathon"),
  description: z.literal(
    "Along with Team INNOVEX, I worked on Project DNA, an AI-powered Knowledge Twin Platform that transforms GitHub repositories and project documents into structured, searchable project knowledge. My contribution focused on data integration and project services, including repository and document processing. The project secured First Runner-Up at NxtWave's Idea2Impact Hackathon held in Hyderabad.",
  ),
  photo: z.object({
    src: z.string().min(1),
    alt: z.string().min(1),
    width: z.number().int().positive(),
    height: z.number().int().positive(),
  }),
});

export const achievement = achievementSchema.parse({
  placement: "First Runner-Up",
  event: "Idea2Impact Hackathon",
  description:
    "Along with Team INNOVEX, I worked on Project DNA, an AI-powered Knowledge Twin Platform that transforms GitHub repositories and project documents into structured, searchable project knowledge. My contribution focused on data integration and project services, including repository and document processing. The project secured First Runner-Up at NxtWave's Idea2Impact Hackathon held in Hyderabad.",
  photo: {
    src: "/images/idea2impact-certificate.jpg",
    alt: "Darshan A.R. holding the Idea2Impact Hackathon first runner-up certificate",
    width: 768,
    height: 1024,
  },
});

export type Achievement = z.infer<typeof achievementSchema>;
