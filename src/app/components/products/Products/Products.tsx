import React, { useState, useEffect } from "react";

import { ProductItem } from "../ProductItem/ProductItem";
import { EmptyCard } from "../EmptyCard/EmptyCard";
import { Product } from "../Products.interface";

import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";

export const Products = ({ products }: { products: Product[] }) => {
  return (
    <Grid
      container
      display="flex"
      justifyContent="center"
      alignItems="center"
      rowSpacing={5}
      columnSpacing={{ xs: 5, xl: 11 }}
    >
      {products ? (
        products.map((el, index) => (
          <Grid key={index} item>
            <ProductItem item={el} />
          </Grid>
        ))
      ) : (
        <EmptyCard />
      )}
    </Grid>
  );
};
