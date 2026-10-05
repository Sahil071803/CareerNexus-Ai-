import { useState } from "react";
import {
  Box,
  Button,
  Card,
  Divider,
  FormControlLabel,
  Grid,
  Switch,
  Typography
} from "@mui/material";

const SETTING_ITEMS = [
  { key: "notifications", label: "Job recommendation notifications", hint: "Get notified about new fresher-friendly roles." },
  { key: "learning", label: "Learning reminders", hint: "Daily nudges to keep your streak going." },
  { key: "email", label: "Weekly career progress email", hint: "A summary of your skills, resume and roadmap." },
  { key: "ats", label: "ATS resume analysis", hint: "Auto-check every resume you upload." },
  { key: "careerPath", label: "Career path alerts", hint: "Updates when your roadmap milestones change." }
];

const INITIAL_STATE = {
  notifications: true,
  learning: true,
  email: false,
  ats: true,
  careerPath: true
};

export default function Settings() {
  const [prefs, setPrefs] = useState(INITIAL_STATE);

  const handleToggle = (key) => (event) => {
    setPrefs((prev) => ({ ...prev, [key]: event.target.checked }));
  };

  const handleLogout = () => {
    alert("Logout will be enabled once login / signup is implemented.");
  };

  return (
    <Box sx={{ maxWidth: 640, mx: "auto" }}>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Manage your CareerNexus preferences.
      </Typography>

      <Card sx={{ p: { xs: 2, md: 3 } }}>
        <Typography variant="h6" sx={{ mb: 1 }}>
          Preferences
        </Typography>
        <Divider sx={{ mb: 1 }} />
        <Grid container spacing={0}>
          {SETTING_ITEMS.map((item) => (
            <Grid item xs={12} key={item.key}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 2,
                  py: 1.5,
                  borderBottom: "1px solid",
                  borderColor: "divider",
                  "&:last-child": { borderBottom: 0 }
                }}
              >
                <Box>
                  <Typography variant="body1" fontWeight={600}>
                    {item.label}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {item.hint}
                  </Typography>
                </Box>
                <FormControlLabel
                  sx={{ m: 0 }}
                  label=""
                  control={
                    <Switch
                      checked={Boolean(prefs[item.key])}
                      onChange={handleToggle(item.key)}
                      color="primary"
                    />
                  }
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Card>

      <Card sx={{ p: { xs: 2, md: 3 }, mt: 3 }}>
        <Typography variant="h6">Account</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          You are browsing as a guest. Login / signup is coming soon — the
          logout button below is intentionally inactive for now.
        </Typography>
        <Button variant="outlined" color="error" fullWidth onClick={handleLogout}>
          Logout
        </Button>
      </Card>
    </Box>
  );
}
