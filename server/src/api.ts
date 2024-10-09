import express from "express";

import players from "./routes/players"

const app = express();

app.use("/players", players)
export default app;
