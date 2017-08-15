require('es6-promise').polyfill();
const fetch = require('isomorphic-fetch');

const BASE_URL = 'https://api.tintup.com/v1';

/**
 * Fetches the specified TINT feed, optionally with parameters per TINT's API.
 * @param  {String}  name   The feed's name.
 * @param  {Object}  params The feed's parameters; at minimum, api_token must be
 *                          set.
 * @return {Promise}        A Promise for handling the feed JSON data.
 */
function fetchFeed(name, params) {
  const querystring = Object.keys(params)
    .map(key => `${key}=${params[key]}`)
    .join('&');
  const url = `${BASE_URL}/feed/${name}?${querystring}`;
  return fetch(url).then(response => {
    return response.json();
  });
}

module.exports.fetchFeed = fetchFeed;
