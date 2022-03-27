import React, { useState, useEffect, useMemo, memo } from "react";

import { ProductList } from "app/components/products/ProductsList/ProductList";
import { Product } from "../../../models/products.interface";
import { NavBar } from "app/components/navigation/NavBar/NavBar";
import { Box, CircularProgress } from "@mui/material";
import { EmptyCard } from "app/components/products/EmptyCard/EmptyCard";
import { SearchContext } from "context/searchContext";
import { PaginationComponent } from "app/components/UI/Pagination/Pagination";

interface StateToCheck {
  active: boolean;
  promo: boolean;
}
interface PaginationInfo {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}

export const MainView = () => {
  const [fechtedProducts, setFechtedProducts] = useState<Product[] | null>(
    null
  );

  const [fetchedPaginationInfo, setFetchedPaginationInfo] =
    useState<PaginationInfo | null>(null);

  const [currentPage, setCurrentPage] = useState(1);

  const [searchBarProduct, setSearchBarProduct] = useState<string>("");

  const [stateToCheck, setStateToCheck] = useState<StateToCheck>({
    active: false,
    promo: false,
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleCheckBoxChange = (e: React.SyntheticEvent<Element, Event>) => {
    const element = e.currentTarget;
    const label = element.getAttribute("aria-label");
    setCurrentPage(1);
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
   
    setCurrentPage(1);
    setSearchBarProduct(e.currentTarget.value);
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
 
    setCurrentPage(value);
  };

  const fetchProducts = async (
    page: number,
    limitPerPage: number,
    phrase?: string,
    promo?: boolean,
    active?: boolean
  ) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        process.env.REACT_APP_API_URL +
          `/products?page=${page}&limit=${limitPerPage}${
            phrase ? `&search=${phrase}` : ""
          }${promo ? `&promo=${promo}` : ""}${
            active ? `&active=${active}` : ""
          }`
      );
      const data = await response.json();
      if (data) {
        if (data.items.length > 0 && data.meta) {
      

          setFechtedProducts(data.items);
          setFetchedPaginationInfo(data.meta);
          setIsLoading(false);
        } else {
          setFechtedProducts(null);
          throw new Error("No matches");
        }
      } else {
        throw new Error("No matches");
      }
    } catch (error) {
    
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(currentPage, 8);
  }, []);

  useEffect(() => {
    fetchProducts(
      currentPage,
      8,
      searchBarProduct,
      stateToCheck.promo,
      stateToCheck.active
    );
  }, [searchBarProduct, stateToCheck, currentPage]);

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
          pt={{ xs: "260px", md: "160px", xl: "10px" }}
          minHeight={"calc(100vh - 140px)"}
          position="relative"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {isLoading && <CircularProgress />}
          {fechtedProducts && !isLoading && (
            <ProductList products={fechtedProducts} />
          )}

          {!fechtedProducts && !isLoading && <EmptyCard />}

          {fetchedPaginationInfo && fechtedProducts && !isLoading && (
            <PaginationComponent
              itemsCount={fetchedPaginationInfo.totalItems}
              currentPage={currentPage}
              handlePageChange={handlePageChange}
              itemsPerPage={8}
            />
          )}
        </Box>
      </SearchContext.Provider>
    </>
  );
};
