import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const nonEmpty = z.string().trim().min(1);
const url = z.string().url();

const outcomeSchema = z
  .object({
    statement: nonEmpty,
    kind: z.enum(["measured", "observed", "design-target", "qualitative"]),
    source: nonEmpty.optional(),
  })
  .superRefine((outcome, ctx) => {
    if (outcome.kind === "measured" && !outcome.source) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Measured outcomes require a source.",
        path: ["source"],
      });
    }
  });

const evidenceSchema = z.object({
  type: z.enum([
    "source",
    "screenshot",
    "architecture",
    "test",
    "deployment",
    "commit",
    "metric",
    "report",
    "demo",
  ]),
  label: nonEmpty,
  visibility: z.enum(["public", "private"]),
  source: nonEmpty,
  claim: nonEmpty,
});

const projectSchema = z
  .object({
    title: nonEmpty,
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    summary: nonEmpty,
    projectType: nonEmpty,
    status: z.enum(["production", "active-development", "prototype", "experiment", "archived"]),
    visibility: z.enum(["public-source", "private-source-with-publishable-evidence", "demo-only"]),
    tier: z.enum(["flagship", "supporting", "lab"]),
    featuredRank: z.number().int().positive().optional(),
    themes: z.array(nonEmpty).min(1),
    role: nonEmpty,
    timeframe: nonEmpty,
    problem: nonEmpty,
    constraints: z.array(nonEmpty).default([]),
    stack: z.array(nonEmpty).min(1),
    links: z
      .object({
        repository: url.optional(),
        live: url.optional(),
        marketplace: url.optional(),
        demo: url.optional(),
        report: url.optional(),
      })
      .optional(),
    evidence: z.array(evidenceSchema).default([]),
    outcomes: z.array(outcomeSchema).default([]),
    heroImage: nonEmpty.optional(),
    gallery: z
      .array(
        z.object({
          src: nonEmpty,
          alt: nonEmpty.optional(),
          decorative: z.boolean().default(false),
        }).superRefine((image, ctx) => {
          if (!image.decorative && !image.alt) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: "Nondecorative gallery images require alt text.",
              path: ["alt"],
            });
          }
        }),
      )
      .default([]),
  })
  .superRefine((project, ctx) => {
    if (project.tier === "flagship" && project.evidence.length === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Flagship projects require at least one evidence record.",
        path: ["evidence"],
      });
    }

    if (project.visibility === "public-source" && !project.links?.repository) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Public source projects require a repository link.",
        path: ["links", "repository"],
      });
    }

    if (
      project.tier === "flagship" &&
      project.visibility === "private-source-with-publishable-evidence" &&
      !project.evidence.some((item) => item.visibility === "public")
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Private source flagships require at least one publishable evidence record.",
        path: ["evidence"],
      });
    }

    if (project.tier !== "flagship" && project.featuredRank !== undefined) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Only flagship projects may define a featured rank.",
        path: ["featuredRank"],
      });
    }
  });

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/projects" }),
  schema: projectSchema,
});

export const collections = { projects };
