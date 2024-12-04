"use client";
import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";

export function MainThemeProvider({ children }) {
  const preferSystemIsDark = useMediaQuery("(prefers-color-scheme : dark)");
  let themeMode;
  if (typeof window !== "undefined") {
    if (preferSystemIsDark) {
      localStorage.setItem("mode", "dark");
    } else {
      localStorage.setItem("mode", "light");
    }
    // CHANGE : Check State For Custom Change Mode
    themeMode = localStorage.getItem("mode");
  }
  let mainTheme = createTheme({
    mode: themeMode,
    direction: "rtl",
    typography : {
      fontFamily : 'vazir'
    }
  });
  mainTheme = createTheme(mainTheme, {
    palette:
      themeMode === "light"
        ? // LIGHT
          {
            primary: {
              main: "#FFF", //White
              contrastText: "#000", //Black
            },
            secondary: {
              main: "#E5E5E5", //Platinum
              contrastText: "#14213D", //Oxford Blue
            },
            tertiary: mainTheme.palette.augmentColor({
              color: {
                main: "#FCA311", // Orange Web
                contrastText: "#fff", // White
              },
              name: "tertiary",
            }),
          }
        : {
            // DARK
            primary: {
              main: "#000", //Black
              contrastText: "#fff", //White
            },
            secondary: {
              main: "#14213D", //Oxford Blue
              contrastText: "#E5E5E5", //Platinum
            },
            tertiary: mainTheme.palette.augmentColor({
              color: {
                main: "#FCA311", // Orange Web
                contrastText: "#000", // Black
              },
              name: "tertiary",
            }),
          },
  });
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
