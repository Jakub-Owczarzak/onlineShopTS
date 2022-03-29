/// <reference types="Cypress" />

import { NavigationMenu } from "../../pages/Navigation";

context("Searchbar should", () => {
  beforeEach(() => {
    cy.visit(Cypress.env().baseUrl);
  });

  it("Displays home page, with searchbar,", () => {
    cy.clearSession();
    cy.location().should((loc) => {
      expect(loc.href).to.eq(NavigationMenu.homeLink);
    });
    cy.get("#search_bar").should("exist");
    cy.get("#search_bar").type("pizza");
    cy.get("#product_item").contains("div", "Pizza");
  });
});
