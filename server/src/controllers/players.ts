import { Request, Response } from "express";

import { allPlayers } from "../api/players";
import { pool } from "../db/connect";

export const getAllPlayers = async (req: Request<{}, {}, {}, { nextPage: number, search: string }>, res: Response) => {
    const { nextPage, search } = req.query
    console.log(search)
    try {
        const players = await allPlayers({ nextPage, search })
        res.json(players).status(200)
    } catch (error) {
        res.json(error).status(500)
    }
}

export const addFavPLayer = async (req: Request<{}, {}, { id: number, name: string }>, res: Response) => {
    const { id, name } = req.body

    try {
        await pool.query('INSERT INTO public.fav(player_id, name)	VALUES($1, $2);', [id, name])
        res.json({ message: "success" })
    } catch (error) {
        res.json({ message: error })
    }
}

export const removeFavPLayer = async (req: Request<{}, {}, { id: number }>, res: Response) => {
    const { id } = req.body

    try {
        await pool.query('DELETE FROM public.fav WHERE name like $1;', [id])
        res.json({ message: "success" })
    } catch (error) {
        res.json({ message: error })
    }
} 