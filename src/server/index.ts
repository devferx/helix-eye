import express from 'express';
import { config } from './config';
import { render } from './render';
import axios from 'axios';

const app = express();

app.use(express.static("dist"))

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