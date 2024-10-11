import { Request, Response } from "express";

import { allPlayers } from "../api/players";

export const getAllPlayers = async (req: Request<{}, {}, {}, { nextPage: number }>, res: Response) => {
    const { nextPage } = req.query
    try {
        const players = await allPlayers({ nextPage })
        res.json(players).status(200)
    } catch (error) {
        res.json(error).status(500)
    }
}