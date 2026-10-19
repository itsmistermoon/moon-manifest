[Skip to main content](https://photoswipe.com/#)

[**PhotoSwipe** 5.4.4](https://photoswipe.com/) [Docs](https://photoswipe.com/getting-started) SearchK

[v6 feedback](https://github.com/dimsemenov/PhotoSwipe/discussions/2170)

[Twitter](https://twitter.com/photoswipe) [Github24,961](https://github.com/dimsemenov/photoswipe)

# PhotoSwipe 5.4.4

JavaScript image gallery and lightbox

[Documentation and examples](https://photoswipe.com/getting-started)

[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/home-demo/luca-bravo-ny6qxqv_m04-unsplash_snrzpf/luca-bravo-ny6qxqv_m04-unsplash_snrzpf_c_scale,w_664.jpg)**Test Caption**\\
\\
Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.](https://cdn.photoswipe.com/photoswipe-demo-images/photos/home-demo/luca-bravo-ny6qxqv_m04-unsplash_snrzpf/luca-bravo-ny6qxqv_m04-unsplash_snrzpf_c_scale,w_2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/home-demo/luca-bravo-O453M2Liufs-unsplash_qqt53u/luca-bravo-O453M2Liufs-unsplash_qqt53u_c_scale,w_300.jpg)**Another Test Caption**\\
\\
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.](https://cdn.photoswipe.com/photoswipe-demo-images/photos/home-demo/luca-bravo-O453M2Liufs-unsplash_qqt53u/luca-bravo-O453M2Liufs-unsplash_qqt53u_c_scale,w_2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/home-demo/luca-bravo-VowIFDxogG4-unsplash_ibrktu/luca-bravo-VowIFDxogG4-unsplash_ibrktu_c_scale,w_300.jpg)**Long caption**\\
\\
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?](https://cdn.photoswipe.com/photoswipe-demo-images/photos/home-demo/luca-bravo-VowIFDxogG4-unsplash_ibrktu/luca-bravo-VowIFDxogG4-unsplash_ibrktu_c_scale,w_2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/home-demo/luca-bravo-zAjdgNXsMeg-unsplash_q6zdih/luca-bravo-zAjdgNXsMeg-unsplash_q6zdih_c_scale,w_300.jpg)**Lorem Ipsum**\\
\\
Unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.](https://cdn.photoswipe.com/photoswipe-demo-images/photos/home-demo/luca-bravo-zAjdgNXsMeg-unsplash_q6zdih/luca-bravo-zAjdgNXsMeg-unsplash_q6zdih_c_scale,w_2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/home-demo/luca-bravo-A-fubu9QJxE-unsplash_jxy5p8/luca-bravo-A-fubu9QJxE-unsplash_jxy5p8_c_scale,w_300.jpg)**Test Caption**\\
\\
Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?](https://cdn.photoswipe.com/photoswipe-demo-images/photos/home-demo/luca-bravo-A-fubu9QJxE-unsplash_jxy5p8/luca-bravo-A-fubu9QJxE-unsplash_jxy5p8_c_scale,w_2500.jpg)

Photos by Luca Bravo

## What’s new in v5

#### Code quality and rewrite in ES6

The script is now distributed as an ES module and does not require a build step to use. [The documentation](https://photoswipe.com/getting-started) is also updated and now includes more examples.

#### Simpler initialization and dynamic import support

PhotoSwipe now supports dynamic import and does not block page rendering.

```html
<script type="module">
import Lightbox from './photoswipe-lightbox.esm.js';
const lightbox = new Lightbox({
  gallery: '#my-gallery',
  children: 'a',
  pswpModule: () => import('./photoswipe.esm.js')
});
lightbox.init();
</script>
```

#### Animation and gesture engine update

Improved performance of most animations, touch gestures should feel more fluid now. The initial opening or closing [transition can be run from a CSS-cropped thumbnail](https://photoswipe.com/opening-or-closing-transition#animating-from-cropped-thumbnail), as you can see on the top of this page.

#### Single CSS file and no external assets

Using CSS variables, default icons are dynamically generated and tiny.

[Styling guide →](https://photoswipe.com/styling)

#### Built-in responsive images support

PhotoSwipe also dynamically loads larger images as a user zooms via srcset.

#### Open images in a zoomed state

It's now much easier to control zoom level, refer to the [Adjusting Zoom Level](https://photoswipe.com/adjusting-zoom-level) section of docs for more info. The example below opens images in a zoomed state and individually.

[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/home-demo/luca-bravo-zAjdgNXsMeg-unsplash_q6zdih/luca-bravo-zAjdgNXsMeg-unsplash_q6zdih_c_scale,w_300.jpg)**Lorem Ipsum**\\
\\
Unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.](https://cdn.photoswipe.com/photoswipe-demo-images/photos/home-demo/luca-bravo-zAjdgNXsMeg-unsplash_q6zdih/luca-bravo-zAjdgNXsMeg-unsplash_q6zdih_c_scale,w_2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/home-demo/luca-bravo-A-fubu9QJxE-unsplash_jxy5p8/luca-bravo-A-fubu9QJxE-unsplash_jxy5p8_c_scale,w_300.jpg)**Test Caption**\\
\\
Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?](https://cdn.photoswipe.com/photoswipe-demo-images/photos/home-demo/luca-bravo-A-fubu9QJxE-unsplash_jxy5p8/luca-bravo-A-fubu9QJxE-unsplash_jxy5p8_c_scale,w_2500.jpg)

#### Removed features from the core

Some built-in features were removed in v5, either because they are using outdated technology or just rarely used. Some of them are or will be replaced by a plugin. These include:

- History API (#hash-based navigation is outdated)
- Social sharing (unreliable URL, lack of Opengraph support)
- Fullscreen button (rarely used, double fullscreen). [Related example in docs →](https://photoswipe.com/native-fullscreen-on-open)
- Caption (accessibility problems). Refer to the [caption section of docs](https://photoswipe.com/caption).
- Inline gallery support (v5 is mainly designed to be used as a dialog).

## Plugins

#### [Dynamic Caption plugin](https://github.com/dimsemenov/photoswipe-dynamic-caption-plugin)

A plugin that dynamically positions the caption below or aside depending on the available free space.

[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/home-demo/luca-bravo-ny6qxqv_m04-unsplash_snrzpf/luca-bravo-ny6qxqv_m04-unsplash_snrzpf_c_scale,w_664.jpg)**Test Caption**\\
\\
Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.](https://cdn.photoswipe.com/photoswipe-demo-images/photos/home-demo/luca-bravo-ny6qxqv_m04-unsplash_snrzpf/luca-bravo-ny6qxqv_m04-unsplash_snrzpf_c_scale,w_2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/home-demo/luca-bravo-O453M2Liufs-unsplash_qqt53u/luca-bravo-O453M2Liufs-unsplash_qqt53u_c_scale,w_300.jpg)**Another Test Caption**\\
\\
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.](https://cdn.photoswipe.com/photoswipe-demo-images/photos/home-demo/luca-bravo-O453M2Liufs-unsplash_qqt53u/luca-bravo-O453M2Liufs-unsplash_qqt53u_c_scale,w_2500.jpg)[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/home-demo/luca-bravo-VowIFDxogG4-unsplash_ibrktu/luca-bravo-VowIFDxogG4-unsplash_ibrktu_c_scale,w_300.jpg)**Long caption**\\
\\
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?](https://cdn.photoswipe.com/photoswipe-demo-images/photos/home-demo/luca-bravo-VowIFDxogG4-unsplash_ibrktu/luca-bravo-VowIFDxogG4-unsplash_ibrktu_c_scale,w_2500.jpg)

#### [Tiled Deep Zoom plugin](https://github.com/dimsemenov/photoswipe-deep-zoom-plugin) (experimental)

Tile-based image viewer that allows displaying of extremely large images. Unlike conventional tile-viewers (such as Leaflet or OpenSeaDragon) it displays tiles only after the user zooms beyond the primary image, and keeps all default PhotoSwipe navigation between slides.

[![](https://cdn.photoswipe.com/photoswipe-deep-zoom/old-map/thumb.jpg)](https://cdn.photoswipe.com/photoswipe-deep-zoom/old-map/full.jpg)[**Cambriae Typus**](https://en.wikipedia.org/wiki/Cambriae_Typus)

Humphrey Llwyd


5,832px x 4,409px
[![A sergeant of the Light Horse](https://cdn.photoswipe.com/photoswipe-deep-zoom/a-sergeant-of-the-light-horse/thumb.jpg)](https://cdn.photoswipe.com/photoswipe-deep-zoom/a-sergeant-of-the-light-horse/full.jpg)[**A sergeant of the Light Horse**](https://en.wikipedia.org/wiki/A_Sergeant_of_the_Light_Horse)

George Lambert


4,578px x 5,736px
[![](https://cdn.photoswipe.com/photoswipe-deep-zoom/starry/thumb.jpg)](https://cdn.photoswipe.com/photoswipe-deep-zoom/starry/starry_files/full.jpg)[**The Starry Night**](https://en.wikipedia.org/wiki/The_Starry_Night)

Vincent van Gogh


30,000px x 23,756px
[![](https://cdn.photoswipe.com/photoswipe-demo-images/photos/chen-hongshou/thumb.jpg)](https://cdn.photoswipe.com/photoswipe-demo-images/photos/chen-hongshou/large.jpg)[**Magnolia and Erect Rock**](https://en.wikipedia.org/wiki/Chen_Hongshou)

Chen Hongshou


1,820px x 1,948px (not tiled)


## License

PhotoSwipe is free for personal or commercial projects (MIT license).

Please [support the development on Open Collective](https://opencollective.com/photoswipe) if you find it useful.

Made in Ukraine by [Dmytro Semenov](https://twitter.com/dimsemenov)