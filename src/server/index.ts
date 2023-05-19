import express from 'express';
import { config } from './config';

const app = express();

app.get("*", (req, res) => {
  res.send(`<h1>Hola mundo con ruta: ${req.url}</h1>`);
})

app.listen(config.PORT, () => {
  console.log(`Listening in http://localhost:${config.PORT}`);
})