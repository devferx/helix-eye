import express from 'express';
import { config } from './config';
import { render } from './render';

const app = express();

app.use(express.static("dist"))

app.get("*", (req, res) => {
  res.send(render(req.url));
})

app.listen(config.PORT, () => {
  console.log(`Listening in http://localhost:${config.PORT}`);
})