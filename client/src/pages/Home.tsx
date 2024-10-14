import { Grid } from "@mui/material"

import NavBar from "../layout/NavBar"
import Loading from "../components/Loading"
import PlayerList from "../components/PlayerList"
import FavouriteList from "../components/FavouriteList"
import { useGetAllFav } from "../hooks/useFetching"

function Home() {
    const { data: allFav, isLoading } = useGetAllFav()

    return (
        <div style={{ height: "100%", width: "100%" }}>
            <Loading isLoading={isLoading} data={allFav}>
                <Grid container direction="row" style={{ height: "100%" }} >
                    <Grid item xs={12} height={"15%"}>
                        <NavBar />
                    </Grid>
                    <Grid item xs={6} height={"100%"}>
                        <PlayerList allFav={allFav} />
                    </Grid>
                    <Grid item xs={6} height={"100%"}>
                        <FavouriteList allFav={allFav} />
                    </Grid>
                </Grid>
            </Loading>
        </div>
    )
}

export default Home
