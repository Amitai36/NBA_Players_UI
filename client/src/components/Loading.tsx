import { Typography } from "@mui/material";

interface LoadingProps<T> {
    isLoading: boolean,
    data: T,
    children: React.ReactNode
}

function Loading<T>(props: LoadingProps<T>) {
    const { children, isLoading, data } = props
    if (isLoading) {
        return <Typography variant="h3">Loading....</Typography>;
    } else if (!data) {
        return <Typography variant="h3">No data</Typography>;
    }

    return (
        <div style={{ height: "100%", width: "100%" }}>
            {children}
        </div>
    )
}

export default Loading
