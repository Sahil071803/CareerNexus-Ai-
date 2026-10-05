import { Box, Typography, LinearProgress } from "@mui/material";

export default function ProgressCard({ label, progress }) {
  return (
    <Box sx={{ p: 2, borderRadius: 2 }}>
      <Typography fontWeight={700} sx={{ mb: 1 }}>{label}</Typography>
      <Typography variant="body2" color="text.secondary">{progress}% completed</Typography>
      <LinearProgress variant="determinate" value={progress} sx={{ mt: 1, height: 8, borderRadius: 10 }} />
    </Box>
  );
}