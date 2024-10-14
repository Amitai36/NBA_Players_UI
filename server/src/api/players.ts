import axios from "axios"; // Importing Axios for making HTTP requests
import { balldontlieKey } from "../config/index"; // Importing the API key for balldontlie

// Function to fetch all players with optional pagination and search
export const allPlayers = async ({ nextPage, search }: { nextPage: number, search: string }) => {
    try {
        // Making a GET request to the balldontlie API for players
        const res = await axios.get(`https://api.balldontlie.io/v1/players/?cursor=${nextPage}&search=${search}`, {
            headers: {
                'Authorization': balldontlieKey // Adding the API key in the headers
            }
        });
        return res.data; // Returning the response data
    } catch (error) {
        return error; // Returning any errors encountered during the request
    }
};

// Function to fetch specific players (currently the same as allPlayers)
export const specificPlayers = async ({ nextPage, search }: { nextPage: number, search: string }) => {
    try {
        // Making a GET request to the balldontlie API for players
        const res = await axios.get(`https://api.balldontlie.io/v1/players/?cursor=${nextPage}&search=${search}`, {
            headers: {
                'Authorization': balldontlieKey // Adding the API key in the headers
            }
        });
        return res.data; // Returning the response data
    } catch (error) {
        return error; // Returning any errors encountered during the request
    }
};
