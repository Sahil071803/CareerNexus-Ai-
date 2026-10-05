import { Box, Button, Card, Grid, TextField, Typography } from "@mui/material";

export default function Resume() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Resume</Typography>
      <Typography color="text.secondary" sx={{ mb: 3 }}>Upload and manage your resume.</Typography>
      <Card sx={{ p: 3 }}>
        <Grid container spacing={2}>
          {[
            ["Summary", ""],
            ["Experience", ""],
            ["Education", ""],
            ["Skills", ""]
          ].map(([label, value]) => (
            <Grid item xs={12} md={6} key={label}>
              <TextField fullWidth label={label} multiline rows={3} defaultValue={value} />
            </Grid>
          ))}
        </Grid>
        <Button variant="contained" sx={{ mt: 3 }}>Upload Resume</Button>
      </Card>
    </Box>
  );
}