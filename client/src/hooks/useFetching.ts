import { useQuery } from "react-query";
import { getAllPlayers } from "../api/players";

export const useGetAllPlayers = ({ nextPage , search}: { nextPage?: number, search:string }) => {
    return useQuery(["players"], () => getAllPlayers({ nextPage, search }));
};
