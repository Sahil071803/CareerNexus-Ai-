import { useState } from "react";
import { Alert, Box, Button, Card, Grid, Snackbar, TextField, Typography } from "@mui/material";

export default function Profile() {
  const [saved, setSaved] = useState(false);
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Profile</Typography>
      <Typography color="text.secondary" sx={{ mb: 3 }}>Manage your career profile and personal information.</Typography>
      <Card sx={{ p: 3 }}>
        <Grid container spacing={2}>
          {[
            ["Full Name", "Sahil Atram"],
            ["Email", "sahil@example.com"],
            ["Education", "B.Tech — CSE (IoT)"],
            ["Location", "Nagpur, India"],
            ["Target Role", "AI / GenAI Engineer"],
            ["Experience", "Fresher / Entry Level"]
          ].map(([label, value]) => (
            <Grid item xs={12} md={6} key={label}>
              <TextField fullWidth label={label} defaultValue={value} />
            </Grid>
          ))}
        </Grid>
        <Button variant="contained" sx={{ mt: 3 }} onClick={() => setSaved(true)}>Save Profile</Button>
        <Snackbar open={saved} autoHideDuration={2500} onClose={() => setSaved(false)} anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
          <Alert severity="success" onClose={() => setSaved(false)}>Profile saved (local demo — no backend yet).</Alert>
        </Snackbar>
      </Card>

      <Card sx={{ p: 3, mt: 3 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>Profile Actions</Typography>
        <Grid container spacing={2}>
          {[
            ["Update Resume", "upload-resume"],
            ["View Profile", "view-profile"],
            ["Change Password", "change-password"]
          ].map(([label, id]) => (
            <Grid item xs={12} md={6} key={id}>
              <Button variant="outlined" fullWidth>
                {label}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Card>
    </Box>
  );
}