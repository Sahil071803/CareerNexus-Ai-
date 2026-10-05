import { LocationOnOutlined, ArrowForward } from "@mui/icons-material";
import { Box, Card, Chip, IconButton, Typography } from "@mui/material";

export default function JobCard({ title, company, location, salary, tag }) {
  return (
    <Card sx={{ p: 2, mb: 1.5, boxShadow: "none" }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        <Box sx={{ width: 42, height: 42, borderRadius: 2, bgcolor: "action.selected", display: "grid", placeItems: "center", color: "primary.main", fontWeight: 900 }}>
          {(company || "?").charAt(0).toUpperCase()}
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography fontWeight={700}>{title}</Typography>
          <Typography variant="body2" color="text.secondary">{company}</Typography>
          <Typography variant="caption" color="text.secondary" sx={{ display: "flex", alignItems: "center", gap: 0.4 }}>
            <LocationOnOutlined sx={{ fontSize: 14 }} /> {location}
          </Typography>
        </Box>
        <Box sx={{ textAlign: "right" }}>
          <Typography fontWeight={700}>{salary}</Typography>
          <Chip label={tag} size="small" sx={{ mt: 0.5 }} />
        </Box>
        <IconButton size="small"><ArrowForward fontSize="small" /></IconButton>
      </Box>
    </Card>
  );
}