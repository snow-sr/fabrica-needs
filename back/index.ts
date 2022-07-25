import express from "express"; //Importing Express
import cors from "cors"; //Importing Cors
const app: express.Application = express(); // initializing express aplication
const port: Number | String = process.env.PORT || 8087; // initializing port

app.use(cors()); // enabling cors]

import { createFabricador, getAllFabricadores } from "./routes/functions.js";

app.get("/", (req: express.Request, res: express.Response) => {
  console.log(req.ip);
  res.send("Hello there!");
});

app.get("/fabricadores", getAllFabricadores);

app.get("/createFabricador", createFabricador);

app.listen(port, () => {
  console.log(`Server opened at port: ${port}`);
});
