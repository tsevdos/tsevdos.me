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
    event: z.string(),
    eventLink: z.string().optional(),
    video: z.object({
      platform: z.string(),
      videoId: z.string(),
    }),
    slidesLink: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: ["**/*.md", "**/*.mdx"], base: "./src/content/projects" }),
  schema: z.object({
    id: z.number(),
    title: z.string(),
    type: z.enum(["npm package", "web app", "jquery plugin", "wordpress theme"]),
    homepage: z.url().optional(),
    repo: z.url(),
    image: z.string(),
    status: z.enum(["active", "Help wanted!", "Deprecated...", "Abandonware"]),
  }),
});

export const collections = { posts, talks, projects };
