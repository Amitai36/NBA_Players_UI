import axios from "axios"

export const getAllPlayers = async () => {
    const res = await axios.get("api/players/getAll")
    return res.data
}