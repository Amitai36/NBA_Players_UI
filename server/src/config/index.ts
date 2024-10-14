import dotenv from "dotenv"; // Importing dotenv to manage environment variables
dotenv.config(); // Load environment variables from .env file

export const port = process.env["PORT"];

export const balldontlieKey = process.env["BALLDONTLIE_KEY"];
