import React, { useEffect, useMemo } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import App from "./App";
import { getAppTheme } from "./theme/theme";
import { useThemeStore } from "./store/themeStore";
import "./index.css";

function ThemedApp() {
  const mode = useThemeStore((s) => s.mode);
  const initTheme = useThemeStore((s) => s.initTheme);
  const theme = useMemo(() => getAppTheme(mode), [mode]);

  useEffect(() => {
    initTheme();
  }, [initTheme]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemedApp />
    </BrowserRouter>
  </React.StrictMode>
);
