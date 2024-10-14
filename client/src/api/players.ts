import axios from "axios"; // Importing Axios for making HTTP requests
import { AllPlayersTypes, Fav } from "../types/players"; // Importing TypeScript types for type safety

// Function to fetch all players with optional pagination and search
export const getAllPlayers = async ({ nextPage, search }: { nextPage?: number, search: string }) => {
    // Making a GET request to retrieve players, using default values for pagination if search is not provided
    const res = await axios.get<AllPlayersTypes>(`api/players/getAll?nextPage=${!search && nextPage ? nextPage : 25}&search=${search}`);
    return res.data; // Returning the response data
}

// Function to add a player to favorites
export const addFavPLayer = async ({ id, name }: { id: number, name: string }) => {
    // Making a POST request to add a favorite player
    return await axios.post(`api/players/addFavPLayer`, {
        id,
        name
    });
}

// Function to remove a player from favorites
export const removeFavPLayer = async ({ id }: { id: number }) => {
    // Making a DELETE request to remove a favorite player by ID
    await axios.delete(`api/players/removeFavPLayer?id=${id}`);
}

// Function to fetch all favorite players
export const getAllFav = async () => {
    // Making a GET request to retrieve all favorite players
    const res = await axios.get<{ data: Fav[] }>(`api/players/getAllFav`);
    return res.data; // Returning the response data
}
