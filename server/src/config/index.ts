import dotenv from "dotenv"; // Importing dotenv to manage environment variables
dotenv.config(); // Load environment variables from .env file

export const port = process.env["PORT"];

export const balldontlieKey = process.env["BALLDONTLIE_KEY"];

export const host = process.env["HOST"];

export const dbport = Number(process.env["DB_PORT"]);

export const user = process.env["USER"];

export const password = process.env["PASSWORD"];

export const database = process.env["DATABASE"];


