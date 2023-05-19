import express from 'express';
import { config } from './config';
import { template } from './render/template';

const app = express();

app.get("*", (req, res) => {
  res.send(template(`<h1>Hola desde la ruta ${req.url}</h1>`));
})

app.listen(config.PORT, () => {
  console.log(`Listening in http://localhost:${config.PORT}`);
})