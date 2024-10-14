import { Grid } from "@mui/material";

import NavBar from "../layout/NavBar";
import Loading from "../components/Loading";
import PlayerList from "../components/PlayerList";
import FavouriteList from "../components/FavouriteList";
import { useGetAllFav } from "../hooks/useFetching";

// Home component that serves as the main page
function Home() {
    const { data: allFav, isLoading } = useGetAllFav(); // Fetching all favorite players

    return (
        <div style={{ height: "100%", width: "100%" }}>
            <Loading isLoading={isLoading} data={allFav}> {/* Loading state management */}
                <Grid container direction="row" style={{ height: "100%" }}>
                    <Grid item xs={12} height={"15%"}> {/* Navbar takes full width and 15% height */}
                        <NavBar />
                    </Grid>
                    <Grid item xs={6} height={"100%"}> {/* Player list on the left half */}
                        <PlayerList allFav={allFav} />
                    </Grid>
                    <Grid item xs={6} height={"100%"}> {/* Favorite list on the right half */}
                        <FavouriteList allFav={allFav} />
                    </Grid>
                </Grid>
            </Loading>
        </div>
    );
}

export default Home;
