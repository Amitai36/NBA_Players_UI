import { useMutation, useQuery, useQueryClient } from "react-query";

import { addFavPLayer, getAllFav, getAllPlayers, removeFavPLayer } from "../api/players";


export const useGetAllPlayers = ({ nextPage, search }: { nextPage: number, search: string }) => {
    return useQuery(["players"], () => getAllPlayers({ nextPage, search }));
};

export const useAddFavPLayer = () => {
    const queryClient = useQueryClient();
    return useMutation(["players", "fav"], addFavPLayer, {
        onSuccess: () => {
            queryClient.invalidateQueries(["fav"]);
        }
    });
};

export const useRemoveFavPLayer = () => {
    const queryClient = useQueryClient();
    return useMutation(["players", "fav"], removeFavPLayer, {
        onSuccess: () => {
            queryClient.invalidateQueries(["fav"]);
        }
    });
};

export const useGetAllFav = () => {
    return useQuery(["players", "fav"], () => getAllFav());
};
