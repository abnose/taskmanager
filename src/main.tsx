import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@mui/material";
import { muiRtlCache, muiTheme } from "./config/theme.config.ts";
import { CacheProvider } from "@emotion/react";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CacheProvider value={muiRtlCache}>
      <ThemeProvider theme={muiTheme}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </ThemeProvider>
    </CacheProvider>
  </StrictMode>
);
