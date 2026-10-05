import { useState } from "react";
import {
  EmojiEventsOutlined,
  GroupsOutlined,
  InsightsOutlined,
  ManageAccountsOutlined,
  RocketLaunchOutlined
} from "@mui/icons-material";
import { Box, Button, Card, Chip, Grid, LinearProgress, Typography } from "@mui/material";

const roadmapSteps = [
  {
    id: 1,
    level: "Entry Level",
    duration: "0-1 year",
    role: "Junior Associate",
    description: "Starting position. Focus on learning fundamentals, basic tasks, and building foundational skills in your chosen field.",
    progress: 0,
    icon: <RocketLaunchOutlined fontSize="small" />
  },
  {
    id: 2,
    level: "Associate",
    duration: "1-3 years",
    role: "Senior Associate",
    description: "Taking on more responsibility, handling moderate complexity tasks, and mentoring juniors. Developing deeper domain expertise.",
    progress: 25,
    icon: <InsightsOutlined fontSize="small" />
  },
  {
    id: 3,
    level: "Specialist",
    duration: "3-5 years",
    role: "Subject Matter Expert",
    description: "Deep expertise in specific domain. Leading complex projects, influencing team decisions, and becoming the go-to person for specialized problems.",
    progress: 50,
    icon: <EmojiEventsOutlined fontSize="small" />
  },
  {
    id: 4,
    level: "Lead",
    duration: "5-7 years",
    role: "Team Lead",
    description: "People management, project leadership, strategic planning, and guiding the team toward goals. Ownership of deliverables and outcomes.",
    progress: 75,
    icon: <GroupsOutlined fontSize="small" />
  },
  {
    id: 5,
    level: "Manager",
    duration: "7-10 years",
    role: "Engineering Manager",
    description: "Budget ownership, hiring decisions, long-term strategy, and organizational impact. Leading teams of engineers and driving business value.",
    progress: 100,
    icon: <ManageAccountsOutlined fontSize="small" />
  }
];

export default function CareerRoadmap() {
  const [generated, setGenerated] = useState(false);

  const generateRoadmap = () => {
    // Placeholder for future implementation (API / algorithm).
    setGenerated(true);
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 1, textAlign: "center" }}>
        Career Roadmap Generator
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 3, textAlign: "center" }}>
        Generate a personalized career progression path based on your goals and skills.
      </Typography>
      <Card sx={{ p: { xs: 2, md: 3 } }}>
        <Typography variant="h6" sx={{ mb: 2, textAlign: "center" }}>
          Your Career Path
        </Typography>
        {generated ? (
          <Typography
            sx={{
              color: "success.main",
              fontWeight: 600,
              textAlign: "center",
              mb: 2,
              bgcolor: "success.light",
              p: 2,
              borderRadius: 2
            }}
          >
            Roadmap Generated Successfully!
          </Typography>
        ) : (
          <Grid container spacing={2}>
            {roadmapSteps.map((step) => (
              <Grid item xs={12} key={step.id}>
                <Box
                  sx={{
                    p: 2,
                    borderRadius: 3,
                    bgcolor: "background.default",
                    border: "1px solid",
                    borderColor: "divider"
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                    <Chip
                      icon={step.icon}
                      label={step.level}
                      size="small"
                      color={step.progress >= 100 ? "success" : "primary"}
                      variant="outlined"
                    />
                    <Typography variant="caption" color="text.secondary" sx={{ ml: "auto" }}>
                      {step.duration}
                    </Typography>
                  </Box>
                  <Typography variant="body2" fontWeight={700} sx={{ textAlign: "center" }}>
                    {step.role}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ textAlign: "center", fontSize: 12, my: 1 }}
                  >
                    {step.description}
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={step.progress}
                    sx={{ height: 8, borderRadius: 8 }}
                  />
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ display: "block", textAlign: "center", mt: 0.5 }}
                  >
                    {step.progress}% Complete
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        )}
        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2, mb: generated ? 2 : 0 }}
          onClick={generateRoadmap}
          disabled={generated}
        >
          {generated ? "Roadmap Generated!" : "Generate My Roadmap"}
        </Button>
        {generated && (
          <Typography color="text.secondary" sx={{ fontSize: 12, textAlign: "center" }}>
            Based on your skills, experience level, and career goals
          </Typography>
        )}
      </Card>
    </Box>
  );
}
