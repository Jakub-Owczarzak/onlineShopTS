import React from "react";

import { render } from "tests";
import { fetchProducts } from "tests/api/functions/productFetch";

import { ProductList } from "./ProductList";

describe("Products", () => {
  test("Displays EmptyCard component when no products/empty array passed as prop ", () => {
    const { getByTestId } = render(<ProductList products={[]} />);
    expect(getByTestId("empty_card")).toBeInTheDocument();
  });

  test("Displays correct numebr of ProductItem component when array of products passed as prop  ", async () => {
    const products = await fetchProducts(1, 8);
    const { findAllByTestId } = render(<ProductList products={products} />);

    expect(await (await findAllByTestId("product_item")).length).toEqual(8);
  });
});
