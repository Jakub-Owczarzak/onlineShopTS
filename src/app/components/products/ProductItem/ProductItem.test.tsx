import { Product } from "models/products.interface";
import React from "react";

import { render } from "tests";
import { fetchProducts } from "tests/api/functions/productFetch";

import { ProductItem } from "./ProductItem";

describe("Product item card when not as modal element", () => {
  test("Displays Product Item component when product is active and promo", async () => {
    const products = await fetchProducts(1, 2);
    const mockedFunc = jest.fn();
    const { getByTestId } = render(
      <ProductItem
        isModalElement={false}
        item={
          products.filter((el: Product) => el.active && el.promo === true)[0]
        }
        handleModalOpen={mockedFunc}
      />
    );

    const detailsButton = await getByTestId("details_button");

    expect(getByTestId("product_item")).toBeInTheDocument();
    expect(getByTestId("photo_element")).toBeInTheDocument();
    expect(getByTestId("promo-element")).toBeInTheDocument();
    expect(getByTestId("rating_stars")).toBeInTheDocument();
    expect(detailsButton).toBeInTheDocument();
  });

  test("Displays Product Item component when product is unavailable", async () => {
    const products = await fetchProducts(1, 2);
    const mockedFunc = jest.fn();
    const { getByTestId } = render(
      <ProductItem
        isModalElement={false}
        item={products.filter((el: Product) => el.active === false)[0]}
        handleModalOpen={mockedFunc}
      />
    );

    const detailsButton = await getByTestId("details_button");

    expect(getByTestId("product_item")).toBeInTheDocument();
    expect(getByTestId("photo_element")).toBeInTheDocument();
    expect(getByTestId("rating_stars")).toBeInTheDocument();
    expect(getByTestId("photo_cardaction_area")).toHaveAttribute("disabled");
    expect(detailsButton).toHaveAttribute("disabled");
  });

  test("Displays Product Item component is display as ProductModal", async () => {
    const products = await fetchProducts(1, 2);
    const mockedFunc = jest.fn();
    const { getByTestId, queryByTestId } = render(
      <ProductItem
        isModalElement={true}
        item={products.filter((el: Product) => el.active === true)[0]}
        handleModalOpen={mockedFunc}
      />
    );

    expect(getByTestId("product_item")).toBeInTheDocument();
    expect(getByTestId("photo_element")).toBeInTheDocument();
    expect(queryByTestId("rating_stars")).not.toBeInTheDocument();
    expect(queryByTestId("details_button")).not.toBeInTheDocument();
  });
});
