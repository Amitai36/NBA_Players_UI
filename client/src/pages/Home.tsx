import { Grid } from "@mui/material"
import NavBar from "../layout/NavBar"
import PlayerList from "../components/PlayerList"

function Home() {
    return (
        <div style={{ height: "100%" }}>
            <Grid container >
                <Grid item xs={12} height={"100%"}>
                    <NavBar />
                </Grid>
                <Grid item xs={6} height={"100%"}>
                    <PlayerList />
                </Grid>
                <Grid item xs={6} height={"100%"}>
                    <NavBar />
                </Grid>
            </Grid>
        </div>
    )
}

export default Home
