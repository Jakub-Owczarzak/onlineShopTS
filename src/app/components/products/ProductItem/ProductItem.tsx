import React from "react";

import { Product } from "../Products.interface";
import { colors } from "../../../assets/colors/colors";

import { RatingComponent } from "../../RatingComponent/RatingComponent";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Promo } from "../Promo/Promo";

interface ProcductItemProps<T> {
  isModalElement: boolean;
  item: Product | null;
  handleModalOpen?: (item: T) => void;
}

export const ProductItem = ({
  isModalElement,
  item,
  handleModalOpen,
}: ProcductItemProps<Product>) => {
  return (
    <>
      {item && (
        <Card
          sx={
            isModalElement
              ? {
                  width: 1,
                  height: 1,
                }
              : {
                  width: 320,
                  height: 360,
                  borderTopRightRadius: 10,
                  borderTopLeftRadius: 10,
                  position: "relative",
                }
          }
        >
          {item.promo && item.active && <Promo />}
          <CardActionArea disabled={!item.active || isModalElement}>
            <CardMedia
              {...(handleModalOpen && { onClick: () => handleModalOpen(item) })}
              component="img"
              height={isModalElement ? 354 : 180}
              image={item.image}
              alt="product image"
              sx={{ filter: `${!item.active && "grayscale(100%)"}` }}
            />
          </CardActionArea>
          <CardContent sx={{ paddingTop: "5px", paddingBottom: "5px" }}>
            <Typography
              gutterBottom
              variant={isModalElement ? "h5" : "h6"}
              component="div"
              mt={isModalElement ? "24px" : "0"}
            >
              {item.name}
            </Typography>
            <Typography
              height={40}
              variant={isModalElement ? "body1" : "body2"}
              color="text.secondary"
            >
              {item.description}
            </Typography>
          </CardContent>
          {!isModalElement && handleModalOpen && (
            <>
              <CardContent sx={{ paddingTop: "5px", paddingBottom: "0" }}>
                <RatingComponent rating={item.rating} totalStars={5} />
              </CardContent>
              <CardActions>
                <Button
                  onClick={() => handleModalOpen(item)}
                  style={{
                    backgroundColor: item.active
                      ? colors.blueLight
                      : colors.grey,
                    fontSize: "14px",
                    color: "white",
                  }}
                  variant="contained"
                  fullWidth={true}
                  disabled={!item.active}
                >
                  {item.active ? "Show details" : "Unavailable"}
                </Button>
              </CardActions>
            </>
          )}
        </Card>
      )}
    </>
  );
};
