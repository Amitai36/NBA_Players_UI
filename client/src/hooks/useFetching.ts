import { useQuery } from "react-query";
import { getAllPlayers } from "../api/players";

export const useGetAllPlayers = ({ nextPage }: { nextPage?: number }) => {
    return useQuery(["players"], () => getAllPlayers({ nextPage }));
};
