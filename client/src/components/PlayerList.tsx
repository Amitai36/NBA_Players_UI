import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography, Button } from "@mui/material";

import Search from "./Search";
import Favourite from "./Favourite";
import { useDebonce } from "../hooks/useDebonce";
import { AllPlayersTypes } from "../types/players";
import { useGetAllPlayers } from "../hooks/useFetching";

function PlayerList() {

    const [players, setPlayers] = useState<AllPlayersTypes>();
    const [search, setSearch] = useState<string>("");
    const [favourite, setFavourite] = useState<number[]>([])

    const deboncedSearch = useDebonce(search, 500)

    const { ref } = useInView({
        threshold: 1.0,
        triggerOnce: false,
    });

    const { data, isLoading, refetch } = useGetAllPlayers({ nextPage: players?.meta.next_cursor, search });

    useEffect(() => {
        if (data && !search) {
            setPlayers(prev => {
                const playersData = prev?.data || [];
                return { data: [...playersData, ...data.data], meta: data.meta };
            });
        }
        else if (search && data) {
            setPlayers({ data: data?.data, meta: data?.meta });
        }
    }, [data]);

    useEffect(() => {
        const loadPlayers = async () => {
            refetch()
        }
        loadPlayers()
    }, [deboncedSearch])

    const loadMore = () => {
        if (players?.meta.next_cursor) {
            refetch()
        }
    };

    if (isLoading) {
        return <Typography variant="h3">Loading....</Typography>;
    } else if (!data) {
        return <Typography variant="h3">No data</Typography>;
    }

    const isAtEnd = !data.meta.next_cursor;

    return (
        <>
            <Search search={search} setSearch={setSearch} />
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {players?.data.map((item) => (
                    <ListItem key={item.id}>
                        <Favourite favourite={favourite} setFavourite={setFavourite} value={item.id} />
                        <ListItemAvatar>
                            <Avatar>{item.jersey_number}</Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={`${item.last_name} ${item.first_name}`} secondary={item.team.full_name} />

                    </ListItem>
                ))}
                <div ref={ref} style={{ height: '1px' }} />
            </List>
            {!isAtEnd && (
                <Button variant="contained" onClick={loadMore} style={{ marginTop: '16px' }}>
                    Load More
                </Button>
            )}
        </>
    );
}

export default PlayerList;
