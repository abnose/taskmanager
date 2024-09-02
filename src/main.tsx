import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App.tsx";
import "./index.css";
import { Box, ThemeProvider } from "@mui/material";
import { muiRtlCache, muiTheme } from "./config/theme.config.ts";
import { CacheProvider } from "@emotion/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CacheProvider value={muiRtlCache}>
      <ThemeProvider theme={muiTheme}>
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProvider>
    </CacheProvider>
  </StrictMode>
);
