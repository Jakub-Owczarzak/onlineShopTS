import React, { useState, useEffect } from "react";

import { Products } from "app/components/products/Products/Products";
import { Product } from "../../components/products/Products.interface";
import { NavBar } from "app/components/navigation/NavBar/NavBar";
import { Box, CircularProgress } from "@mui/material";
import { EmptyCard } from "app/components/products/EmptyCard/EmptyCard";
import { SearchContext } from "context/searchContext";

interface StateToCheck {
  active: boolean;
  promo: boolean;
}

export const MainView = () => {
  const [fechtedProducts, setFechtedProducts] = useState<Product[] | null>(
    null
  );

  const [searchBarProduct, setSearchBarProduct] = useState<string>("");

  const [stateToCheck, setStateToCheck] = useState<StateToCheck>({
    active: false,
    promo: false,
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleCheckBoxChange = (e: React.SyntheticEvent<Element, Event>) => {
    const element = e.currentTarget;
    const label = element.getAttribute("aria-label");

    if (label === "active" || label === "promo") {
      setStateToCheck((prevState) => ({
        ...prevState,
        [label]: !prevState[label],
      }));
    }
  };

  const handleSearchBarChange = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(e.currentTarget.value);
    setSearchBarProduct(e.currentTarget.value);
  };

  const fetchAllProducts = async (page: number, limitPerPage: number) => {
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

  const fetchProducts = async (
    page: number,
    limitPerPage: number,
    phrase: string,
    promo: boolean,
    active: boolean
  ) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        process.env.REACT_APP_API_URL +
          `/products?page=${page}&limit=${limitPerPage}&${
            phrase ? `search=${phrase}` : ""
          }&promo=${promo}&active=${active}`
      );
      const data = await response.json();
      if (data) {
        if (data.items.length > 0) {
          console.log(data.items);
          setFechtedProducts(data.items);
          setIsLoading(false);
        } else {
          setFechtedProducts(null);
          throw new Error("No matches");
        }
      } else {
        throw new Error("No matches");
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAllProducts(1, 8);
  }, []);

  useEffect(() => {
    if (searchBarProduct) {
      fetchProducts(
        1,
        8,
        searchBarProduct,
        stateToCheck.promo,
        stateToCheck.active
      );
    } else {
      fetchAllProducts(1, 8);
    }
  }, [searchBarProduct, stateToCheck]);

  return (
    <>
      <SearchContext.Provider
        value={{
          active: stateToCheck.active,
          promo: stateToCheck.promo,
          searchBarValue: searchBarProduct,
          handleCheckBoxChange,
          handleSearchBarChange,
        }}
      >
        <NavBar />
        <Box
          pt={{ xs: "260px", xl: "0px" }}
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
      </SearchContext.Provider>
    </>
  );
};
