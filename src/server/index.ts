import express from 'express';
import { config } from './config';
import { template } from './render/template';
import { render } from './render';

const app = express();

app.get("*", (req, res) => {
  res.send(render(req.url));
})

app.listen(config.PORT, () => {
  console.log(`Listening in http://localhost:${config.PORT}`);
})