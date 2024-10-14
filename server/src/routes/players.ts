import { Router } from "express";

// Importing controller functions for player management
import { addFavPLayer, getAllPlayers, removeFavPLayer, getAllFav } from "../controllers/players";

// Creating a new router instance
const router = Router();

// Route to get all players
// Method: GET
// Endpoint: /getAll
router.get("/getAll", getAllPlayers);

// Route to get all favorite players
// Method: GET
// Endpoint: /getAllFav
router.get("/getAllFav", getAllFav);

// Route to add a player to favorites
// Method: POST
// Endpoint: /addFavPLayer
router.post("/addFavPLayer", addFavPLayer);

// Route to remove a player from favorites
// Method: DELETE
// Endpoint: /removeFavPLayer
router.delete("/removeFavPLayer", removeFavPLayer);

export default router;
