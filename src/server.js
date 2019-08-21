import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App1 from './App1';
import Html from './Html';

const port = 3000;
const server = express();

server.get('/', (req,res) => {
  const body = renderToString(<App1 />);
  res.send(Html(body));
});

server.listen(port);
console.log(`Serving at http://localhost:${port}`);
