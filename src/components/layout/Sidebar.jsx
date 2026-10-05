import { NavLink } from "react-router-dom";
import {
  AnalyticsOutlined,
  AssignmentOutlined,
  DashboardOutlined,
  EditOutlined,
  SchoolOutlined,
  SettingsOutlined,
  TrendingUpOutlined,
  PersonOutline
} from "@mui/icons-material";
import { Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";

const drawerWidth = 250;

const items = [
  ["Dashboard", "/dashboard", <DashboardOutlined />],
  ["Profile", "/profile", <PersonOutline />],
  ["Resume", "/resume", <AssignmentOutlined />],
  ["ATS", "/ats", <EditOutlined />],
  ["Career Roadmap", "/career-roadmap", <TrendingUpOutlined />],
  ["Learning", "/learning", <SchoolOutlined />],
  ["Analytics", "/analytics", <AnalyticsOutlined />],
  ["Settings", "/settings", <SettingsOutlined />]
];

export default function Sidebar({ mobileOpen, onClose }) {
  const content = (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column", bgcolor: "#101A38", color: "#fff" }}>
      <Box sx={{ px: 3, py: 3 }}>
        <Typography variant="h5" fontWeight={900}>
          Career<span style={{ color: "#8B7CFF" }}>Nexus</span>
        </Typography>
        <Typography variant="caption" sx={{ color: "#AAB4D0" }}>
          Your Intelligent Career Growth Platform
        </Typography>
      </Box>

      <List sx={{ px: 1.5 }}>
        {items.map(([label, path, icon]) => (
          <ListItemButton
            key={path}
            component={NavLink}
            to={path}
            onClick={onClose}
            sx={{
              borderRadius: 2,
              mb: 0.5,
              color: "#D6DCF0",
              "&.active": {
                bgcolor: "#4F46E5",
                color: "#fff"
              },
              "&:hover": { bgcolor: "rgba(255,255,255,.08)" }
            }}
          >
            <ListItemIcon sx={{ color: "inherit", minWidth: 40 }}>{icon}</ListItemIcon>
            <ListItemText primary={label} />
          </ListItemButton>
        ))}
      </List>

      <Box sx={{ mt: "auto", p: 2.5 }}>
        <Box sx={{ p: 2, border: "1px solid rgba(255,255,255,.15)", borderRadius: 3 }}>
          <Typography fontWeight={700}>Better Skills</Typography>
          <Typography variant="body2" sx={{ color: "#AAB4D0" }}>
            Bigger Opportunities
          </Typography>
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onClose}
        ModalProps={{ keepMounted: true }}
        sx={{ display: { xs: "block", md: "none" }, "& .MuiDrawer-paper": { width: drawerWidth } }}
      >
        {content}
      </Drawer>

      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": { width: drawerWidth, border: 0 }
        }}
        open
      >
        {content}
      </Drawer>
    </>
  );
}