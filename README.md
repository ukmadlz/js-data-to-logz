# js-data-to-logz
A quick boilerplate to ship data from X to logz.io

## Quick run
Once cloned and installed the dependencies you can quickly grab and send data to logz.io by

### Setting the ENVs
Copy and paste `.env.example` to `.env` and fill in the required Logz.io credentials

### Running it
After that you can either do to [./index.html#L27](./index.html#L27) and edit the URL and METHOD or try `URL=https://ssd-api.jpl.nasa.gov/sbdb.api\?sstr\=2015ab METHOD=GET node index.js`

## Transformation
If you'd like to change the data being sent to Logz.io, you can change the following:

The root object to proces at [./index.html#L36](./index.html#L36) or the individual parts of the object at [./index.html#L48](./index.html#L48)