import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const posts = defineCollection({
  loader: glob({ pattern: ["**/*.md", "**/*.mdx"], base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
  }),
});

const talks = defineCollection({
  loader: glob({ pattern: ["**/*.md", "**/*.mdx"], base: "./src/content/talks" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    place: z.string(),
    eventLink: z.string().optional(),
    video: z.object({
      platform: z.string(),
      videoId: z.string(),
    }),
    slidesLink: z.string().optional(),
  }),
});

export const collections = { posts, talks };
