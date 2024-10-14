import { useEffect, useState } from "react"; // Importing necessary hooks

// Custom hook for debouncing a value
export const useDebonce = <T>(value: T, delay = 1000) => {
    const [debonced, setDebonced] = useState<T>(value);

    useEffect(() => {
        // Set a timeout to update the debounced value after the specified delay
        const time = setTimeout(() => {
            setDebonced(value); // Update debounced state after delay
        }, delay);

        // Cleanup function to clear the timeout if the value changes or the component unmounts
        return () => clearTimeout(time);
    }, [value, delay]); // Effect runs when value or delay changes

    return debonced;
}
