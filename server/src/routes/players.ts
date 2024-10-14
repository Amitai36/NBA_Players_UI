import { Router } from "express";

import { addFavPLayer, getAllPlayers, removeFavPLayer , getAllFav} from "../controllers/players";


const router = Router();

router.get("/getAll", getAllPlayers)

router.get("/getAllFav", getAllFav)

router.post("/addFavPLayer", addFavPLayer)

router.delete("/removeFavPLayer", removeFavPLayer)


export default router;
