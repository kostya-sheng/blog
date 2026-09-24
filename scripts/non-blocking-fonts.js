/* global hexo */

'use strict';

// NexT links the web font stylesheet (font.host in _config.next.yml) as a
// render-blocking <link>, so a slow or unreachable font host leaves the page
// blank until the request gives up. Load it without blocking instead: text
// shows in system fonts right away and switches once the web fonts arrive.

const rFontStylesheet = /<link rel="stylesheet" href="([^"]+\/css2\?family=[^"]+)">/;

hexo.extend.filter.register('after_render:html', html => html.replace(rFontStylesheet, (tag, href) =>
  `<link rel="stylesheet" href="${href}" media="print" onload="this.media='all'"><noscript>${tag}</noscript>`));
