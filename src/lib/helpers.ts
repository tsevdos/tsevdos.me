import { getCollection, type CollectionEntry } from "astro:content";
import { NO_OF_WORDS_IN_EXCERPT, POSTS_PER_PAGE, WORDS_PER_MINUTE } from "./constants";

const range = (start: number, stop: number, step: number) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

const sortByDate = (postA: CollectionEntry<"posts">, postB: CollectionEntry<"posts">) =>
  +new Date(postB.data.date) - +new Date(postA.data.date);

// Miscellaneous
export const getFormattedDate = (dateStr: string) =>
  new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export const stripMdxToPlainText = (body = "") =>
  body
    .split("\n")
    .filter((line) => !/^(import|export)\s/.test(line))
    .join("\n")
    .replace(/<[^>]*\/?>/g, " ") // JSX/HTML tags
    .replace(/!\[.*?\]\(.*?\)/g, "") // images
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // links → text
    .replace(/```[\s\S]*?```/g, "") // fenced code blocks
    .replace(/`([^`]+)`/g, "$1") // inline code
    .replace(/^#{1,6}\s+/gm, "") // headings
    .replace(/\*{1,3}([^*\n]+)\*{1,3}/g, "$1") // bold/italic (asterisks)
    .replace(/_{1,3}([^_\n]+)_{1,3}/g, "$1") // bold/italic (underscores)
    .replace(/^[-*+]\s+/gm, "") // unordered lists
    .replace(/^\d+\.\s+/gm, "") // ordered lists
    .replace(/^>\s*/gm, "") // blockquotes
    .replace(/\n{2,}/g, " ")
    .trim();

export const getReadingTime = (text = "") => {
  const regex = /\w+/g;
  const wordCount = (text.match(regex) ?? []).length;

  return Math.ceil(wordCount / WORDS_PER_MINUTE);
};

// Posts and categories
export const getAllPostsSorted = async () => {
  const posts = await getCollection("posts");

  return posts.sort(sortByDate);
};

export const getAllCategories = async () => {
  const allPosts = await getAllPostsSorted();

  return [...new Set(allPosts.flatMap((post) => post.data.category))].map((category) => category.toLowerCase());
};

export const getAllPostsFromCategory = async (category: string) => {
  const allPosts = await getAllPostsSorted();

  return allPosts.filter((post) => post.data.category.toLowerCase() === category).sort(sortByDate);
};

export const getPageOfPosts = (posts: CollectionEntry<"posts">[], pageNum: number) =>
  posts.slice((pageNum - 1) * POSTS_PER_PAGE, pageNum * POSTS_PER_PAGE);

export const getPostWithExtras = (posts: CollectionEntry<"posts">[]) => {
  return posts.map((post) => {
    const plainText = stripMdxToPlainText(post.body);
    const excerpt = plainText.split(" ").slice(0, NO_OF_WORDS_IN_EXCERPT).join(" ");
    const readingTime = getReadingTime(plainText);

    return {
      excerpt,
      readingTime,
      ...post,
    };
  });
};

export const getPagesStaticPaths = (noOfPosts: number) => {
  const totalPages = Math.ceil(noOfPosts / POSTS_PER_PAGE);

  return range(1, totalPages, 1).map((v) => v.toString());
};

// Pagination
export const getPagination = (currentPage = 1, totalPosts: number) => {
  const noOfPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

  return { currentPage, noOfPages };
};

export const getPageUrl = (pageNum: number, category?: string) => {
  if (category) {
    return pageNum === 1 ? `/blog/${category.toLowerCase()}` : `/blog/${category.toLowerCase()}/page/${pageNum}`;
  }

  return `/blog/page/${pageNum}`;
};
