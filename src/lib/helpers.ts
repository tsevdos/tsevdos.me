import { type CollectionEntry } from "astro:content";
import { convert } from "html-to-text";
import { POSTS_PER_PAGE, WORDS_PER_MINUTE } from "./constants";

const range = (start: number, stop: number, step: number) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

export const sortByDate = (postA: CollectionEntry<"posts">, postB: CollectionEntry<"posts">) =>
  +new Date(postB.data.date) - +new Date(postA.data.date);

export const getPagesStaticPaths = (posts: number) => {
  const totalPages = Math.floor(posts / POSTS_PER_PAGE) + 1;

  return range(1, totalPages, 1).map((v) => v.toString());
};

export const getPageOfPosts = (posts: CollectionEntry<"posts">[], pageNum: number) =>
  posts.slice((pageNum - 1) * POSTS_PER_PAGE, pageNum * POSTS_PER_PAGE);

export const getPagination = (currentPage = 1, totalPosts: number) => {
  const noOfPages = Math.floor(totalPosts / POSTS_PER_PAGE) + 1;

  return { currentPage, noOfPages };
};

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
