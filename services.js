require('es6-promise').polyfill();
const fetch = require('isomorphic-fetch');

const API_TOKEN = '4322315ecd049d0d0d0fa43e0ea7c5c8efe1ff8f';
const BASE_URL = 'https://api.tintup.com/v1';

/**
 * Fetches the specified TINT feed, optionally with parameters per TINT's API.
 * @param  {String}  name   The feed's name.
 * @param  {Object}  params The feed's parameters (excluding api_token).
 * @return {Promise}        A Promise for handling the feed JSON data.
 */
function fetchFeed(name, params) {
  params['api_token'] = API_TOKEN;
  const querystring = Object.keys(params)
    .map(key => `${key}=${params[key]}`)
    .join('&');
  const url = `${BASE_URL}/feed/${name}?${querystring}`;
  return fetch(url).then(response => {
    return response.json();
  });
}

module.exports.fetchFeed = fetchFeed;
