import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography, Button, Box } from "@mui/material";

import Search from "./Search";
import Favourite from "./Favourite";
import { useDebonce } from "../hooks/useDebonce";
import { AllPlayersTypes, Fav } from "../types/players";
import { useGetAllPlayers } from "../hooks/useFetching";
import Loading from "./Loading";

interface PlayerListProps {
    allFav?: { data: Fav[] }
}

function PlayerList(props: PlayerListProps) {
    const { allFav } = props

    const [players, setPlayers] = useState<AllPlayersTypes>();
    const [search, setSearch] = useState<string>("");
    const deboncedSearch = useDebonce(search, 500);
    const { ref } = useInView({ threshold: 1.0, triggerOnce: false });
    const { data, isLoading, refetch } = useGetAllPlayers({ nextPage: players?.meta.next_cursor ?? 25, search });

    useEffect(() => {
        if (data) {
            if (!search) {
                setPlayers(prev => ({ data: [...(prev?.data ?? []), ...data.data], meta: data.meta }));
            } else {
                setPlayers({ data: data.data, meta: data.meta });
            }
        }
    }, [data, search]);

    useEffect(() => {
        const loadPlayers = async () => refetch();
        loadPlayers();
    }, [deboncedSearch]);

    const loadMore = () => {
        if (players?.meta.next_cursor) {
            refetch();
        }
    };

    const isAtEnd = !data?.meta.next_cursor;
    return (
        <Loading isLoading={isLoading} data={data} >
            <Box sx={{ width: '100%', padding: 2 }}>
                <Box sx={{ position: 'sticky', top: 0, bgcolor: 'background.paper', padding: 2 }}>
                    <Search search={search} setSearch={setSearch} />
                </Box>
                <List sx={{ width: '100%', bgcolor: 'background.paper', borderRadius: 2, boxShadow: 1 }}>
                    {players?.data.map(item => (
                        <ListItem key={item.id} sx={{ padding: 2, borderBottom: '1px solid #e0e0e0' }}>
                            <Favourite name={`${item.last_name} ${item.first_name}`} allFav={allFav} value={item.id} />
                            <ListItemAvatar>
                                <Avatar>{item.jersey_number}</Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={`${item.last_name} ${item.first_name}`}
                                secondary={item.team.full_name}
                                sx={{ marginLeft: 2 }}
                            />
                        </ListItem>
                    ))}
                    <div ref={ref} style={{ height: '1px' }} />
                </List>
                {!isAtEnd && (
                    <Button
                        variant="contained"
                        onClick={loadMore}
                        sx={{ marginTop: 2, width: '100%', maxWidth: 300, alignSelf: 'center' }}
                    >
                        Load More
                    </Button>
                )}
            </Box>
        </Loading>
    );
}

export default PlayerList;