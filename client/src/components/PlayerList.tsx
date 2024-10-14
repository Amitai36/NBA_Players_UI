import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Button, Box } from "@mui/material";

import Search from "./Search";
import Loading from "./Loading";
import Favourite from "./Favourite";
import { useDebonce } from "../hooks/useDebonce";
import { AllPlayersTypes, Fav } from "../types/players";
import { useGetAllPlayers } from "../hooks/useFetching";

// Defining the props for the PlayerList component
interface PlayerListProps {
    allFav?: { data: Fav[] };
}

function PlayerList(props: PlayerListProps) {
    const { allFav } = props;

    const [players, setPlayers] = useState<AllPlayersTypes>();
    const [search, setSearch] = useState<string>("");
    const deboncedSearch = useDebonce(search, 500); // Debounced search term
    const { ref } = useInView({ threshold: 1.0, triggerOnce: false }); // Intersection observer ref
    const { data, isLoading, refetch } = useGetAllPlayers({ nextPage: players?.meta.next_cursor ?? 25, search }); // Fetching player data

    // Effect to update players state when data or search term changes
    useEffect(() => {
        if (data) {
            if (!search) {
                // Append new players if no search term is present
                setPlayers(prev => ({ data: [...(prev?.data ?? []), ...data.data], meta: data.meta }));
            } else {
                // Replace players if a search term is present
                setPlayers({ data: data.data, meta: data.meta });
            }
        }
    }, [data, search]);

    // Effect to refetch players when the debounced search term changes
    useEffect(() => {
        const loadPlayers = async () => refetch(); // Refetch players
        loadPlayers();
    }, [deboncedSearch]);

    // Function to load more players when scrolled to the bottom
    const loadMore = () => {
        if (players?.meta.next_cursor) {
            refetch(); // Refetch more players
        }
    };

    const isAtEnd = !data?.meta.next_cursor; // Check if there are more players to load

    return (
        <Loading isLoading={isLoading} data={data}>
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
                                primary={`${item.last_name} ${item.first_name}`} // Player's full name
                                secondary={item.team.full_name} // Player's team name
                                sx={{ marginLeft: 2 }}
                            />
                        </ListItem>
                    ))}
                    <div ref={ref} style={{ height: '1px' }} />
                </List>
                {!isAtEnd && (
                    <Button
                        variant="contained"
                        onClick={loadMore} // Load more button
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
