[Skip to main content](https://photoswipe.com/getting-started/#)

[**PhotoSwipe** 5.4.4](https://photoswipe.com/) [Docs](https://photoswipe.com/getting-started) SearchK

[v6 feedback](https://github.com/dimsemenov/PhotoSwipe/discussions/2170)

[Twitter](https://twitter.com/photoswipe) [Github24,961](https://github.com/dimsemenov/photoswipe)

[Getting Started](https://photoswipe.com/getting-started)

Examples

[Styling](https://photoswipe.com/styling) [Opening or closing transition](https://photoswipe.com/opening-or-closing-transition) [Adding UI elements](https://photoswipe.com/adding-ui-elements) [Adjusting zoom level](https://photoswipe.com/adjusting-zoom-level) [Caption](https://photoswipe.com/caption) [Click actions](https://photoswipe.com/click-and-tap-actions) [Custom content](https://photoswipe.com/custom-content) [Data sources](https://photoswipe.com/data-sources) [Native fullscreen on open](https://photoswipe.com/native-fullscreen-on-open)

API

[Options](https://photoswipe.com/options) [Events](https://photoswipe.com/events) [Filters](https://photoswipe.com/filters) [Methods](https://photoswipe.com/methods)

Frameworks

[for React](https://photoswipe.com/react-image-gallery) [for Vue](https://photoswipe.com/vue-image-gallery) [for Svelte](https://photoswipe.com/svelte-image-gallery)

# Getting Started

**PhotoSwipe v6 is under development** Please leave feedback in [GitHub Discussion](https://github.com/dimsemenov/PhotoSwipe/discussions/2170).

Before you start:

- PhotoSwipe requires predefined image dimensions, you must define the width and height of each image.
- PhotoSwipe is not designed to display very large images. Serve responsive images. Maximum recommended size is 3000x3000px. However, there is an [experimental tiling plugin](https://github.com/dimsemenov/photoswipe-deep-zoom-plugin) that allows showing extremely large images.
- PhotoSwipe is designed with progressive enhancement in mind and works only in modern browsers. Always provide an alternative way to view the content (for example, link to the image).

## Initialization [​](https://photoswipe.com/getting-started/\#initialization "Direct link to heading")

The PhotoSwipe consists of three parts:

1. **Core** (`photoswipe.esm.js`).
2. **Lightbox** (`photoswipe-lightbox.esm.js`) \- loads **Core** and chooses when PhotoSwipe should be opened. Its file size is significantly smaller. It also loads the first image (in parallel with **Core**).
3. **CSS** (`photoswipe.css`) \- a single file that controls all the styling. There are no external assets for icons - all of them are dynamically generated via JS and very tiny. Refer to [styling](https://photoswipe.com/styling) for more info.

JS files are separated, so you can dynamically load **Core** only when the user needs it, thus reducing the size of your main bundle.

The recommended way to use PhotoSwipe is using a single `<script type="module"></script>`, for example:

```html
<script type="module">
import PhotoSwipeLightbox from 'photoswipe/dist/photoswipe-lightbox.esm.js';
const lightbox = new PhotoSwipeLightbox({
  gallery: '#my-gallery',
  children: 'a',
  pswpModule: () => import('photoswipe/dist/photoswipe.esm.js')
});
lightbox.init();
</script>
```

Don't forget to include the CSS too:

```html
<link rel="stylesheet" href="photoswipe/dist/photoswipe.css">
```

Alternatively, you may install PhotoSwipe via NPM or Yarn:

```text
npm i photoswipe --save
```

```js
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

const lightbox = new PhotoSwipeLightbox({
  gallery: '#my-gallery',
  children: 'a',
  pswpModule: () => import('photoswipe')
});
lightbox.init();
```

Playgrounds: [StackBlitz](https://stackblitz.com/edit/js-o1vrod?file=index.js), [CodeSandbox](https://codesandbox.io/s/vigorous-matan-zxok9x?file=/src/index.js), [CodePen (with unpkg)](https://codepen.io/dimsemenov/pen/ZEvypBw).

If you are unable to use ES modules, the transpiled version can be found in [dist/umd/](https://github.com/dimsemenov/PhotoSwipe/tree/master/dist/umd) folder of the repository.

### Basic vanilla JS example [​](https://photoswipe.com/getting-started/\#basic-vanilla-js-example "Direct link to heading")

```js
// Include Lightbox
import PhotoSwipeLightbox from '/photoswipe/photoswipe-lightbox.esm.js';

const lightbox = new PhotoSwipeLightbox({
  // may select multiple "galleries"
  gallery: '#gallery--getting-started',

  // Elements within gallery (slides)
  children: 'a',

  // setup PhotoSwipe Core dynamic import
  pswpModule: () => import('/photoswipe/photoswipe.esm.js')
});
lightbox.init();
```

```html
<div class="pswp-gallery pswp-gallery--single-column" id="gallery--getting-started">
  <a href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
    data-pswp-width="1669"
    data-pswp-height="2500"
    target="_blank">
    <img src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg" alt="" />
  </a>
  <!-- cropped thumbnail: -->
  <a href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/7/img-2500.jpg"
    data-pswp-width="1875"
    data-pswp-height="2500"
    data-cropped="true"
    target="_blank">
    <img src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/7/img-200.jpg" alt="" />
    Cropped
  </a>
  <!-- data-pswp-src with custom URL in href -->
  <a href="https://unsplash.com"
    data-pswp-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
    data-pswp-width="2500"
    data-pswp-height="1666"
    target="_blank">
    <img src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg" alt="" />
  </a>
  <!-- Without thumbnail: -->
  <a href="http://example.com"
    data-pswp-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/5/img-2500.jpg"
    data-pswp-width="2500"
    data-pswp-height="1668"
    target="_blank">
    No thumbnail
  </a>
  <!-- wrapped with any element: -->
  <div>
    <a href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/6/img-2500.jpg"
      data-pswp-width="2500"
      data-pswp-height="1667"
      target="_blank">
      <img src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/6/img-200.jpg" alt="" />
    </a>
  </div>
</div>
```

[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/7/img-200.jpg)\\
Cropped](https://cdn.photoswipe.com/photoswipe-demo-images/photos/7/img-2500.jpg) [![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)](https://unsplash.com/) [No thumbnail](http://example.com/)

[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/6/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/6/img-2500.jpg)

### Without dynamic import [​](https://photoswipe.com/getting-started/\#without-dynamic-import "Direct link to heading")

You don't have to dynamically import pswpModule, especially if PhotoSwipe is one of the primary features of your page.

```js
import PhotoSwipeLightbox from '/photoswipe/photoswipe-lightbox.esm.js';
import PhotoSwipe from '/photoswipe/photoswipe.esm.js';

const lightbox = new PhotoSwipeLightbox({
  gallery: '#gallery--no-dynamic-import',
  children: 'a',
  pswpModule: PhotoSwipe
});

lightbox.init();
```

[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg)

## Required HTML markup [​](https://photoswipe.com/getting-started/\#required-html-markup "Direct link to heading")

Each element that matches the selector should be or should contain link `<a>` element. The link must have such attributes:

- Image URL in `href` or `data-pswp-src` attribute (latter has higher priority).
- Image width in `data-pswp-width`.
- Image height in `data-pswp-height`.

And optionally:

- `<img>` thumbnail within the link element that will be displayed before the large image is loaded (applied only for the first image, can be adjusted via `thumbSelector`).
- Optional `data-cropped="true"` attribute if thumbnail is cropped. See also [Animating from Cropped Thumbnail](https://photoswipe.com/opening-or-closing-transition#animating-from-cropped-thumbnail).

PhotoSwipe API supports almost any markup and any data source, [read more about it here](https://photoswipe.com/data-sources#custom-html-markup).

## Open each image individually [​](https://photoswipe.com/getting-started/\#open-each-image-individually "Direct link to heading")

```js
import PhotoSwipeLightbox from '/photoswipe/photoswipe-lightbox.esm.js';
const options = {
  gallery: '#gallery--individual a',
  pswpModule: () => import('/photoswipe/photoswipe.esm.js')
};
const lightbox = new PhotoSwipeLightbox(options);
lightbox.init();
```

[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg)

## Responsive images with srcset [​](https://photoswipe.com/getting-started/\#responsive-images-with-srcset "Direct link to heading")

- Add `data-pswp-srcset` attribute. It supports the same markup as [native srcset](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-srcset).
- Attributes `data-pswp-width` and `data-pswp-height` should define the largest image size.
- `sizes` attribute will be generated automatically based on actual width of the image. For example, if user zooms-in - `sizes` will be adjusted to the new zoom level.

```js
import PhotoSwipeLightbox from '/photoswipe/photoswipe-lightbox.esm.js';
const options = {
  gallery: '#gallery--responsive-images',
  children: 'a',
  pswpModule: () => import('/photoswipe/photoswipe.esm.js')
};
const lightbox = new PhotoSwipeLightbox(options);
lightbox.init();
```

[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/srcset-test/1-300x200.png)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/srcset-test/1-1500x1000.png)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/srcset-test/2-300x200.png)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/srcset-test/2-1500x1000.png)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/srcset-test/3-300x300.png)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/srcset-test/3-1500x1500.png)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/srcset-test/4-200x300.png)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/srcset-test/4-1000x1500.png)

## Supported browsers and fallback [​](https://photoswipe.com/getting-started/\#supported-browsers-and-fallback "Direct link to heading")

- The PhotoSwipe supports all browsers that [support ES6 modules](https://caniuse.com/#search=module).
  - Thus, it might not work in IE11, Opera Mini, UC browser, and old versions of Chrome, Safari, and Firefox. Check your website/region statistics before deciding whether you should use PhotoSwipe or not.
- Users in unsupported browsers will still be able to view the large image if you use recommended HTML markup - link to image, or link to page that contains image.
- You may add any fallback via `script type="nomodule"`.

Found a typo? [Edit this page](https://github.com/dimsemenov/PhotoSwipe/tree/master/docs/getting-started.md)

Updates on [Twitter](https://twitter.com/photoswipe)

Code on [GitHub](https://github.com/dimsemenov/photoswipe)

Sponsor on [Open Collective](https://opencollective.com/photoswipe)

Made in Ukraine by [Dmytro Semenov](https://twitter.com/dimsemenov)