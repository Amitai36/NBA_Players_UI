import { useState } from "react"; // Importing useState hook from React
import { Checkbox, ListItemButton, ListItemIcon } from "@mui/material"; // Importing Material-UI components

import { Fav } from "../types/players"; // Importing the Fav type for TypeScript
import { useAddFavPLayer, useRemoveFavPLayer } from "../hooks/useFetching"; // Importing custom hooks for fetching data

// Defining the props for the Favourite component
interface FavouriteProps {
    name: string; //
    value: number;
    allFav?: { data: Fav[] };
}

function Favourite(props: FavouriteProps) {
    const { name, value, allFav } = props;
    const [toggle, setToggle] = useState(!allFav?.data.every(item => item.id !== value) ?? false);

    // Mutate functions for adding/removing favorite players
    const { mutate: removeMutate } = useRemoveFavPLayer();
    const { mutate: addMutate } = useAddFavPLayer();

    // Function to handle toggle action
    const handleToggle = () => () => {
        setToggle(prev => !prev);
        if (toggle) {
            // If currently toggled (favorite), remove from favorites
            removeMutate({ id: value });
        } else {
            // If not toggled, add to favorites
            addMutate({ id: value, name });
        }
    };

    return (
        <ListItemButton role={undefined} onClick={handleToggle} dense sx={{ padding: 0, maxWidth: "10%" }}>
            <ListItemIcon>
                <Checkbox
                    size="small"
                    edge="start"
                    checked={toggle}
                    tabIndex={-1}
                    disableRipple
                />
            </ListItemIcon>
        </ListItemButton>
    );
}

export default Favourite;
