import { Request, Response } from "express";

import { allPlayers } from "../api/players";
import { pool } from "../db/connect";
import { AddFavPLayer, GetAllPlayers } from "../types/players";

// Function to retrieve all players with optional pagination and search
export const getAllPlayers = async (req: Request<{}, {}, {}, GetAllPlayers>, res: Response) => {
    const { nextPage, search } = req.query;

    try {
        // Fetch players based on the query parameters
        const players = await allPlayers({ nextPage, search });
        res.status(200).json(players);
    } catch (error) {
        // Handle errors and respond with a 500 status
        res.status(500).json(error);
    }
};

// Function to add a player to favorites
export const addFavPLayer = async (req: Request<{}, {}, AddFavPLayer>, res: Response) => {
    const { id, name } = req.body;

    try {
        // Insert the favorite player into the database
        await pool.query('INSERT INTO public.fav(player_id, name) VALUES($1, $2);', [id, name]);
        res.status(201).json({ message: "success" });
    } catch (error) {
        // Handle errors during insertion
        res.status(500).json({ message: error });
    }
};

// Function to remove a player from favorites
export const removeFavPLayer = async (req: Request<{}, {}, {}, { id: number }>, res: Response) => {
    const { id } = req.query;

    try {
        // Delete the favorite player from the database
        await pool.query('DELETE FROM public.fav WHERE player_id = $1;', [id]);
        res.status(204).json({ message: "success" });
    } catch (error) {
        // Handle errors during deletion
        res.status(500).json({ message: error });
    }
};

// Function to retrieve all favorite players
export const getAllFav = async (_req: Request, res: Response) => {
    try {
        // Query all favorite players from the database
        const queryResult = await pool.query("SELECT * FROM public.fav");
        res.json({ data: queryResult.rows }); // Ensure to return the rows
    } catch (error) {
        // Handle errors during retrieval
        res.status(500).json({ message: error });
    }
};
