import express from "express";
import swaggerUi from 'swagger-ui-express';

import players from "./routes/players"
import swaggerDocument from "./modules/swagger";

const app = express();

app.use("/players", players)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default app;
