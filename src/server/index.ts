import express from 'express';
import axios from 'axios';

import { config } from './config';
import { render } from './render';
import { webpackMiddleware } from './middlewares/webpackMiddleware';


const app = express();

const isDev = process.env.NODE_ENV !== "production"

if (isDev) {
  app.use(webpackMiddleware())
} else {
  app.use(express.static("dist"))
}

app.get("/galaxias", async (req, res) => {
  try {
    const { data } = await axios.get("https://images-api.nasa.gov/search?q=galaxies");
    const initialProps = {
      galaxies: data?.collection?.items,
    };

    res.send(render(req.url, initialProps))
  } catch (error) {
    throw new Error("An error ocurred in /galaxias", error)
  }
})

app.get("*", (req, res) => {
  res.send(render(req.url));
})

app.listen(config.PORT, () => {
  console.log(`Listening in http://localhost:${config.PORT}`);
})