# Polaroid

Polaroid is a demo theme for [TINT](http://www.tintup.com/). For demonstration
purposes, it uses a TINT that I setup for the [National Park
Service](https://www.nps.gov/index.htm) (NPS). In addition to pulling in all the
NPS' social media feeds, it also looks for tweets and Instagram posts tagged
with `#101parks` or `#findyourpark` to pull in user-generated content.

[View a demo in action](https://tint-polaroid.herokuapp.com/4322315ecd049d0d0d0fa43e0ea7c5c8efe1ff8f).

## Why?

For me, [polaroids](https://en.wikipedia.org/wiki/Instant_film) were the
original instant-gratification photos, long before social media came along.
Anyone who grew up in the 80s remembers shaking a photo, waiting for it to
slowly appear before your eyes. This theme goes retro, styling the images as
polaroid photos and presenting them in an organized (but not too precise)
manner. This theme is perfect for showing the day's photos on a TV display at a
park's visitor center.

While I've focused on America's parks for the demo, the theme is more generally
useful for a variety of tourist destinations.

## Challenges Encountered

Much of the challenge in this theme is in the CSS: specifically, nailing down
the experience of looking at a collection of polaroids. When emulating something
based in real life, it's important to really nail down the details. The newer
developments in
CSS--[animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations),
[transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions),
[variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables),
[grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout),
[flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)--these
are all key in obsessing over those details.

## Further Development

Questions to explore with end users, with regards to the user experience:

1. How would you envision using this theme within your own park or tourist
destination?
2. The theme is deliberately minimalistic with regards to the
information presented; is there any other information you'd like to see? 

Places to improve:

* Write tests to cover the code.
* Get a real build & CI process ([Gulp](https://gulpjs.com/),
[Webpack](https://webpack.js.org/), [PostCSS](http://postcss.org/), [Travis
CI](https://travis-ci.org/)) in place.
* Refine loading to further simulate the experience of viewing a polaroid:
  * Begin the fade when the image scrolls into view.
  * "Shake" the polaroid to trigger the image fade.
* Smooth loading of new images via CSS transitions or animations.
* Figure out how to prevent grid resizes when a user name is too wide.
* Test across a variety of screen sizes and resolutions; setup CSS breakpoints
accordingly.
* Improve browser support.
* Play around with other small touches (e.g., tape to attach the polaroid) to
further enhance the polaroid look-and-feel.
* It would be good to update the refTimestamp so that we're occasionally fast
forwarding to the current moment and not perpetually moving backwards in time.

## Getting Started

To run Polaroid locally, assuming you have node (6.11.0), npm (3.10.10), and
optionally yarn (0.27.5):

1. `npm install` or `yarn`.
2. `npm start` or `yarn start`.
3. Point Chrome at http://localhost:3000/YOUR_API_TOKEN; optionally, you can
also point it to http://localhost:3000/YOUR_API_TOKEN/YOUR_TINT_NAME if you want
to use a feed other than the NPS one I created.

**Note:** Polaroid uses some advanced CSS techniques; without PostCSS and
polyfills, it will likely fail in anything but the latest Chrome or Firefox.