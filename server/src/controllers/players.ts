import { Request, Response } from "express";

import { allPlayers } from "../api/players";

export const getAllPlayers = async (_req: Request, res: Response) => {
    try {
        const players = await allPlayers()
        res.json(players).status(200)
    } catch (error) {
        res.json(error).status(500)
    }
}