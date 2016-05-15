# Is Kronos Up Yet?
http://iskronosupyet.com is a small web site built to display the current server status for Kronos realms.

This is now dependent on an API repository located here: [iskronosup-api](https://github.com/HazardB/iskronosup-api)

## Dependencies
- Node
- NPM
- React
- React DOM
- React Bootstrap

## Getting started
| Command  | Behind the scenes | Comment |
| ------------- | ------------- | ---- |
| `npm start`  | `npm i && webpack && node server.js` | Installs packages, bundles app with webpack & starts express server|
| `npm build`  | `webpack`  | Bundles React components into `public/bundle.js` |
| `npm run watch`  | `webpack -w` | Runs the webpack watcher - bundling on file change|

### Starting the server
- Run `npm start`.
- The server should now be running on `http://localhost:3000/`. This port is dependent on the environment variable - this logic exists in `server.js`.

### Issues / Contributions
- A few ideas are listed out in the Issues section of this repository
- I am accepting contributions to this repository
