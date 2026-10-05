import { Box, Typography } from "@mui/material";

export default function NotFound() {
  return (
    <Box sx={{ textAlign: "center", my: "80px" }}>
      <Typography variant="h2" sx={{ color: "#EF4444" }}>404</Typography>
      <Typography variant="h5" sx={{ mt: 2, color: "#64748B" }}>Page Not Found</Typography>
      <Typography color="text.secondary" sx={{ mt: 3, maxWidth: 400, margin: "0 auto" }}>
        The page you're looking for doesn't exist. <br /> Please use the navigation above.
      </Typography>
    </Box>
  );
}