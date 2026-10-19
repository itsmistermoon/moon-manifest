[Skip to main content](https://photoswipe.com/options/#)

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

# Options

### bgOpacity [​](https://photoswipe.com/options/\#bgopacity "Direct link to heading")

Number, `0.8`.

Background backdrop opacity, always define it via this option and not via CSS rgba color.

```js
import PhotoSwipeLightbox from '/photoswipe/photoswipe-lightbox.esm.js';
const lightbox = new PhotoSwipeLightbox({
  gallery: '#gallery--test-bgopacity',
  children: 'a',
  pswpModule: () => import('/photoswipe/photoswipe.esm.js'),
  bgOpacity: 0.2,
});
lightbox.init();
```

[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg)

### spacing [​](https://photoswipe.com/options/\#spacing "Direct link to heading")

Number, `0.1`. Spacing between slides. Defined as ratio relative to the viewport width (0.1 = 10% of viewport).

```js
import PhotoSwipeLightbox from '/photoswipe/photoswipe-lightbox.esm.js';
const lightbox = new PhotoSwipeLightbox({
  gallery: '#gallery--test-spacing',
  children: 'a',
  pswpModule: () => import('/photoswipe/photoswipe.esm.js'),
  spacing: 0.5, // 50% of viewport width
});
lightbox.init();
```

[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/4/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/4/img-2500.jpg)

### allowPanToNext [​](https://photoswipe.com/options/\#allowpantonext "Direct link to heading")

Boolean, `true`. Allow swipe navigation to the next slide when the current slide is zoomed. Does not apply to mouse events.

```js
import PhotoSwipeLightbox from '/photoswipe/photoswipe-lightbox.esm.js';
const lightbox = new PhotoSwipeLightbox({
  gallery: '#gallery--test-spacing',
  children: 'a',
  pswpModule: () => import('/photoswipe/photoswipe.esm.js'),
  allowPanToNext: false
});
lightbox.init();
```

[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/4/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/4/img-2500.jpg)

### loop [​](https://photoswipe.com/options/\#loop "Direct link to heading")

Boolean, `true`. If set to true you'll be able to swipe from the last to the first image. Option is always `false` when there are less than 3 slides.

```js
import PhotoSwipeLightbox from '/photoswipe/photoswipe-lightbox.esm.js';
const lightbox = new PhotoSwipeLightbox({
  gallery: '#gallery--test-loop',
  children: 'a',
  pswpModule: () => import('/photoswipe/photoswipe.esm.js'),
  loop: false
});
lightbox.init();
```

[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/4/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/4/img-2500.jpg)

### wheelToZoom [​](https://photoswipe.com/options/\#wheeltozoom "Direct link to heading")

Boolean, `undefined`. By default PhotoSwipe zooms image with ctrl-wheel, if you enable this option - image will zoom just via wheel.

```js
import PhotoSwipeLightbox from '/photoswipe/photoswipe-lightbox.esm.js';
const lightbox = new PhotoSwipeLightbox({
  gallery: '#gallery--test-wheelToZoom',
  children: 'a',
  pswpModule: () => import('/photoswipe/photoswipe.esm.js'),
  wheelToZoom: true
});
lightbox.init();
```

[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/4/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/4/img-2500.jpg)

### pinchToClose [​](https://photoswipe.com/options/\#pinchtoclose "Direct link to heading")

Boolean, `true`. Pinch touch gesture to close the gallery.

```js
import PhotoSwipeLightbox from '/photoswipe/photoswipe-lightbox.esm.js';
const lightbox = new PhotoSwipeLightbox({
  gallery: '#gallery--test-pinch-to-close',
  children: 'a',
  pswpModule: () => import('/photoswipe/photoswipe.esm.js'),
  pinchToClose: false
});
lightbox.init();
```

[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/4/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/4/img-2500.jpg)

### closeOnVerticalDrag [​](https://photoswipe.com/options/\#closeonverticaldrag "Direct link to heading")

Boolean, `true`. Vertical drag gesture to close the PhotoSwipe.

```js
import PhotoSwipeLightbox from '/photoswipe/photoswipe-lightbox.esm.js';
const lightbox = new PhotoSwipeLightbox({
  gallery: '#gallery--close-on-vertical-drag',
  children: 'a',
  pswpModule: () => import('/photoswipe/photoswipe.esm.js'),
  closeOnVerticalDrag: false
});
lightbox.init();
```

[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/4/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/4/img-2500.jpg)

### padding [​](https://photoswipe.com/options/\#padding "Direct link to heading")

Object, `{ top: 0, bottom: 0, left: 0, right: 0 }`. Slide area padding (in pixels).

```js
import PhotoSwipeLightbox from '/photoswipe/photoswipe-lightbox.esm.js';
const lightbox = new PhotoSwipeLightbox({
  gallery: '#gallery--test-padding',
  children: 'a',
  pswpModule: () => import('/photoswipe/photoswipe.esm.js'),
  padding: { top: 20, bottom: 40, left: 100, right: 100 }
});
lightbox.init();
```

[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/4/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/4/img-2500.jpg)

### paddingFn [​](https://photoswipe.com/options/\#paddingfn "Direct link to heading")

Function, should return padding object. The option is checked frequently, so make sure it's performant. Overrides `padding` option if defined. For example:

```js
import PhotoSwipeLightbox from '/photoswipe/photoswipe-lightbox.esm.js';
const lightbox = new PhotoSwipeLightbox({
  gallery: '#gallery--test-paddingfn',
  children: 'a',
  pswpModule: () => import('/photoswipe/photoswipe.esm.js'),

  paddingFn: (viewportSize, itemData, index) => {
    return {
      // check based on slide index
      top: index === 0 ? 100 : 0,

      // check based on viewport size
      bottom: viewportSize.x < 600 ? 0 : 200,

      // check based on image size
      left: itemData.w < 2000 ? 50 : 0,

      right: 0
    };
  }
});
lightbox.init();
```

[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/4/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/4/img-2500.jpg)

### hideAnimationDuration, showAnimationDuration, zoomAnimationDuration [​](https://photoswipe.com/options/\#hideanimationduration-showanimationduration-zoomanimationduration "Direct link to heading")

Number, `333`. Transition duration in milliseconds, can be `0`. [Example here](https://photoswipe.com/opening-or-closing-transition#transition-duration-and-easing).

### easing [​](https://photoswipe.com/options/\#easing "Direct link to heading")

String, `'cubic-bezier(.4,0,.22,1)'`. CSS easing function for open/close/zoom transitions. [Example here](https://photoswipe.com/opening-or-closing-transition#transition-duration-and-easing).

### escKey [​](https://photoswipe.com/options/\#esckey "Direct link to heading")

Boolean, `true`. Esc key to close.

```js
import PhotoSwipeLightbox from '/photoswipe/photoswipe-lightbox.esm.js';
const lightbox = new PhotoSwipeLightbox({
  gallery: '#gallery--test-esc-key',
  children: 'a',
  pswpModule: () => import('/photoswipe/photoswipe.esm.js'),
  escKey: false
});
lightbox.init();
```

[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/4/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/4/img-2500.jpg)

### arrowKeys [​](https://photoswipe.com/options/\#arrowkeys "Direct link to heading")

Boolean, `true`. Left/right arrow keys for navigation.

```js
import PhotoSwipeLightbox from '/photoswipe/photoswipe-lightbox.esm.js';
const lightbox = new PhotoSwipeLightbox({
  gallery: '#gallery--test-arrow-keys',
  children: 'a',
  pswpModule: () => import('/photoswipe/photoswipe.esm.js'),
  arrowKeys: false
});
lightbox.init();
```

[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/4/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/4/img-2500.jpg)

### trapFocus [​](https://photoswipe.com/options/\#trapfocus "Direct link to heading")

Boolean, `true`. Trap focus within PhotoSwipe element while it's open.

### returnFocus [​](https://photoswipe.com/options/\#returnfocus "Direct link to heading")

Boolean, `true`. Restore focus the last active element after PhotoSwipe is closed.

```js
import PhotoSwipeLightbox from '/photoswipe/photoswipe-lightbox.esm.js';
const lightbox = new PhotoSwipeLightbox({
  gallery: '#gallery--test-restore-focus',
  children: 'a',
  pswpModule: () => import('/photoswipe/photoswipe.esm.js'),
  returnFocus: false
});
lightbox.init();
```

[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/4/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/4/img-2500.jpg)

### clickToCloseNonZoomable [​](https://photoswipe.com/options/\#clicktoclosenonzoomable "Direct link to heading")

Boolean, `true`. If image is not zoomable (for example, smaller than viewport) it can be closed by clicking on it.

```js
import PhotoSwipeLightbox from '/photoswipe/photoswipe-lightbox.esm.js';
const lightbox = new PhotoSwipeLightbox({
  gallery: '#gallery--clickToCloseNonZoomable',
  children: 'a',
  pswpModule: () => import('/photoswipe/photoswipe.esm.js'),
  clickToCloseNonZoomable: false
});
lightbox.init();
```

[![](https://dummyimage.com/150x100/555/fff/?text=1st-150x100)](https://dummyimage.com/300x200/555/fff/?text=1st-300x200)[![](https://dummyimage.com/100x100/555/fff/?text=2nd-100x100)](https://dummyimage.com/1000x1000/555/fff/?text=2nd-1000x1000)[![](https://dummyimage.com/50x350/555/fff/?text=3rd-50x350)](https://dummyimage.com/100x700/555/fff/?text=3rd-100x700)

### imageClickAction, bgClickAction, tapAction, doubleTapAction [​](https://photoswipe.com/options/\#imageclickaction-bgclickaction-tapaction-doubletapaction "Direct link to heading")

Refer to [click and tap actions](https://photoswipe.com/click-and-tap-actions) page.

### preloaderDelay [​](https://photoswipe.com/options/\#preloaderdelay "Direct link to heading")

Number (ms), `2000`. Delay before the loading indicator will be displayed, if image is loaded during it - the indicator will not be displayed at all. Can be zero.

```js
import PhotoSwipeLightbox from '/photoswipe/photoswipe-lightbox.esm.js';
const lightbox = new PhotoSwipeLightbox({
  gallery: '#gallery--test-preloader-delay',
  children: 'a',
  pswpModule: () => import('/photoswipe/photoswipe.esm.js'),
  preloaderDelay: 0
});
lightbox.init();
```

[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/4/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/4/img-2500.jpg)

### indexIndicatorSep [​](https://photoswipe.com/options/\#indexindicatorsep "Direct link to heading")

String, `/`. Used for slide count indicator ("1 of 10 ").

```js
import PhotoSwipeLightbox from '/photoswipe/photoswipe-lightbox.esm.js';
const lightbox = new PhotoSwipeLightbox({
  gallery: '#gallery--test-indexIndicatorSep',
  children: 'a',
  pswpModule: () => import('/photoswipe/photoswipe.esm.js'),
  indexIndicatorSep: ' of '
});
lightbox.init();
```

[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/4/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/4/img-2500.jpg)

### getViewportSizeFn [​](https://photoswipe.com/options/\#getviewportsizefn "Direct link to heading")

Function `{x: width, y: height}`, `undefined`. A function that should return slide viewport width and height, in format `{x: 100, y: 100}`.

```js
import PhotoSwipeLightbox from '/photoswipe/photoswipe-lightbox.esm.js';
const lightbox = new PhotoSwipeLightbox({
  gallery: '#gallery--test-getViewportSizeFn',
  children: 'a',
  pswpModule: () => import('/photoswipe/photoswipe.esm.js'),
  getViewportSizeFn: function(options, pswp) {
    return {
      x: document.documentElement.clientWidth - 200,
      y: window.innerHeight
    };
  }
});
lightbox.init();
```

[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/4/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/4/img-2500.jpg)

### initialZoomLevel, secondaryZoomLevel, maxZoomLevel [​](https://photoswipe.com/options/\#initialzoomlevel-secondaryzoomlevel-maxzoomlevel "Direct link to heading")

Refer to [Adjusting zoom level](https://photoswipe.com/adjusting-zoom-level) page for more info. The default values are described [there too](https://photoswipe.com/adjusting-zoom-level#default-behaviour).

### errorMsg [​](https://photoswipe.com/options/\#errormsg "Direct link to heading")

String, `'The image cannot be loaded'`.

Message to display when the image wasn't able to load. If you need to display HTML - use [contentErrorElement filter](https://photoswipe.com/filters#contenterrorelement).

```js
import PhotoSwipeLightbox from '/photoswipe/photoswipe-lightbox.esm.js';
const lightbox = new PhotoSwipeLightbox({
  gallery: '#gallery--errorMsg',
  children: 'a',
  pswpModule: () => import('/photoswipe/photoswipe.esm.js'),
  errorMsg: 'The photo cannot be loaded'
});
lightbox.init();
```

[![](https://dummyimage.com/300x200/555/fff/?text=0-random-image)](https://picsum.photos/1200/800)[![](https://dummyimage.com/300x200/555/fff/?text=1st-broken-large-image)](https://example.com/broken-image-link)[![](https://dummyimage.com/100x100/555/fff/?text=2nd-100x100)](https://dummyimage.com/1000x1000/555/fff/?text=2nd-1000x1000)[![](https://dummyimage.com/300x200/555/fff/?text=3rd-broken-image-link)](https://example.com/another-broken-image-link)

### preload [​](https://photoswipe.com/options/\#preload "Direct link to heading")

Array, `[1, 2]`. Lazy loading of nearby slides based on direction of movement. Should be an array with two integers, first one - number of items to preload before the current image, second one - after the current image. Two nearby images are always loaded.

```js
import PhotoSwipeLightbox from '/photoswipe/photoswipe-lightbox.esm.js';
const lightbox = new PhotoSwipeLightbox({
  gallery: '#gallery--test-preload',
  children: 'a',
  pswpModule: () => import('/photoswipe/photoswipe.esm.js'),
  preload: [1, 4]
});
lightbox.init();
```

[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/4/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/4/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/5/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/5/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/6/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/6/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/7/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/7/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/8/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/8/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/9/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/9/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/10/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/10/img-2500.jpg)

### mainClass [​](https://photoswipe.com/options/\#mainclass "Direct link to heading")

String, `undefined`. Class that will be added to the root element of PhotoSwipe, may contain multiple separated by space. Example on [Styling](https://photoswipe.com/styling#modifying-icons) page.

### appendToEl [​](https://photoswipe.com/options/\#appendtoel "Direct link to heading")

DOMElement, `document.body`. Element to which PhotoSwipe dialog will be appended when it opens.

```js
import PhotoSwipeLightbox from '/photoswipe/photoswipe-lightbox.esm.js';
const lightbox = new PhotoSwipeLightbox({
  gallery: '#gallery--test-appendToEl',
  children: 'a',
  pswpModule: () => import('/photoswipe/photoswipe.esm.js'),
  appendToEl: document.querySelector('#__docusaurus')
});
lightbox.init();
```

[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg)

### maxWidthToAnimate [​](https://photoswipe.com/options/\#maxwidthtoanimate "Direct link to heading")

Integer, `4000`. Maximum width of image to animate, if initial rendered image width is larger than this value - the opening/closing transition will be automatically disabled.

```js
import PhotoSwipeLightbox from '/photoswipe/photoswipe-lightbox.esm.js';
const lightbox = new PhotoSwipeLightbox({
  gallery: '#gallery--test-maxWidthToAnimate',
  children: 'a',
  pswpModule: () => import('/photoswipe/photoswipe.esm.js'),
  maxWidthToAnimate: 800,
});
lightbox.init();
```

[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg)

## Lightbox module options [​](https://photoswipe.com/options/\#lightbox-module-options "Direct link to heading")

See [getting started](https://photoswipe.com/getting-started) and [data sources](https://photoswipe.com/data-sources) for examples.

### gallery [​](https://photoswipe.com/options/\#gallery "Direct link to heading")

Element, NodeList, or CSS selector (string) for the gallery element.

### children [​](https://photoswipe.com/options/\#children "Direct link to heading")

Element, NodeList, or CSS selector (string) for elements within `gallery`. For example, link elements. If not defined or set to false - root `gallery` node will be used.

### pswpModule [​](https://photoswipe.com/options/\#pswpmodule "Direct link to heading")

Function or Module, `undefined`. A function that should return import() promise (if you need dynamic import), for example:

```text
pswpModule: () => import('photoswipe/dist/photoswipe.esm.js');
```

Or the PhotoSwipe Core module itself, for example:

```js
import PhotoSwipeLightbox from 'photoswipe/dist/photoswipe-lightbox.esm.js';
import PhotoSwipe from 'photoswipe/dist/photoswipe.esm.js';

const lightbox = new PhotoSwipeLightbox({
  pswpModule: PhotoSwipe
  // ...
});
```

### preloadFirstSlide [​](https://photoswipe.com/options/\#preloadfirstslide "Direct link to heading")

Boolean, `true`. Loads the first slide image in parallel with PhotoSwipe Core (while PhotoSwipe is opening).

```js
import PhotoSwipeLightbox from '/photoswipe/photoswipe-lightbox.esm.js';
const lightbox = new PhotoSwipeLightbox({
  gallery: '#gallery--test-appendToEl',
  children: 'a',
  pswpModule: () => import('/photoswipe/photoswipe.esm.js'),
  preloadFirstSlide: false
});
lightbox.init();
```

[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg)

## Translating [​](https://photoswipe.com/options/\#translating "Direct link to heading")

A list of options that might need a translation:

```text
closeTitle: 'Close',
zoomTitle: 'Zoom',
arrowPrevTitle: 'Previous',
arrowNextTitle: 'Next',

errorMsg: 'The image cannot be loaded',
indexIndicatorSep: ' / ',
```

Example:

```js
import PhotoSwipeLightbox from '/photoswipe/photoswipe-lightbox.esm.js';
const lightbox = new PhotoSwipeLightbox({
  gallery: '#gallery--test-i18n',
  children: 'a',

  closeTitle: 'Close the dialog',
  zoomTitle: 'Zoom the photo',
  arrowPrevTitle: 'Go to the previous photo',
  arrowNextTitle: 'Go to the next photo',

  errorMsg: 'The photo cannot be loaded',
  indexIndicatorSep: ' of ',

  pswpModule: () => import('/photoswipe/photoswipe.esm.js'),
  preloadFirstSlide: false
});
lightbox.init();
```

[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg)

Found a typo? [Edit this page](https://github.com/dimsemenov/PhotoSwipe/tree/master/docs/options.md)

Updates on [Twitter](https://twitter.com/photoswipe)

Code on [GitHub](https://github.com/dimsemenov/photoswipe)

Sponsor on [Open Collective](https://opencollective.com/photoswipe)

Made in Ukraine by [Dmytro Semenov](https://twitter.com/dimsemenov)