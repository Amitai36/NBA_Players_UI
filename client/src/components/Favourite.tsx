import { useState } from "react";
import { Checkbox, ListItemButton, ListItemIcon } from "@mui/material";

import { Fav } from "../types/players";
import { useAddFavPLayer, useRemoveFavPLayer } from "../hooks/useFetching";

interface FavouriteProps {
    name: string
    value: number
    allFav?: { data: Fav[] }
}

function Favourite(props: FavouriteProps) {
    const { name, value, allFav } = props;
    const [toggle, setToggle] = useState(!allFav?.data.every(item => item.id !== value) ?? false)
    const { mutate: removeMutate } = useRemoveFavPLayer()
    const { mutate: addMutate } = useAddFavPLayer()

    const handleToggle = () => () => {
        setToggle(prev => !prev)
        if (toggle)
            removeMutate({ id: value })
        else {
            addMutate({ id: value, name })
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
