/* global hexo */

'use strict';

// Post images
// - `{% asset_img photo.jpg "Caption" %}` shows "Caption" under the photo.
//   Titles that only repeat the file name (Typora fills them in on paste) stay hidden.
// - Images written on the same line (`{% asset_img a.jpg %} {% asset_img b.jpg %}`) sit side by side.
// - Every post image is lazy-loaded by the browser.

const { unescapeHTML } = require('hexo-util');

const rImage = /<img\b[^>]*>/g;
const rImageLine = /^[ \t]*((?:<img\b[^>]*>[ \t]*)+)$/gm;

const getAttr = (tag, name) => {
  const match = tag.match(new RegExp(`\\s${name}="([^"]*)"`));
  return match ? match[1] : '';
};

const isFileName = (title, src) => {
  let file = src.split('/').pop();
  try {
    file = decodeURIComponent(file);
  } catch {}
  file = file.replace(/\.\w+$/, '');
  title = unescapeHTML(title);
  return file === title || file.startsWith(title + '-');
};

const toFigure = tag => {
  const title = getAttr(tag, 'title');
  if (!title || isFileName(title, getAttr(tag, 'src') || getAttr(tag, 'data-src'))) return tag;
  let image = tag.replace(/\stitle="[^"]*"/, '');
  if (!getAttr(image, 'alt')) {
    image = image.replace(/\salt="[^"]*"/, '').replace(/^<img/, `<img alt="${title}"`);
  }
  return `<figure class="post-figure">${image}<figcaption>${title}</figcaption></figure>`;
};

// Priority 9 runs before Hexo's excerpt filter, so the home page gets the same markup.
hexo.extend.filter.register('after_post_render', data => {
  data.content = data.content
    .replace(rImage, tag => (/\sloading=/.test(tag) ? tag : tag.replace(/^<img/, '<img loading="lazy" decoding="async"')))
    .replace(rImageLine, (line, images) => {
      const items = images.match(rImage).map(toFigure);
      return items.length > 1 ? `<div class="post-image-row">${items.join('')}</div>` : items[0];
    });
  return data;
}, 9);
