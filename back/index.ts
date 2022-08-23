import express from "express"; //Importing Express
import { auth } from "express-openid-connect";
import { config } from "./auth/authConfig.js";
import cors from "cors"; //Importing Cors
const app: express.Application = express(); // initializing express aplication
const port: Number | String = process.env.PORT || 8087; // initializing port

app.use(cors()); // enabling cors
app.use(express.json()); // enabling json requests
app.use(auth(config));

import {
  createFabricador,
  getAllFabricadores,
  deleteFabricador,
  getAllSolvedNeeds,
  loginFabricador,
} from "./routes/fabricadoresFunctions.js";

import {
  getAllNeeds,
  createNeed,
  deleteNeed,
  solveNeed,
} from "./routes/needsFunctions.js";

import { getAllPermissions } from "./routes/permissionsFunctions.js";

app.get("/", (req: express.Request, res: express.Response) => {
  console.log(req.ip);
  res.send("Hello there!");
});

// (Fabricadores)
app.get("/fabricadores", getAllFabricadores);

app.post("/createFabricador", createFabricador);

app.delete("/deleteFabricador/:id", deleteFabricador);

app.post("/loginFabricador", loginFabricador);

app.get("/solved/:id", getAllSolvedNeeds);

// (Needs)

app.get("/needs", getAllNeeds);

app.post("/createNeed", createNeed);

app.delete("/deleteNeed/:id", deleteNeed);

app.post("/solveNeed", solveNeed);

// (Permissions)
app.get("/permissions", getAllPermissions);

// (Banking)

app.listen(port, () => {
  console.log(`Server opened at port: ${port}`);
});
