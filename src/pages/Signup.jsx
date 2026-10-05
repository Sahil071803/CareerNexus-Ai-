import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

export default function Signup() {
  const navigate = useNavigate();
  return (
    <Box sx={{ p: 4, textAlign: "center" }}>
      <Typography variant="h3">Sign Up Page</Typography>
      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Sign up page for future use - registration system coming soon
      </Typography>
      <Button variant="contained" sx={{ mt: 2 }} onClick={() => navigate("/dashboard")}>
        Continue as Guest
      </Button>
    </Box>
  );
}