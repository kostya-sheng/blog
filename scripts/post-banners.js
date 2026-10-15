/* global hexo */

'use strict';

// Post banners
// Every post opens with `{% asset_img post-banner banner.svg %}`. Hexo lists each
// post image as an og:image and the first one as twitter:image, and most sites
// only show the first, so link previews would show the banner. Few sites render
// SVG previews, so leave the banner out and let the first photo lead again.

const rBannerOgImage = /<meta property="og:image" content="[^"]*\/banner\.svg">\n?/g;
const rBannerTwitterImage = /<meta name="twitter:image" content="[^"]*\/banner\.svg">\n?/;
const rOgImage = /<meta property="og:image" content="([^"]*)">/;

hexo.extend.filter.register('after_render:html', html => {
  if (!rBannerTwitterImage.test(html)) return html;
  html = html.replace(rBannerOgImage, '');
  const photo = html.match(rOgImage);
  return html.replace(rBannerTwitterImage, photo ? `<meta name="twitter:image" content="${photo[1]}">\n` : '');
});
