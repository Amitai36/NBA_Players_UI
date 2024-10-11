import { useEffect, useState } from "react"

export const useDebonce = <T>(value: T, delay = 1000) => {
    const [debonced, setDebonced] = useState<T>(value)
    useEffect(() => {
        const time = setTimeout(() => {
            setDebonced(value)
        }, delay);
        return () => clearTimeout(time)
    }, [value, delay])
    return debonced
}