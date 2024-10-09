import axios from "axios"

import { AllPlayersTypes } from "../types/players"

export const getAllPlayers = async () => {
    const res = await axios.get<AllPlayersTypes>("api/players/getAll")
    return res.data
}
