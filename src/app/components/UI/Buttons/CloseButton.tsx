import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";

export const CloseButton = () => {
  return (
    <IconButton aria-label="close" color="inherit">
      <CloseIcon />
    </IconButton>
  );
};
