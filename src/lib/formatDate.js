export function formatDate(value) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  }).format(new Date(value));
}

export function getScoreColor(score) {
  if (score >= 80) return "success";
  if (score >= 60) return "warning";
  return "error";
}