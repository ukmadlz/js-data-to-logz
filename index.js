// Imports
require('dotenv').config()
const Axios = require('axios');
const Logz = require('logzio-nodejs');

/**
 * Configuration
 */
// General
const URL = process.env.URL || 'https://example.com';
const METHOD = process.env.METHOD || 'GET';
// Logz.io configuration: https://docs.logz.io/shipping/log-sources/nodejs.html
const logger = Logz.createLogger({
  token: process.env.LOGZIO_SHIPPING_TOKEN,
  protocol: 'https',
  host: process.env.LOGZIO_LISTENER_HOST,
  port: '8071',
  type: process.env.LOGZIO_LOG_TYPE,
});

/**
 * The request itself (uses Axios)
 *
 * For specification on how to configure https://www.npmjs.com/package/axios#request-config
 */
return Axios({
  url: URL,
  method: METHOD,
})
// This is a promise chain: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
.then((response) => {
  // deconstruct the data object from the response
  const { data } = response;

  // Point to specific data, if nested use the dot notation to point to it eg const dataObj = data.elements;
  const dataObj = data;

  // Make sure that the data is processed consistently regardless of single object or array of objects
  const dataArray = [];
  if(!Array.isArray(dataObj)) {
    dataArray.push(dataObj);
  } else {
    dataArray = dataObj;
  }

  // Send each record to Logz.io
  return Promise.all(dataArray.map((value) => {
    /**
     * If you want to manipulate each record for use in Kibana (change type or the data) I would do the transformation in here.
     *
     * Relace `return logger.log(value);` with:
     * ```
     * return logger.log({
     *  id: value.idenfifier,
     *  date: value.datestamp,
     * // etc
     * });
     * ````
     */
    return logger.log(value);
  }));
})
// If successfull
.then((data) => {
  console.log('Successfully sent to Logz.io');
})
// Catch any error and dump to Logz.IO, the screen and exit
.catch((error) => {
  logger.log(error);
  console.error(error);
  process.exit(1);
})
// Make sure the connection is closed
.finally(() => {
  console.log('Close connection to Logz.io')
  logger.sendAndClose();
})