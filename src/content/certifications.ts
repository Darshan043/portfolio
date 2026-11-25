import { z } from "zod";

const certificationSchema = z.object({
  title: z.string().min(1),
  platform: z.string().min(1),
  image: z.object({
    src: z.string().min(1),
    alt: z.string().min(1),
    width: z.number().int().positive(),
    height: z.number().int().positive(),
  }),
});

export const certifications = z
  .array(certificationSchema)
  .length(6)
  .parse([
    {
      title: "Build Your Own Static Website",
      platform: "NxtWave",
      image: {
        src: "/images/certifications/nxtwave-static-website.jpg",
        alt: "Build Your Own Static Website certificate from NxtWave",
        width: 625,
        height: 437,
      },
    },
    {
      title: "Build Your Own Responsive Website",
      platform: "NxtWave",
      image: {
        src: "/images/certifications/nxtwave-responsive-website.jpg",
        alt: "Build Your Own Responsive Website certificate from NxtWave",
        width: 628,
        height: 442,
      },
    },
    {
      title: "Introduction to Database",
      platform: "NxtWave",
      image: {
        src: "/images/certifications/nxtwave-introduction-to-database.jpg",
        alt: "Introduction to Database certificate from NxtWave",
        width: 1020,
        height: 710,
      },
    },
    {
      title: "Generative AI for All",
      platform: "Infosys Springboard",
      image: {
        src: "/images/certifications/infosys-generative-ai-for-all.jpg",
        alt: "Generative AI for All certificate from Infosys Springboard",
        width: 1017,
        height: 727,
      },
    },
    {
      title: "Automation Developer Associate Training (v2024.10)",
      platform: "UiPath – ICT Academy, Cohort 2",
      image: {
        src: "/images/certifications/uipath-automation-developer-associate.jpg",
        alt: "Automation Developer Associate Training (v2024.10) certificate from UiPath – ICT Academy, Cohort 2",
        width: 1016,
        height: 720,
      },
    },
    {
      title: "Generative AI Mastermind",
      platform: "Outskill",
      image: {
        src: "/images/certifications/outskill-generative-ai-mastermind.jpg",
        alt: "Generative AI Mastermind certificate from Outskill",
        width: 1024,
        height: 635,
      },
    },
  ]);

export type Certification = z.infer<typeof certificationSchema>;
