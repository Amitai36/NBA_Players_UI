import { Request, Response } from "express";

import { allPlayers } from "../api/players";
import { pool } from "../db/connect";
import { AddFavPLayer, GetAllPlayers } from "../types/players";

export const getAllPlayers = async (req: Request<{}, {}, {}, GetAllPlayers>, res: Response) => {
    const { nextPage, search } = req.query

    try {
        const players = await allPlayers({ nextPage, search })
        res.json(players).status(200)
    } catch (error) {
        res.json(error).status(500)
    }
}

export const addFavPLayer = async (req: Request<{}, {}, AddFavPLayer>, res: Response) => {
    const { id, name } = req.body

    try {
        await pool.query('INSERT INTO public.fav(player_id, name)	VALUES($1, $2);', [id, name])
        res.json({ message: "success" }).status(201)
    } catch (error) {
        res.json({ message: error })
    }
}

export const removeFavPLayer = async (req: Request<{}, {}, {}, { id: number }>, res: Response) => {
    const { id } = req.query

    try {
        await pool.query('DELETE FROM public.fav WHERE name like $1;', [id])
        res.json({ message: "success" }).status(204)
    } catch (error) {
        res.json({ message: error })
    }
}

export const getAllFav = async (_req: Request, res: Response) => {

    try {
        const queryResult = await pool.query("SELECT * FROM public.fav")
        res.json({ data: queryResult });
    } catch (error) {
        res.status(500).json({ message: error });
    }
} 
