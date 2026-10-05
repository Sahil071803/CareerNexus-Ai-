import { createTheme } from "@mui/material/styles";

const baseComponents = {
  MuiDrawer: {
    styleOverrides: {
      paper: { border: 0, width: 250 }
    }
  },
  MuiButton: {
    styleOverrides: {
      root: { borderRadius: 8, textTransform: "none", fontWeight: 600 }
    }
  },
  MuiCard: {
    styleOverrides: {
      root: { borderRadius: 12 }
    }
  },
  MuiChip: {
    styleOverrides: {
      root: { borderRadius: 6 }
    }
  },
  MuiTextField: {
    styleOverrides: {
      root: { borderRadius: 8 }
    }
  }
};

export function getAppTheme(mode = "light") {
  const isDark = mode === "dark";

  return createTheme({
    palette: {
      mode,
      primary: { main: "#4F46E5", dark: "#4338CA", light: "#818CF8" },
      secondary: { main: "#7C3AED" },
      success: { main: "#10B981" },
      warning: { main: "#F59E0B" },
      error: { main: "#EF4444" },
      background: {
        default: isDark ? "#0B1120" : "#F8FAFC",
        paper: isDark ? "#151E33" : "#FFFFFF"
      },
      text: {
        primary: isDark ? "#F1F5F9" : "#1E293B",
        secondary: isDark ? "#94A3B8" : "#64748B"
      },
      divider: isDark ? "rgba(148,163,184,0.16)" : "#EAECF0"
    },
    shape: { borderRadius: 12 },
    typography: {
      fontFamily: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
      h4: { fontWeight: 800 },
      h5: { fontWeight: 700 },
      h6: { fontWeight: 700 }
    },
    components: baseComponents
  });
}

// Default export keeps old `import theme from "./theme/theme"` working.
const theme = getAppTheme(
  typeof localStorage !== "undefined"
    ? localStorage.getItem("careernexus-theme") || "light"
    : "light"
);

export default theme;
