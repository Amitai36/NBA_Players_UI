import { Router } from "express";
import { addFavPLayer, getAllPlayers } from "../controllers/players";


const router = Router();

router.get("/getAll", getAllPlayers)

router.post("/addFavPLayer", addFavPLayer)

export default router;
