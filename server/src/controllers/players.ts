import { Request, Response } from "express";

import { allPlayers } from "../api/players";

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
const players_id = [26, 27, 28, 29, 30, 31]
export const getFavourite = async (_req: Request, _res: Response) => {

}