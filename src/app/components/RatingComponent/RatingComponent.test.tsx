import React from "react";

import { render } from "tests";

import { RatingComponent } from "./RatingComponent";

describe("Products", () => {
  test("Displays page header", async () => {
    const { getByText } = render(<RatingComponent rating={5} />);

    expect(getByText("Products page")).toBeInTheDocument();
  });
});
