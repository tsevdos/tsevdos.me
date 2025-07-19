import rss from "@astrojs/rss";
import { type APIContext } from "astro";
import { config } from "../../lib/constants.ts";
import { getAllPostsSorted, getPostWithExtras } from "../../lib/helpers.ts";

const sortedPosts = await getAllPostsSorted();
const postsWithExtras = getPostWithExtras(sortedPosts);
const { title, RSSDescription } = config;

export function GET(context: APIContext) {
  return rss({
    title,
    description: RSSDescription,
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#site
    site: `${context.site}/blog`,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: postsWithExtras.map((post) => ({
      title: post.data.title,
      description: `${post.excerpt}...`,
      link: `${context.site}blog/${post.data.category}/${post.id}`,
      pubDate: new Date(post.data.date),
    })),
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  });
}
