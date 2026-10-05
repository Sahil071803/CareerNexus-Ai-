import { Button as MuiButton } from "@mui/material";

export default function CustomButton({ variant = "contained", children, sx, ...props }) {
  return (
    <MuiButton variant={variant} sx={{ ...sx }} {...props}>
      {children}
    </MuiButton>
  );
}