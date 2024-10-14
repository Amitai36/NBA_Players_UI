import express from "express";
import swaggerUi from 'swagger-ui-express';

import players from "./routes/players"; // Importing player routes
import swaggerDocument from "./modules/swagger"; // Importing Swagger documentation

const app = express(); // Creating an instance of an Express application

// Middleware to handle routes for player-related operations
app.use("/players", players);

// Setting up Swagger UI for API documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default app;
