import { z } from "zod";

const projectSchema = z.object({
  name: z.string().min(1),
  category: z.string().min(1),
  description: z.string().min(1),
  href: z.url(),
  action: z.enum(["View project", "View on GitHub"]),
});

export const projects = z
  .array(projectSchema)
  .length(6)
  .parse([
    {
      name: "OD Management System",
      category: "Full Stack Project",
      description: "A full-stack on-duty management system.",
      href: "https://on-duty-management-system.onrender.com/",
      action: "View project",
    },
    {
      name: "CareerPilot AI",
      category: "AI Full Stack Project",
      description:
        "An AI full-stack application for internship discovery and application management.",
      href: "https://career-ai-indol-delta.vercel.app/",
      action: "View project",
    },
    {
      name: "Project DNA",
      category: "AI Full Stack Project",
      description:
        "An AI full-stack application for connecting project knowledge into a searchable project memory.",
      href: "https://project-dna-five.vercel.app/",
      action: "View project",
    },
    {
      name: "AI Doubt Solver",
      category: "LLM-Based Project",
      description:
        "An LLM-based tutor for asking questions by text, image, or voice and reading step-by-step explanations.",
      href: "https://project-ai-doubt-solver.vercel.app/",
      action: "View project",
    },
    {
      name: "Traffic AI",
      category: "Python-Based Project",
      description:
        "A Python project for detecting traffic violations in road video and monitoring them with computer vision.",
      href: "https://github.com/Darshan043/Darshan043-traffic-violation-ai",
      action: "View on GitHub",
    },
    {
      name: "BillingHub",
      category: "SaaS Product",
      description:
        "A SaaS product for subscription billing, with recurring subscriptions, quota limits, a payment simulator, and customer invoices.",
      href: "https://billinghub-puce.vercel.app/",
      action: "View project",
    },
  ]);

export type Project = z.infer<typeof projectSchema>;
