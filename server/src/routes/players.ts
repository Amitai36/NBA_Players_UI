import { Router } from "express";

import { addFavPLayer, getAllPlayers, removeFavPLayer } from "../controllers/players";


const router = Router();

router.get("/getAll", getAllPlayers)

router.post("/addFavPLayer", addFavPLayer)

router.delete("/removeFavPLayer", removeFavPLayer)


export default router;
