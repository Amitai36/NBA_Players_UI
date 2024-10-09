import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import { useGetAllPlayers } from "../hooks/useFetching"

function PlayerList() {
    const { data, isLoading } = useGetAllPlayers()
    console.log(data)
    if (isLoading) {
        return <Typography variant="h3">Loading....</Typography>
    }
    else if (!data) {
        return <Typography variant="h3">no data </Typography>
    }

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {data.data.map((item) => {
                return (
                    <ListItem key={item.id}>
                        <ListItemAvatar>
                            <Avatar>
                                {item.jersey_number}
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={`${item.last_name} ${item.first_name} `} secondary={item.team.full_name} />
                    </ListItem>

                )
            })}
        </List>
    )
}

export default PlayerList
