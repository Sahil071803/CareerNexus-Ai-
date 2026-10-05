import { DarkModeOutlined, LightModeOutlined, Menu, NotificationsNone, Search } from "@mui/icons-material";
import { Avatar, Box, IconButton, InputAdornment, TextField, Tooltip, Typography } from "@mui/material";
import { useThemeStore } from "../../store/themeStore";

export default function Navbar({ onMenu }) {
  const mode = useThemeStore((s) => s.mode);
  const toggleMode = useThemeStore((s) => s.toggleMode);
  const isDark = mode === "dark";

  return (
    <Box
      sx={{
        height: 76,
        px: { xs: 2, md: 3 },
        display: "flex",
        alignItems: "center",
        gap: 2,
        bgcolor: "background.paper",
        borderBottom: "1px solid",
        borderColor: "divider"
      }}
    >
      <IconButton onClick={onMenu} sx={{ display: { md: "none" } }}>
        <Menu />
      </IconButton>

      <TextField
        size="small"
        placeholder="Search jobs, skills, or resources..."
        sx={{ maxWidth: 520, flex: 1 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search fontSize="small" />
            </InputAdornment>
          )
        }}
      />

      <Tooltip title={isDark ? "Switch to light mode" : "Switch to dark mode"}>
        <IconButton onClick={toggleMode} aria-label="Toggle color mode">
          {isDark ? <LightModeOutlined /> : <DarkModeOutlined />}
        </IconButton>
      </Tooltip>

      <IconButton>
        <NotificationsNone />
      </IconButton>

      <Avatar sx={{ bgcolor: "#4F46E5", width: 38, height: 38 }}>SA</Avatar>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <Typography variant="body2" fontWeight={700}>Sahil Atram</Typography>
        <Typography variant="caption" color="text.secondary">Graduate • CSE (IoT)</Typography>
      </Box>
    </Box>
  );
}
