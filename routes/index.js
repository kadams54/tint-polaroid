require('es6-promise').polyfill();
require('isomorphic-fetch');
const express = require('express');

const API_TOKEN = '4322315ecd049d0d0d0fa43e0ea7c5c8efe1ff8f';
const TINT_NAME = 'nationalparkservice';
const BASE_URL = 'https://api.tintup.com/v1';

const fetchFeed = function(params) {
  params['api_token'] = API_TOKEN;
  const querystring = Object.keys(params)
    .map(key => `${key}=${params[key]}`)
    .join('&');
  url = `${BASE_URL}/feed/${TINT_NAME}?${querystring}`;
  return fetch(url).then(response => {
    return response.json();
  });
};

const router = express.Router();

/* GET home page. */
router.get(['/', '/:refTimestamp/:pageId'], function(req, res) {
  const pageId = req.params.pageId || 1;
  const tintParams = {
    offset: pageId * 20
  };
  if (req.params.refTimestamp) {
    tintParams['ref_timestamp'] = req.params.refTimestamp;
  }
  fetchFeed(tintParams).then(feed => {
    // Generate the URL for requesting the next page of items.
    let next = null;
    if (feed.has_next_page) {
      const refTimestamp = feed.next_page.match(/ref_timestamp=(\d+)/)[1];
      next = `/${refTimestamp}/${pageId + 1}`;
    }
    // Only pull items that are visible.
    const items = feed.data.filter(item => item.visible);
    // Munge the data in each item so we only end up with the data we want to
    // display.
    let polaroids = items.map(item => {
      return {
        type: item.image ? 'image' : 'text',
        image: item.image ? item.image.replace(',w_300', '') : null,
        title: item.title.split(/#\w/)[0].trim(), // Drop hashtags.
        author: '@' + JSON.parse(item.author).name
      };
    });
    // Drop any text-only ones without any non-hashtag text.
    polaroids = polaroids.filter(polaroid => {
      return polaroid.type === 'image' || polaroid.title;
    });
    res.render('index', { polaroids: polaroids, next: next });
  });
});

module.exports = router;
