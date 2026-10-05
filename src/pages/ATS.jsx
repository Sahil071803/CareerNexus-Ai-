import { useState } from "react";
import { Box, Button, Card, Grid, LinearProgress, Typography } from "@mui/material";

const METRICS = [
  ["Keyword Match", 85],
  ["Format Compatibility", 72],
  ["Section Coverage", 68]
];

export default function ATS() {
  const [fileName, setFileName] = useState("");
  const [scanned, setScanned] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    setFileName(file ? file.name : "");
    setScanned(false);
  };

  const handleScan = () => {
    if (!fileName) return;
    setScanned(true);
  };

  return (
    <Box>
      <Typography variant="h4">ATS Resume Scanner</Typography>
      <Typography color="text.secondary" sx={{ mb: 3 }}>Check your resume against job descriptions and ATS compatibility.</Typography>
      <Card sx={{ p: 3 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>Resume Analysis</Typography>
        <Grid container spacing={2}>
          {METRICS.map(([label, progress]) => (
            <Grid item xs={12} key={label}>
              <Box sx={{ p: 2, border: "1px solid", borderColor: "divider", borderRadius: 2 }}>
                <Typography fontWeight={700}>{label}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  {progress}%
                </Typography>
                <LinearProgress variant="determinate" value={progress} sx={{ height: 8, borderRadius: 10 }} />
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ mt: 2, mb: 2 }}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            Upload Resume File
          </Typography>
          <Box
            component="input"
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            sx={{
              width: "100%",
              p: 1.5,
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 2,
              bgcolor: "background.default",
              color: "text.primary"
            }}
          />
          {fileName && (
            <Typography variant="body2" sx={{ mt: 1 }}>
              Selected: <strong>{fileName}</strong>
            </Typography>
          )}
        </Box>
        <Button variant="contained" fullWidth sx={{ mb: 2 }} onClick={handleScan} disabled={!fileName}>
          Scan Resume
        </Button>
        {scanned && (
          <Typography color="success.main" sx={{ fontSize: 13, textAlign: "center", mb: 1 }}>
            Scan complete for {fileName} — see scores above.
          </Typography>
        )}
        <Typography color="text.secondary" sx={{ fontSize: 12, textAlign: "center" }}>
          Upload your resume (PDF/DOCX) to get an ATS compatibility score.
        </Typography>
      </Card>
    </Box>
  );
}
