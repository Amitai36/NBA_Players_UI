import { useRef } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import TextField from "@mui/material/TextField";


interface SearchProps {
    setSearch: React.Dispatch<React.SetStateAction<string>>
    search: string
}

function Search(props: SearchProps) {
    const { search, setSearch } = props

    const inputRef = useRef<HTMLInputElement>();
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setSearch(e.target.value);
    };
    useHotkeys("ctrl+i", () => {
        if (inputRef.current) {
            inputRef?.current.focus();
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
