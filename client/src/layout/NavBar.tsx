import { AppBar, Toolbar, Typography, Box } from "@mui/material";

function NavBar() {
    return (
        <AppBar>
            <Toolbar>
                <Box
                    sx={{
                        display: 'flex',
                        flexGrow: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: { xs: 1, sm: 2 }, // Responsive padding
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }, // Responsive font size
                            textAlign: 'center',
                        }}
                    >
                        NBA Players
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
