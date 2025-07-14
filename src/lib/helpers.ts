import { getCollection, type CollectionEntry } from "astro:content";
import { convert } from "html-to-text";
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

export const convertHTMLToPlainText = (html = "") =>
  convert(html, {
    selectors: [
      { selector: "a", options: { ignoreHref: true } },
      { selector: "img", format: "skip" },
      { selector: "figure", format: "skip" },
    ],
  });

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

  return [...new Set(allPosts.flatMap((post) => post.data.category))];
};

export const getAllPostsFromCategory = async (category: string) => {
  const allPosts = await getAllPostsSorted();

  return allPosts.filter((post) => post.data.category === category).sort(sortByDate);
};

export const getPageOfPosts = (posts: CollectionEntry<"posts">[], pageNum: number) =>
  posts.slice((pageNum - 1) * POSTS_PER_PAGE, pageNum * POSTS_PER_PAGE);

export const getPostWithExtras = (posts: CollectionEntry<"posts">[]) => {
  return posts.map((post) => {
    const plainText = convertHTMLToPlainText(post.rendered?.html ?? "");
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
    return pageNum === 1 ? `/blog/${category}` : `/blog/${category}/page/${pageNum}`;
  }

  return `/blog/page/${pageNum}`;
};
