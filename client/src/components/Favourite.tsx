import { Checkbox, ListItemButton, ListItemIcon } from "@mui/material";

interface FavouriteProps {
    setFavourite: React.Dispatch<React.SetStateAction<number[]>>
    favourite: number[]
    value: number
}

function Favourite(props: FavouriteProps) {
    const { favourite, setFavourite, value } = props;

    const handleToggle = (value: number) => () => {
        const currentIndex = favourite.indexOf(value);
        const newFavourite = [...favourite];

        if (currentIndex === -1) {
            newFavourite.push(value);
        } else {
            newFavourite.splice(currentIndex, 1);
        }

        setFavourite(newFavourite);
    };

    return (
        <ListItemButton role={undefined} onClick={handleToggle(value)} dense sx={{ padding: 0, maxWidth: "10%" }}>
            <ListItemIcon>
                <Checkbox
                    size="small"
                    edge="start"
                    checked={favourite.includes(value)}
                    tabIndex={-1}
                    disableRipple
                />
            </ListItemIcon>
        </ListItemButton>
    );
}

export default Favourite;
