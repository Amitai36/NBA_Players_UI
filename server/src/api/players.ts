import axios from "axios"

import { balldontlieKey } from "../config/index"

export const allPlayers = async ({ nextPage }: { nextPage: number }) => {
    try {
        const res = await axios.get(`https://api.balldontlie.io/v1/players/?cursor=${nextPage}`, {
            headers: {
                'Authorization': balldontlieKey
            }
        })
        return res.data
    } catch (error) {
        return error
    }
}