# js-data-to-logz
A quick boilerplate to ship data from X to logz.io

## Quick run
Once cloned and installed the dependencies you can quickly grab and send data to logz.io by

### Setting the ENVs
Copy and paste `.env.example` to `.env` and fill in the required Logz.io credentials

### Running it
After that you can either do to [https://github.com/ukmadlz/js-data-to-logz/blob/main/index.js#L10](https://github.com/ukmadlz/js-data-to-logz/blob/main/index.js#L10) and edit the URL and METHOD or try `URL=https://ssd-api.jpl.nasa.gov/sbdb.api\?sstr\=2015ab METHOD=GET node index.js`

## Transformation
If you'd like to change the data being sent to Logz.io, you can change the following:

The root object to proces at [https://github.com/ukmadlz/js-data-to-logz/blob/main/index.js#L36](https://github.com/ukmadlz/js-data-to-logz/blob/main/index.js#L36) or the individual parts of the object at [https://github.com/ukmadlz/js-data-to-logz/blob/main/index.js#L48](https://github.com/ukmadlz/js-data-to-logz/blob/main/index.js#L48)