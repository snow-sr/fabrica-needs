import express from "express"; //Importing Express
import cors from "cors"; //Importing Cors
const app = express(); // initializing express aplication
const port = process.env.PORT || 8087; // initializing port
app.use(cors()); // enabling cors
app.use(express.json()); // enabling json requests
import { createFabricador, getAllFabricadores, deleteFabricador, loginFabricador, } from "./routes/functions.js";
app.get("/", (req, res) => {
    console.log(req.ip);
    res.send("Hello there!");
});
// (Fabricadores)
app.get("/fabricadores", getAllFabricadores);
app.post("/createFabricador", createFabricador);
app.delete("/deleteFabricador/:id", deleteFabricador);
app.post("/loginFabricador", loginFabricador);
// (Needs)
app.listen(port, () => {
    console.log(`Server opened at port: ${port}`);
});
//# sourceMappingURL=index.js.map