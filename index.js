const config = require('config');
const axios = require('axios');

/**
 * If a url is provided, hits that URL to get your current public IP address.
 * Otherwise tries to read the url from your config file.
 * @param {String} url - URL to GET to determine your public address.
 * @returns {String} - The systems current public URL or an error.
 */
const getIp = function (configUrl) {
  const url = configUrl ? configUrl : config.get('get_api_string'); 
  return axios.get(url);
}

getIp().then( resp => {
  console.log(resp.data);
}, err => {
  console.err(err);
});

