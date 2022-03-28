import React from "react";

import { render } from "tests";

import { RatingComponent } from "./RatingComponent";

describe("Products", () => {
  test("Displays page header", async () => {
    const { getAllByTestId } = render(
      <RatingComponent rating={3} totalStars={5} />
    );

    expect(await getAllByTestId("star_icon").length).toEqual(3);
    expect(await getAllByTestId("outline_icon").length).toEqual(2);
  });
});
