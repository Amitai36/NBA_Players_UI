import {
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import React, { ReactNode } from "react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";


interface ProviderThemeProps {
  children: ReactNode;
}

function ProviderTheme(props: ProviderThemeProps) {
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: "dark",
          background: {
            default: "black",
          },
        },
        direction: "rtl",
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
      }),
    []
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        style={{
          height: "100vh",
          width: "100vw",
          maxWidth: "100%",
        }}
      >
        {props.children}
      </div>
    </ThemeProvider>
  );
}

export default ProviderTheme;
