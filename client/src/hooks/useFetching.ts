import { useQuery } from "react-query";
import { getAllPlayers } from "../api/players";

export const useGetAllPlayers = () => {
    return useQuery(["players"], () => getAllPlayers());
};
