import { createTheme } from "@mui/material";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { frontendBaseUrl } from "./routes.config";

export const muiRtlCache = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

export const fonts = [
  "Vazir-Medium",
  "Vazir-Light",
  "Vazir-ExtraLight",
  "Vazir-Bold",
];

declare module "@mui/material/styles" {
  interface PaletteOptions {
    black?: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
  }
}

export const muiTheme = createTheme({
  typography: {
    fontFamily: fonts.join(","),
    fontSize: 12,
    allVariants: {
      color: "white",
    },
  },

  palette: {
    primary: {
      main: "#1976d2",
      light: "#42a5f5",
      dark: "#1565c0",
      contrastText: "#fff",
    },
    secondary: {
      main: "#9c27b0",
      light: "#ba68c8",
      dark: "#7b1fa2",
      contrastText: "#fff",
    },
    error: {
      main: "#d32f2f",
      light: "#ef5350",
      dark: "#c62828",
      contrastText: "#fff",
    },
    warning: {
      main: "#ed6c02",
      light: "#ff9800",
      dark: "#e65100",
      contrastText: "#fff",
    },
    info: {
      main: "#0288d1",
      light: "#03a9f4",
      dark: "#01579b",
      contrastText: "#fff",
    },
    success: {
      main: "#2e7d32",
      light: "#4caf50",
      dark: "#1b5e20",
      contrastText: "#fff",
    },
    black: {
      main: "#181818eb",
      light: "#00000090",
      dark: "#000000",
      contrastText: "#ffffff",
    },
  },

  direction: "rtl",
  components: {
    // MuiButton: {
    //   styleOverrides: {
    //     root: {
    //       borderRadius: "12px",
    //     },
    //   },
    // },
    // MuiOutlinedInput: {
    //   styleOverrides: {
    //     root: {
    //       borderRadius: "12px",
    //       backgroundColor: "#ffffff",
    //       "& .MuiOutlinedInput-notchedOutline": {},
    //     },
    //   },
    // },
    // MuiFilledInput: {
    //   styleOverrides: {
    //     root: {
    //       borderRadius: "12px 12px 0 0 ",
    //       backgroundColor: "#ffffff",
    //       "& .MuiOutlinedInput-notchedOutline": {},
    //     },
    //   },
    // },
  },
});
