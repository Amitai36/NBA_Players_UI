import axios from "axios"

import { balldontlieKey } from "../config/index"

export const allPlayers = async ({ nextPage, search }: { nextPage: number, search: string }) => {
    try {
        const res = await axios.get(`https://api.balldontlie.io/v1/players/?cursor=${nextPage}&search=${search}`, {
            headers: {
                'Authorization': balldontlieKey
            }
        })
        return res.data
    } catch (error) {
        return error
    }
}