import React, { useState, useEffect } from "react";

import { Products } from "app/components/products/Products/Products";
import { Product } from "../../components/products/Products.interface";
import { NavBar } from "app/components/navigation/NavBar/NavBar";
import { Box, CircularProgress } from "@mui/material";
import { EmptyCard } from "app/components/products/EmptyCard/EmptyCard";

export const MainView = () => {
  const [fechtedProducts, setFechtedProducts] = useState<Product[] | null>(
    null
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchProducts = async (page: number, limitPerPage: number) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        process.env.REACT_APP_API_URL +
          `/products?page=${page}&limit=${limitPerPage}`
      );
      const data = await response.json();
      if (data) {
        setFechtedProducts(data.items);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(1, 8);
    console.log(fechtedProducts);
  }, []);
  return (
    <>
      <NavBar />
      <Box
        pt={{ xs: "160px", xl: "0px" }}
        minHeight={"calc(100vh - 140px)"}
        position="relative"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {isLoading && <CircularProgress />}
        {fechtedProducts && !isLoading ? (
          <Products products={fechtedProducts} />
        ) : (
          <EmptyCard />
        )}
      </Box>
    </>
  );
};
