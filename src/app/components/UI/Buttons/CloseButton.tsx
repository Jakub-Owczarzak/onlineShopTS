import React from "react";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export const CloseButton = () => {
  return (
    <IconButton aria-label="close" color="inherit">
      <CloseIcon />
    </IconButton>
  );
};
