import { AppBar, Toolbar, Typography, Box } from "@mui/material";

// Navigation bar component
function NavBar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Box
                    sx={{
                        display: 'flex',
                        flexGrow: 1,
                        justifyContent: 'center', // Center the content
                        alignItems: 'center', // Vertically center the content
                        padding: { xs: 1, sm: 2 }, // Responsive padding
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }, // Responsive font size
                            textAlign: 'center', // Center the text
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
