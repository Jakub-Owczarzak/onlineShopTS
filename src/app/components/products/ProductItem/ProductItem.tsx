import React from "react";

import { Product } from "../Products.interface";
import { colors } from "../../../assets/colors/colors";

import { RatingComponent } from "../../RatingComponent/RatingComponent";

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Promo } from "../Promo/Promo";

interface ProcductItemProps {
  item: Product;
}

export const ProductItem = ({ item }: ProcductItemProps) => {
  return (
    <Card
      sx={{
        width: 320,
        height: 360,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        position: "relative",
      }}
    >
      {item.promo && !item.active && <Promo />}
      <CardActionArea disabled={item.active}>
        <CardMedia
          component="img"
          height={180}
          image={item.image}
          alt="product image"
          sx={{ filter: `${item.active && "grayscale(100%)"}` }}
        />
      </CardActionArea>
      <CardContent sx={{ paddingTop: "5px", paddingBottom: "5px" }}>
        <Typography gutterBottom variant="h6" component="div">
          {item.name}
        </Typography>
        <Typography height={40} variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardContent sx={{ paddingTop: "5px", paddingBottom: "0" }}>
        <RatingComponent rating={item.rating} totalStars={5} />
      </CardContent>
      <CardActions>
        <Button
          style={{
            backgroundColor: item.active ? colors.grey : colors.blue,
            fontSize: "14px",
            color: "white",
          }}
          variant="contained"
          fullWidth={true}
          disabled={item.active}
        >
          {item.active ? "Unavailable" : "Show details"}
        </Button>
      </CardActions>
    </Card>
  );
};
