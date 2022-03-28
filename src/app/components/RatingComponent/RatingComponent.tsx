import React from "react";
import { colors } from "../../assets/colors/colors";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";

export const RatingComponent = ({
  rating,
  totalStars,
}: {
  rating: number;
  totalStars: number;
}) => {
  return (
    <Box data-testid="rating_stars">
      {[...new Array(totalStars)].map((arr, index) => {
        return index < rating ? (
          <StarIcon
            data-testid="star_icon"
            key={index}
            sx={{ color: colors.orange, width: "14px", height: "13px" }}
          />
        ) : (
          <StarBorderOutlinedIcon
            data-testid="outline_icon"
            key={index}
            sx={{ color: colors.greyLight2, width: "14px", height: "13px" }}
          />
        );
      })}
    </Box>
  );
};
