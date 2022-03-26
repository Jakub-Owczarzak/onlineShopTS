import React, { useState, useEffect } from "react";

import { ProductItem } from "../ProductItem/ProductItem";
import { EmptyCard } from "../EmptyCard/EmptyCard";
import { Product } from "../Products.interface";
import { ProductModal } from "../../UI/ProductModal/ProductModal";

import Grid from "@mui/material/Grid";
import { isTemplateLiteralTypeNode } from "typescript";

export const ProductList = ({ products }: { products: Product[] }) => {
  const [isModalOpen, setisModalOpen] = React.useState<boolean>(false);
  const [dataToDisplay, setDataToDisplay] = useState<Product | null>(null);
  const handleModalOpen = (item: Product) => {
    setDataToDisplay(item);
    setisModalOpen(true);
  };
  const handleModalClose = () => setisModalOpen(false);
  return (
    <>
      {isModalOpen && (
        <ProductModal
          isModalOpen={isModalOpen}
          dataToDisplay={dataToDisplay}
          handleModalClose={handleModalClose}
        />
      )}
      <Grid
        sx={{ padding: { xl: "0px 40px" } }}
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
        rowSpacing={{ xs: 5, xl: 3 }}
        columnSpacing={{ xs: 4, md: 6, xl: 8 }}
      >
        {products ? (
          products.map((el, index) => (
            <Grid key={index} item>
              <ProductItem
                isModalElement={false}
                handleModalOpen={handleModalOpen}
                item={el}
              />
            </Grid>
          ))
        ) : (
          <EmptyCard />
        )}
      </Grid>
    </>
  );
};
