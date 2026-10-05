import {
  AssignmentOutlined,
  AutoGraph,
  CheckCircleOutline,
  DarkModeOutlined,
  LightModeOutlined,
  SchoolOutlined
} from "@mui/icons-material";
import { Box, Button, Card, Grid, IconButton, Tooltip, Typography } from "@mui/material";
import { useThemeStore } from "../store/themeStore";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip as RechartsTooltip } from "recharts";
import StatCard from "../components/ui/StatCard";
import ActivityCard from "../components/ui/ActivityCard";

const chartData = [
  { name: "Mon", value: 42 },
  { name: "Tue", value: 55 },
  { name: "Wed", value: 48 },
  { name: "Thu", value: 67 },
  { name: "Fri", value: 61 },
  { name: "Sat", value: 76 },
  { name: "Sun", value: 82 }
];

export default function Dashboard() {
  const mode = useThemeStore((s) => s.mode);
  const toggleMode = useThemeStore((s) => s.toggleMode);
  const isDark = mode === "dark";

  return (
    <Box>
      <Grid container spacing={2.5}>
        <Grid item xs={12}>
          <Card
            sx={{
              p: { xs: 2.5, md: 3 },
              color: "#fff",
              background: "linear-gradient(120deg, #4338CA, #6366F1 55%, #7C3AED)"
            }}
          >
            <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 2 }}>
              <Box>
                <Typography variant="h5">Good Morning, Sahil! 👋</Typography>
                <Typography sx={{ mt: 0.5, opacity: 0.9 }}>
                  Keep going! You&apos;re closer to your dream career than you think.
                </Typography>
              </Box>
              <Tooltip title={isDark ? "Switch to light mode" : "Switch to dark mode"}>
                <IconButton
                  onClick={toggleMode}
                  aria-label="Toggle color mode"
                  sx={{ color: "#fff", border: "1px solid rgba(255,255,255,0.35)" }}
                >
                  {isDark ? <LightModeOutlined /> : <DarkModeOutlined />}
                </IconButton>
              </Tooltip>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} lg={3}>
          <StatCard title="Resume Score" value="78%" subtitle="Good • Keep improving" icon={<AssignmentOutlined />} progress={78} />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <StatCard title="Skills Completed" value="8 / 12" subtitle="67%" icon={<SchoolOutlined />} progress={67} />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <StatCard title="Learning Progress" value="65%" subtitle="On track" icon={<AutoGraph />} progress={65} />
        </Grid>

        <Grid item xs={12} lg={7}>
          <Card sx={{ p: 2.5 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1.5 }}>
              <Typography variant="h6">Your Progress</Typography>
              <Button size="small">View Details →</Button>
            </Box>
            <Box sx={{ height: 190 }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <XAxis dataKey="name" />
                  <YAxis hide />
                  <RechartsTooltip />
                  <Line type="monotone" dataKey="value" stroke="#4F46E5" strokeWidth={3} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} lg={5}>
          <Card sx={{ p: 2.5, height: "100%" }}>
            <Typography variant="h6">AI Career Assistant</Typography>
            <Typography color="text.secondary" sx={{ mt: 0.5 }}>
              Get personalized career advice and resume tips.
            </Typography>
            <Button variant="contained" sx={{ mt: 2 }}>Chat with AI</Button>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card sx={{ p: 2.5 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Typography variant="h6">Recent Activity</Typography>
              <Button size="small">View All →</Button>
            </Box>
            <ActivityCard icon={<CheckCircleOutline />} title="Completed DSA Practice" detail="Two Sum" time="2 hours ago" />
            <ActivityCard icon={<AssignmentOutlined />} title="Updated Resume" detail="Added new project" time="4 hours ago" />
            <ActivityCard icon={<SchoolOutlined />} title="Completed Learning Module" detail="React Basics" time="1 day ago" />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}