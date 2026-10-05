import { Box, Card, IconButton, Typography } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

export default function StatCard({ title, value, subtitle, icon, progress }) {
  return (
    <Card sx={{ p: 2.5, height: "100%" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
        <Box>
          <Typography variant="body2" color="text.secondary">{title}</Typography>
          <Typography variant="h5" sx={{ mt: 0.5 }}>{value}</Typography>
          <Typography variant="caption" color="text.secondary">{subtitle}</Typography>
        </Box>
        <Box
          sx={{
            width: 44,
            height: 44,
            borderRadius: "50%",
            display: "grid",
            placeItems: "center",
            bgcolor: "action.selected",
            color: "primary.main"
          }}
        >
          {icon}
        </Box>
      </Box>
      {progress !== undefined && (
        <Box sx={{ mt: 2, height: 7, bgcolor: "action.hover", borderRadius: 10 }}>
          <Box sx={{ width: `${progress}%`, height: "100%", bgcolor: "primary.main", borderRadius: 10 }} />
        </Box>
      )}
      <IconButton size="small" sx={{ mt: 1 }}>
        <ArrowForward fontSize="small" />
      </IconButton>
    </Card>
  );
}