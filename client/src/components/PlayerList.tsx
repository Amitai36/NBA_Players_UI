import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography, Button } from "@mui/material";

import { useGetAllPlayers } from "../hooks/useFetching";
import { AllPlayersTypes } from "../types/players";

function PlayerList() {
    const [players, setPlayers] = useState<AllPlayersTypes | undefined>();
    const { ref, inView } = useInView({
        threshold: 1.0,
        triggerOnce: false,
    });

    const { data, isLoading, refetch } = useGetAllPlayers({ nextPage: players?.meta.next_cursor });
    console.log(data)
    useEffect(() => {
        if (data) {
            setPlayers(prev => {
                const playersData = prev?.data || [];
                return { data: [...playersData, ...data.data], meta: data.meta };
            });
        }
    }, [data]);

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
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {players?.data.map((item, key) => (
                    <ListItem key={key}>
                        <ListItemAvatar>
                            <Avatar>{item.jersey_number}</Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={`${item.last_name} ${item.first_name}`} secondary={item.team.full_name} />
                    </ListItem>
                ))}
                {/* Observer target */}
                <div ref={ref} style={{ height: '1px' }} />
            </List>
            {/* Show more button */}
            {!isAtEnd && (
                <Button variant="contained" onClick={loadMore} style={{ marginTop: '16px' }}>
                    Load More
                </Button>
            )}
        </>
    );
}

export default PlayerList;
