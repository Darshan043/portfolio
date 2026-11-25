import { z } from "zod";

const contactSchema = z.object({
  label: z.string().min(1),
  value: z.string().min(1),
  href: z.string().min(1),
  external: z.boolean(),
  icon: z.enum(["mail", "github", "linkedin", "phone"]),
});

const profileSchema = z.object({
  name: z.string().min(1),
  statement: z.string().min(1),
  education: z.string().min(1),
  college: z.string().min(1),
  focusAreas: z.array(z.string().min(1)).length(4),
  metadataTitle: z.string().min(1),
  metadataDescription: z.string().min(1),
  photo: z.object({
    src: z.string().min(1),
    alt: z.literal("Darshan A.R. – Profile Photo"),
    width: z.number().int().positive(),
    height: z.number().int().positive(),
  }),
  contacts: z.array(contactSchema).length(4),
});

export const profile = profileSchema.parse({
  name: "Darshan A.R.",
  statement:
    "I'm a Computer Science and Engineering student at Rajalakshmi Institute of Technology, Chennai, with a strong interest in building intelligent and impactful digital solutions. My interests span AI Engineering, Generative AI, Full Stack Development, and LLM-based applications, where I enjoy exploring emerging technologies and turning ideas into practical applications.",
  education:
    "Third-Year Computer Science and Engineering, Rajalakshmi Institute of Technology, Chennai.",
  college: "Rajalakshmi Institute of Technology, Chennai",
  focusAreas: [
    "AI Engineering",
    "Generative AI",
    "Full Stack Development",
    "LLM-Based Applications",
  ],
  metadataTitle: "Darshan A.R.",
  metadataDescription:
    "Focused on AI Engineering, Generative AI, Full Stack Development, and LLM-Based Applications.",
  photo: {
    src: "/images/darshan-ar.jpg",
    alt: "Darshan A.R. – Profile Photo",
    width: 682,
    height: 1024,
  },
  contacts: [
    {
      label: "Email",
      value: "ardrajesh04@gmail.com",
      href: "mailto:ardrajesh04@gmail.com",
      external: false,
      icon: "mail",
    },
    {
      label: "GitHub",
      value: "GitHub",
      href: "https://github.com/Darshan043",
      external: true,
      icon: "github",
    },
    {
      label: "LinkedIn",
      value: "LinkedIn",
      href: "https://www.linkedin.com/in/darshan-r-b91926322?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      external: true,
      icon: "linkedin",
    },
    {
      label: "Phone",
      value: "9363747052",
      href: "tel:9363747052",
      external: false,
      icon: "phone",
    },
  ],
});

export type Profile = z.infer<typeof profileSchema>;
