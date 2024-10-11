import axios from "axios"

import { AllPlayersTypes } from "../types/players"

export const getAllPlayers = async ({ nextPage }: { nextPage?: number }) => {
    console.log(nextPage)
    const res = await axios.get<AllPlayersTypes>(`api/players/getAll?nextPage=${nextPage ?? 25}`)
    return res.data
}
