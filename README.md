Polaroid is a demo theme for [TINT](http://www.tintup.com/). For demonstration
purposes, it uses a TINT that I setup for the National Park Service (NPS). In
addition to pulling in all the NPS' social media feeds, it also looks for tweets
and Instagram posts tagged with #101parks or #findyourpark to pull in
user-generated content.

# Why?

For me, polaroids were the original instant-gratification photos, long before
social media came along. Consequently this theme harkens back to the original,
presenting the images in an organized (but not too precise) manner perfect for
display in a park visitor center. I can picture this theme scrolling through the
day's photos on a TV display up on the wall behind the visitor information desk.

It wouldn't be too hard to modify for specific parks, as a way to showcase what
the visitors are experiencing that particular day. While I've focused in on
American's parks, it's also not too hard to see this theme as more generally
useful for a variety of tourist destinations.

# Challenges Encountered

Much of the challenge in this theme is in the CSS: specifically, nailing down
the experience of looking at a collection of polaroids. When emulating something
based in real life, it's important to really nail down the details. The newer
developments in CSS: animations, transitions, variables, grid, flexbox... these
are all key in obsessing over those details.

# Further Development

Questions to explore with end users, with regards to the user experience:

1. How would you envision using this within your own park or tourist
destination?
2. The theme is deliberately barebones with regards to the
information presented; what information would you like to see added? 

Places to improve:

* Refine loading to further simulate the experience of viewing a polaroid:
  * Begin the fade when the image scrolls into view.
  * "Shake" the polaroid to trigger the image fade.
* Smooth loading of new images via CSS transitions or animations.
* Play around with other small touches (e.g., tape to attach the polaroid) to
further enhance the polaroid look-and-feel.
* Get test coverage and a real build process (Gulp, Webpack, PostCSS) in place.
* Improve browser support.
* Figure out how to prevent grid resizes when a user name is too wide.
* Test across a variety of screen sizes and resolutions; setup CSS breakpoints
accordingly.
* It would be good to update the refTimestamp so that we're occasionally fast
forwarding to the current moment and not perpetually moving backwards in time.

# Getting Started

To run Polaroid locally:

1. `npm install`
2. `npm run`
3. Point Chrome at http://localhost:3000/YOUR_API_TOKEN; optionally, you can
also point it to http://localhost:3000/YOUR_API_TOKEN/YOUR_TINT_NAME if you want
to use a feed other than the NPS one I created.

Note that Polaroid uses some advanced CSS techniques; without PostCSS and
polyfills, it will likely fail in anything but the latest Chrome.