import React from "react";

import { render } from "tests";

import { ProductItem } from "./ProductItem";

describe("Products", () => {
  test("Displays page header", async () => {
    const { getByText } = render(<ProductItem />);

    expect(getByText("ProductItem")).toBeInTheDocument();
  });
});
