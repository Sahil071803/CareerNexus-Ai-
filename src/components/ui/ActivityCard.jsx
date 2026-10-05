import { Box, Typography } from "@mui/material";

export default function ActivityCard({ icon, title, detail, time }) {
  return (
    <Box sx={{ display: "flex", gap: 1.5, py: 1.5, borderBottom: "1px solid", borderColor: "divider", "&:last-child": { borderBottom: 0 } }}>
      <Box sx={{ width: 38, height: 38, flexShrink: 0, borderRadius: "50%", bgcolor: "action.selected", color: "primary.main", display: "grid", placeItems: "center" }}>
        {icon}
      </Box>
      <Box sx={{ flex: 1 }}>
        <Typography variant="body2" fontWeight={700}>{title}</Typography>
        <Typography variant="caption" color="text.secondary">{detail}</Typography>
      </Box>
      <Typography variant="caption" color="text.secondary">{time}</Typography>
    </Box>
  );
}