import { Typography } from "@mui/material";

// Defining the props for the Loading component, with generic type T
interface LoadingProps<T> {
    isLoading: boolean;
    data: T;
    children: React.ReactNode;
}

function Loading<T>(props: LoadingProps<T>) {
    const { children, isLoading, data } = props;

    // If loading, display a loading message
    if (isLoading) {
        return <Typography variant="h3">Loading....</Typography>;
    }
    // If there is no data, display a no data message
    else if (!data) {
        return <Typography variant="h3">No data</Typography>;
    }

    // Render children if data is present
    return (
        <div style={{ height: "100%", width: "100%" }}>
            {children}
        </div>
    );
}

export default Loading; 
