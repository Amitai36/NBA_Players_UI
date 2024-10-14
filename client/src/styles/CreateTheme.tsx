import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  Box,
} from "@mui/material";
import React, { ReactNode } from "react";

interface ProviderThemeProps {
  children: ReactNode;
}

function ProviderTheme(props: ProviderThemeProps): JSX.Element {
  const theme = React.useMemo(() => {
    const theme = createTheme({
      palette: {
        mode: "dark",
        background: {
          default: "black",
        },
      },
      direction: "rtl",
      spacing: 8, // Base spacing unit
      components: {
        MuiSelect: {
          defaultProps: {
            size: "small",
          },
        },
        MuiTextField: {
          defaultProps: {
            size: "small",
          },
          styleOverrides: {
            root: {
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderRadius: 50,
                  borderColor: "yellow solid",
                },
              },
            },
          },
        },
      },
      typography: {
        h1: {
          fontSize: '2rem',
          '@media (min-width:600px)': { // Responsive styles
            fontSize: '2.5rem',
          },
          '@media (min-width:960px)': { // Responsive styles
            fontSize: '3rem',
          },
        },
      },
    });

    return theme;
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: (theme) => theme.spacing(2), // Use theme spacing
          '@media (min-width:600px)': {
            padding: (theme) => theme.spacing(3), // Responsive padding
          },
          '@media (min-width:960px)': {
            padding: (theme) => theme.spacing(4), // Responsive padding
          },
        }}
      >
        {props.children}
      </Box>
    </ThemeProvider>
  );
}

export default ProviderTheme;
