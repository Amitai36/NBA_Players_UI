import axios from "axios"

import { AllPlayersTypes } from "../types/players"

export const getAllPlayers = async ({ nextPage, search }: { nextPage?: number, search: string }) => {
    const res = await axios.get<AllPlayersTypes>(`api/players/getAll?nextPage=${!search && nextPage ? nextPage : 25}&search=${search}`)
    return res.data
}
