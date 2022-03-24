import React from "react";

import { render } from "tests";

import { Promo } from "./Promo";

describe("Products", () => {
  test("Displays page header", async () => {
    const { getByText } = render(<Promo />);

    expect(getByText("Products page")).toBeInTheDocument();
  });
});
