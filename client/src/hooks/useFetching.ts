import { useMutation, useQuery, useQueryClient } from "react-query";

import { addFavPLayer, getAllFav, getAllPlayers, removeFavPLayer } from "../api/players";

// Custom hook to fetch all players
export const useGetAllPlayers = ({ nextPage, search }: { nextPage: number, search: string }) => {
    return useQuery(["players"], () => getAllPlayers({ nextPage, search })); // Using useQuery to get player data
};

// Custom hook to add a favorite player
export const useAddFavPLayer = () => {
    const queryClient = useQueryClient(); // Accessing the query client
    return useMutation(["players", "fav"], addFavPLayer, {
        onSuccess: () => {
            queryClient.invalidateQueries(["fav"]); // Invalidate the 'fav' query to refresh data
        }
    });
};

// Custom hook to remove a favorite player
export const useRemoveFavPLayer = () => {
    const queryClient = useQueryClient(); // Accessing the query client
    return useMutation(["players", "fav"], removeFavPLayer, {
        onSuccess: () => {
            queryClient.invalidateQueries(["fav"]); // Invalidate the 'fav' query to refresh data
        }
    });
};

// Custom hook to fetch all favorite players
export const useGetAllFav = () => {
    return useQuery(["players", "fav"], () => getAllFav()); // Using useQuery to get favorite players
};
