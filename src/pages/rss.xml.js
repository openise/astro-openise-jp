import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection("blog");
  return rss({
    title: 'openise.jp | blog',
    description: 'openise.jpのBlog',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/astro-openise-jp/blog/${post.slug}/`,
    })),
    customData: `<language>ja-jp</language>`,
  });
}