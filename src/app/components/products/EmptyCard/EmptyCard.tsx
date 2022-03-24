import React from "react";

import Paper from "@mui/material/Paper";
import CardMedia from "@mui/material/CardMedia";
import { Box, Typography } from "@mui/material";

import Icon from "../../../assets/icons/shape.svg";

export const EmptyCard = () => {
  return (
    <Box
      width={{ xs: "360px", xl: "600px" }}
      position={"absolute"}
      top={{ xs: "160px", xl: "58px" }}
    >
      <Paper
        sx={{
          height: "344px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardMedia
          component="img"
          height={45}
          image={Icon}
          alt="noFoundIcon"
          sx={{ width: "36px" }}
        />
        <Typography marginTop={2} marginBottom={1} variant="h5">
          Ooops… It’s empty here
        </Typography>
        <Typography variant="body2" color="text.secondary">
          There are no products on the list{" "}
        </Typography>
      </Paper>
    </Box>
  );
};
