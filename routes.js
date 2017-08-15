const express = require('express');
const services = require('./services');

const router = express.Router();

/* GET home page. */
router.get(
  [
    '/',
    '/:apiToken',
    '/:apiToken/:tintName',
    '/:apiToken/:tintName/:refTimestamp/:pageId'
  ],
  function(req, res) {
    const apiToken = req.params.apiToken;
    if (!apiToken) {
      res.status(403).send('API token required in URL');
    }
    const pageId = req.params.pageId || 1;
    const tintName = req.params.tintName || 'nationalparkservice';
    const tintParams = {
      api_token: apiToken,
      offset: pageId * 20
    };
    if (req.params.refTimestamp) {
      tintParams['ref_timestamp'] = req.params.refTimestamp;
    }
    services.fetchFeed(tintName, tintParams).then(feed => {
      // Generate the URL for requesting the next page of items.
      let next = null;
      if (feed.has_next_page) {
        const refTimestamp = feed.next_page.match(/ref_timestamp=(\d+)/)[1];
        next = `/${apiToken}/${tintName}/${refTimestamp}/${pageId + 1}`;
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
  }
);

module.exports = router;
