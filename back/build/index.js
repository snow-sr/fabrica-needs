import express from "express"; //Importing Express
import { auth } from "express-openid-connect";
import { config } from "./auth/authConfig.js";
import cors from "cors"; //Importing Cors
const app = express(); // initializing express aplication
const port = process.env.PORT || 8087; // initializing port
app.use(cors()); // enabling cors
app.use(express.json()); // enabling json requests
import {
  createFabricador,
  getAllFabricadores,
  deleteFabricador,
  getAllSolvedNeeds,
  loginFabricador,
  getSpecificFabricador,
  getBalance,
} from "./routes/fabricadoresFunctions.js";
import {
  getAllNeeds,
  createNeed,
  deleteNeed,
  solveNeed,
} from "./routes/needsFunctions.js";
import { getAllPermissions } from "./routes/permissionsFunctions.js";
app.get("/", (req, res) => {
  console.log(req.ip);
  let routes = app._router.stack
    .filter((r) => r.route)
    .map((r) => r.route.path);
  console.log();
  res.send(`Hello there! This is all available routes: ${routes}`);
});
// (Fabricadores)
app.get("/fabricadores", getAllFabricadores);
app.get("/getFabricador/:id", getSpecificFabricador);
app.get("/:id/banking", getBalance);
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
//# sourceMappingURL=index.js.map
