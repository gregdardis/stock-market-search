# Stock Market Search 
[![Coverage Status](https://coveralls.io/repos/github/gregdardis/stock-market-search/badge.svg?branch=master)](https://coveralls.io/github/gregdardis/stock-market-search?branch=master&service=github)
## Description

Stock Market Search is a web app that allows you to search for stocks and view related financial information and metrics.

The front end tech stack includes [React](https://github.com/facebook/react), [Redux](https://github.com/reactjs/redux), [Webpack](https://github.com/webpack/webpack), and [Babel](https://github.com/babel/babel). The server is written using [Node.js](https://github.com/nodejs/node)/[Express](https://github.com/expressjs/express). Stock data is retrieved from Yahoo Finance using [node-yahoo-finance](https://github.com/pilwon/node-yahoo-finance).

## How to run

1. Clone this repository.  Navigate to the project root.
2. Install dependencies: `npm i`
3. In one terminal window, start server: `npm run start`
4. In another terminal window, start client: `npm run dev`
5. In a browser, open the url that was printed to the console in step 4 when the client started.  This is likely http://localhost:8080.