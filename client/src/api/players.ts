import axios from "axios"

import { AllPlayersTypes, Fav } from "../types/players"

export const getAllPlayers = async ({ nextPage, search }: { nextPage?: number, search: string }) => {
    const res = await axios.get<AllPlayersTypes>(`api/players/getAll?nextPage=${!search && nextPage ? nextPage : 25}&search=${search}`)
    return res.data
}

export const addFavPLayer = async ({ id, name }: { id: number, name: string }) => {
    return await axios.post(`api/players/addFavPLayer`, {
        id,
        name
    })
}

export const removeFavPLayer = async ({ id }: { id: number, }) => {
    await axios.delete(`api/players/removeFavPLayer?id=${id}`)
}

export const getAllFav = async () => {
    const res = await axios.get<{ data: Fav[] }>(`api/players/getAllFav`)
    return res.data
}
