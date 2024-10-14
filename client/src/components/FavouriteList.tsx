import { List, ListItem, ListItemText, Typography } from "@mui/material";

import { Fav } from "../types/players";
import Favourite from "./Favourite";


interface FavouriteListProps {
    allFav?: { data: Fav[] }
}

function FavouriteList(props: FavouriteListProps) {
    const { allFav } = props

    return (
        <div>
            <Typography variant="h5">Favourite List</Typography>
            <List sx={{ width: '100%', bgcolor: 'background.paper', borderRadius: 2, boxShadow: 1 }}>
                {allFav?.data.map(item => (
                    <ListItem key={item.id} sx={{ borderBottom: '1px solid #e0e0e0' }}>
                        <ListItemText
                            primary={item.name}
                        />
                        <Favourite name={item.name} value={item.id} allFav={allFav} />
                    </ListItem>
                ))}
            </List>
        </div>
    )
}

export default FavouriteList
