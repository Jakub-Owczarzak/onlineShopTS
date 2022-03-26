import React from "react";

import { render } from "tests";

import { ProductList } from "./ProductList";

describe("Products", () => {
  test("Displays page header", async () => {
    const { getByText } = render(<div />);

    expect(getByText("Products page")).toBeInTheDocument();
  });
});
