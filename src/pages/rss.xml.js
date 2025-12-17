import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import site from '~/data/site.config.yml';


export async function GET(context) {
  console.log(site);
  const posts = await getCollection('posts');

  return rss({
    title: site.siteName,
    description: site.description,
    site: context.site,
    customData: `<language>${site.language.locale}</language>`,
    items: posts.map(post => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/posts/${post.slug}/`,
    }))
  });
}
