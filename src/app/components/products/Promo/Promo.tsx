import React from "react";
import { Box, Typography } from "@mui/material";

import { colors } from "../../../assets/colors/colors";

export const Promo = () => {
  return (
    <Box
      data-testid="promo-element"
      sx={{
        width: "75px",
        height: "24px",
        backgroundColor: colors.orange,
        position: "absolute",
        zIndex: "2",
        top: "20px",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography fontSize={14}>Promo</Typography>
    </Box>
  );
};
