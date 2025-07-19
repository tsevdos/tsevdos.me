export const menuItems = [
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Blog",
    url: "/blog",
  },
  {
    name: "OSS",
    url: "/open-source-software",
  },
  {
    name: "Talks",
    url: "/talks",
  },
] as const;

export const config = {
  title: "Tsevdos.me",
  tagline: "the personal site of John Tsevdos",
  RSSDescription: "RSS feed for John Tsevdos blog",
} as const;

export const POSTS_PER_PAGE = 10;
export const WORDS_PER_MINUTE = 200;
export const NO_OF_WORDS_IN_EXCERPT = 30;
