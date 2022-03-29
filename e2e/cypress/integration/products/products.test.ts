/// <reference types="Cypress" />

import { NavigationMenu } from "../../pages/Navigation";

context("Products list page should", () => {
  beforeEach(() => {
    cy.visit(Cypress.env().baseUrl);
  });

  it("Displays products page, and redner proper elements", () => {
    cy.clearSession();
    cy.location().should((loc) => {
      expect(loc.href).to.eq(NavigationMenu.homeLink);
    });
    cy.get("#search_bar").should("exist");
    cy.get("#active").should("exist");
    cy.get("#promo").should("exist");

    cy.get("#pagination_component").should("exist");

    cy.get("#product_item").should("exist");
    cy.get('[id="product_item"]').should("have.length", 8);
  });
  it("Displays products page, after clicking moredetails button display product info modal", () => {
    cy.clearSession();
    cy.location().should((loc) => {
      expect(loc.href).to.eq(NavigationMenu.homeLink);
    });
    cy.get("#product_item").should("exist");
    cy.get("#details_button").should("exist");
    cy.get("#details_button").click();
  });
});
