import cors from "cors";
import morgan from "morgan"
import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";

import api from "./api";
import connect from "./db/connect";
import { port } from "./config/index"

//for get var from env
dotenv.config();

//express server
const app = express()


//allow json here
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//get all can get and post here
app.use(cors());

//for logs
app.use(morgan("dev"))


//where / go to api routing
app.use("/api", api)

//listen to 3000 port
app.listen(port, () => {
    connect
    console.log("listen to port 3000")
})