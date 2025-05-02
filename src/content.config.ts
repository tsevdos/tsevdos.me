import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: ["**/*.md", "**/*.mdx"], base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    // permalink: z.string(), // TODO: remove it?
    categories: z.array(z.string()),
    tags: z.array(z.string()),
  }),
});

export const collections = { posts };
