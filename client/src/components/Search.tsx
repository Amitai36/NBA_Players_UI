import { useRef } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import TextField from "@mui/material/TextField";


interface SearchProps {
    setSearch: React.Dispatch<React.SetStateAction<string>>
    search: string
}

function Search(props: SearchProps) {
    const { search, setSearch } = props;

    const inputRef = useRef<HTMLInputElement>(); // Ref for the input field

    // Function to handle changes in the input field
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setSearch(e.target.value); // Update the search state
    };

    // Hotkey to focus the input field when "ctrl+i" is pressed
    useHotkeys("ctrl+i", () => {
        if (inputRef.current) {
            inputRef.current.focus(); // Focus on the input field
        }
    });

    return (
        <TextField
            placeholder="crtl + i"
            value={search}
            inputRef={inputRef}
            fullWidth
            onChange={handleChange}
        />
    );
}

export default Search;
