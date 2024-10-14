import cors from "cors";
import morgan from "morgan"
import dotenv from "dotenv";
import express from "express";
// import jsdoc from "swagger-jsdoc"
import bodyParser from "body-parser";
// import swagger from "swagger-ui-express"

import api from "./api";
import { port } from "./config/index"
import connect from "./db/connect";
// import { loadData } from "./utils/loadFile";

//for get var from env
dotenv.config();

//express server
const app = express()

//load json
// const swaggerJson = loadData("../modules/swagger.json")

//allow json here
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//get all can get and post here
app.use(cors());

//for logs
app.use(morgan("dev"))

//swagger
// app.use("/api-docs", swagger.serve, swagger.setup(jsdoc(swaggerJson)))

//where / go to api routing
app.use("/api", api)

//listen to 3000 port
app.listen(port, async () => {
    await connect
    console.log("listen to port 3000")
})