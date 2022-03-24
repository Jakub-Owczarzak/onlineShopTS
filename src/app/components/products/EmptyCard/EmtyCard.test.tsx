import React from "react";

import { render } from "tests";

import { EmptyCard } from "./EmptyCard";

describe("Products", () => {
  test("Displays page header", async () => {
    const { getByText } = render(<EmptyCard />);

    expect(getByText("Products page")).toBeInTheDocument();
  });
});
