import { Box, Card, Grid, LinearProgress, Typography, Button } from "@mui/material";

const courses = [
  ["React Fundamentals", 80],
  ["Java + Spring Boot", 55],
  ["Generative AI Foundations", 35],
  ["Data Structures & Algorithms", 70]
];

export default function Learning() {
  return (
    <Box>
      <Typography variant="h4">Learning</Typography>
      <Typography color="text.secondary" sx={{ mb: 3 }}>Track your skills and learning roadmap.</Typography>
      <Grid container spacing={2.5}>
        {courses.map(([name, progress]) => (
          <Grid item xs={12} md={6} key={name}>
            <Card sx={{ p: 2.5 }}>
              <Typography fontWeight={700}>{name}</Typography>
              <Typography variant="body2" color="text.secondary">{progress}% completed</Typography>
              <LinearProgress variant="determinate" value={progress} sx={{ mt: 2, height: 8, borderRadius: 10 }} />
              <Button size="small" sx={{ mt: 1 }}>Continue Learning →</Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}