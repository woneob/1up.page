import site from '~/data/site.config.yml';

const data = {
  short_name: site.siteName,
  name: site.siteName,
  id: site.siteName,
  description: site.tagline,
  orientation: site.orientation,
  start_url: site.startUrl,
  display: site.display,
  background_color: site.backgroundColor,
  theme_color: site.themeColor,
  icons: (site.siteIcons || []).map(({ href, type, sizes, purpose }) => ({
    src: href,
    type,
    sizes,
    purpose
  }))
};

export async function GET() {
  return new Response(JSON.stringify(data, null, 2), {
    headers: {
      'Content-Type': 'application/manifest+json; charset=utf-8'
    }
  });
}
