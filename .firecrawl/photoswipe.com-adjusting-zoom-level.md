[Skip to main content](https://photoswipe.com/adjusting-zoom-level/#)

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

# Adjusting Zoom Level

Photoswipe has three zoom level options:

- `initialZoomLevel` \- zoom level when photoswipe is opened.
- `secondaryZoomLevel` \- zoom level when user clicks "zoom" button, double-taps image, or clicks an image. If it equals to initial - secondary zoom functionality is disabled.
- `maxZoomLevel` \- maximum zoom level when user zooms via zoom/pinch gesture, via ctrl-wheel or via trackpad. Always highest among three.

## Supported values [​](https://photoswipe.com/adjusting-zoom-level/\#supported-values "Direct link to heading")

Each zoom level option can be:

- A positive `Number`, where `1` is original image size.
- A `String`:
  - `'fit'` \- image fits into viewport.
  - `'fill'` \- image fills the viewport (similar to `background-size:cover`).
  - In both cases image will not be larger than original.
- A `Function` that should return number. Use it to define dynamic zoom level. Function is called separately for each image when it is rendered, or resized, or lazy-loaded. For example to set custom `secondaryZoomLevel`:

```js
secondaryZoomLevel: (zoomLevelObject) => {
  // zoomLevelObject is instance of ZoomLevel class
  console.log('Element size:', zoomLevelObject.elementSize);
  console.log('Pan area size (viewport minus padding):', zoomLevelObject.panAreaSize);
  console.log('Item index:', zoomLevelObject.index);
  console.log('Item data:', zoomLevelObject.itemData);

  // return desired zoom level
  return 1;
}
```

## Default behaviour [​](https://photoswipe.com/adjusting-zoom-level/\#default-behaviour "Direct link to heading")

- Initial zoom level is `fit`.
- Secondary zoom level is `2.5x` of `fit`, but not wider than `3000px`.
- Maximum zoom level is `4x` of `fit`.

```js
import PhotoSwipeLightbox from '/photoswipe/photoswipe-lightbox.esm.js';

const lightbox = new PhotoSwipeLightbox({
  gallery:'#gallery--open-in-original-size',
  children:'a',
  pswpModule: () => import('/photoswipe/photoswipe.esm.js')
});
lightbox.init();
```

[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/4/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/4/img-2500.jpg)

## Open images in `fill` state [​](https://photoswipe.com/adjusting-zoom-level/\#open-images-in-fill-state "Direct link to heading")

```js
import PhotoSwipeLightbox from '/photoswipe/photoswipe-lightbox.esm.js';

const lightbox = new PhotoSwipeLightbox({
  gallery:'#gallery--open-in-fill-state',
  children:'a',

  initialZoomLevel: 'fill',
  secondaryZoomLevel: 1,
  maxZoomLevel: 2,

  pswpModule: () => import('/photoswipe/photoswipe.esm.js')
});
lightbox.init();
```

[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/4/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/4/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/5/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/5/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/6/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/6/img-2500.jpg)

## Secondary zoom level is higher than initial [​](https://photoswipe.com/adjusting-zoom-level/\#secondary-zoom-level-is-higher-than-initial "Direct link to heading")

```js
import PhotoSwipeLightbox from '/photoswipe/photoswipe-lightbox.esm.js';

const lightbox = new PhotoSwipeLightbox({
  gallery:'#gallery--secondary-zoom-higher',
  children: 'a',
  mouseMovePan: true,

  initialZoomLevel: 'fit',
  secondaryZoomLevel: 1.5,
  maxZoomLevel: 1,

  pswpModule: () => import('/photoswipe/photoswipe.esm.js')
});
lightbox.init();
```

[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg)

## Initial zoom level is higher than secondary [​](https://photoswipe.com/adjusting-zoom-level/\#initial-zoom-level-is-higher-than-secondary "Direct link to heading")

Initial zoom level is set to `1` (original image size), you may want to disable opening closing transition (`showHideAnimationType:'none'`) \- as the larger the image - the harder it is to animate it smoothly. In this example it's not disabled, just to show you how it behaves:

```js
import PhotoSwipeLightbox from '/photoswipe/photoswipe-lightbox.esm.js';

const lightbox = new PhotoSwipeLightbox({
  gallery:'#gallery--initial-higher',
  children: 'a',
  mouseMovePan: true,

  initialZoomLevel: 1,
  secondaryZoomLevel: 'fit',
  maxZoomLevel: 4,

  pswpModule: () => import('/photoswipe/photoswipe.esm.js')
});
lightbox.init();
```

[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg)

## Initial and secondary zoom level are equal [​](https://photoswipe.com/adjusting-zoom-level/\#initial-and-secondary-zoom-level-are-equal "Direct link to heading")

```js
import PhotoSwipeLightbox from '/photoswipe/photoswipe-lightbox.esm.js';

const lightbox = new PhotoSwipeLightbox({
  gallery:'#gallery--zoom-levels-equal',
  children: 'a',
  mouseMovePan: true,

  initialZoomLevel: 'fill',
  secondaryZoomLevel: 'fill',
  maxZoomLevel: 3,

  pswpModule: () => import('/photoswipe/photoswipe.esm.js')
});
lightbox.init();
```

[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg)

## Image is smaller than initial and secondary [​](https://photoswipe.com/adjusting-zoom-level/\#image-is-smaller-than-initial-and-secondary "Direct link to heading")

```js
import PhotoSwipeLightbox from '/photoswipe/photoswipe-lightbox.esm.js';

const lightbox = new PhotoSwipeLightbox({
  gallery:'#very-small-image',
  pswpModule: () => import('/photoswipe/photoswipe.esm.js')
});
lightbox.init();
```

[![](https://dummyimage.com/100x100/555/fff/?text=small%20image)](https://dummyimage.com/200x200/555/fff/)

## Dynamic zoom level [​](https://photoswipe.com/adjusting-zoom-level/\#dynamic-zoom-level "Direct link to heading")

Change zoom levels based on viewport size and device orientation:

- fill 100% height of viewport on phones with portrait orientation,
- otherwise fit image into viewport

```js
import PhotoSwipeLightbox from '/photoswipe/photoswipe-lightbox.esm.js';

function isPhonePortrait() {
  return window.matchMedia('(max-width: 600px) and (orientation: portrait)').matches;
}

const lightbox = new PhotoSwipeLightbox({
  gallery:'#gallery--dynamic-zoom-level',
  children:'a',


  initialZoomLevel: (zoomLevelObject) => {
    if (isPhonePortrait()) {
      return zoomLevelObject.vFill;
    } else {
      return zoomLevelObject.fit;
    }
  },
  secondaryZoomLevel: (zoomLevelObject) => {
    if (isPhonePortrait()) {
      return zoomLevelObject.fit;
    } else {
      return 1;
    }
  },

  maxZoomLevel: 1,

  pswpModule: () => import('/photoswipe/photoswipe.esm.js')
});
lightbox.init();
```

[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/4/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/4/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/5/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/5/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/6/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/6/img-2500.jpg)

Found a typo? [Edit this page](https://github.com/dimsemenov/PhotoSwipe/tree/master/docs/adjusting-zoom-level.md)

Updates on [Twitter](https://twitter.com/photoswipe)

Code on [GitHub](https://github.com/dimsemenov/photoswipe)

Sponsor on [Open Collective](https://opencollective.com/photoswipe)

Made in Ukraine by [Dmytro Semenov](https://twitter.com/dimsemenov)