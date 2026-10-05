import { Box, Card, Grid, Typography, useTheme } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
  { month: "Jan", applications: 3, interviews: 1 },
  { month: "Feb", applications: 5, interviews: 2 },
  { month: "Mar", applications: 8, interviews: 3 },
  { month: "Apr", applications: 6, interviews: 2 },
  { month: "May", applications: 10, interviews: 4 }
];

export default function Analytics() {
  const theme = useTheme();
  const tickFill = theme.palette.text.secondary;
  return (
    <Box>
      <Typography variant="h4">Analytics</Typography>
      <Typography color="text.secondary" sx={{ mb: 3 }}>Understand your career progress and job search activity.</Typography>
      <Grid container spacing={2.5}>
        <Grid item xs={12}>
          <Card sx={{ p: 2.5 }}>
            <Typography variant="h6">Applications & Interviews</Typography>
            <Box sx={{ height: 360, mt: 2 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke={theme.palette.divider} />
                  <XAxis dataKey="month" tick={{ fill: tickFill }} axisLine={{ stroke: theme.palette.divider }} tickLine={false} />
                  <YAxis tick={{ fill: tickFill }} axisLine={false} tickLine={false} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: theme.palette.background.paper,
                      border: `1px solid ${theme.palette.divider}`,
                      borderRadius: 8,
                      color: theme.palette.text.primary
                    }}
                  />
                  <Bar dataKey="applications" fill="#4F46E5" radius={[6,6,0,0]} />
                  <Bar dataKey="interviews" fill="#7C3AED" radius={[6,6,0,0]} />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}