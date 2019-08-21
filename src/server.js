import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App1 from './App';
import Html from './Html';

const port = 3000;
const server = express();

server.get('/', (req,res) => {
  const body = renderToString(<App1 />);
  const title = 'Server side rendering';

  res.send(
      Html({
        body,
        title
      })
  );
});

server.listen(port);
console.log(`Serving at http://localhost:${port}`);
