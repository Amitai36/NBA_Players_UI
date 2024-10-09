import axios from "axios"

import { balldontlieKey } from "../config/index"
//axios.defaults.baseURL =


//functions

export const allPlayers = async () => {
    try {
        const res = await axios.get(`https://api.balldontlie.io/v1/players/`, {
            headers: {
                'Authorization': balldontlieKey
            }
        })
        return res.data
    } catch (error) {
        return error
    }
}