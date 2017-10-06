import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from '../shared/App';

/*
  location은 server로 온 request의 url
*/
const render = location => ReactDOMServer.renderToString(
  <StaticRouter location={location} >
    <App />
  </StaticRouter>
);

export default render;
