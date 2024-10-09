import { Router } from "express";
import { getAllPlayers } from "../controllers/players";


const router = Router();

router.get("/getAll", getAllPlayers)

export default router;
