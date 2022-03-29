/// <reference types="Cypress" />

import { AppRoute } from "../../../../src/routing/AppRoute.enum";
import { NavigationMenu } from "../../pages/Navigation";

context("Login should", () => {
  beforeEach(() => {
    cy.visit(Cypress.env().baseUrl);
  });

  it("testing if login form renders proper elements", () => {
    cy.clearSession();
    NavigationMenu.goToLogin();
    cy.location().should((loc) => {
      expect(loc.href).to.eq(NavigationMenu.loginLink);
    });

    cy.get("#userNameInput").should("exist");
    cy.get("#passwordInput").should("exist");
    cy.get("#submitButton").should("exist");
  });
  it("User login and logout functionality testing", () => {
    cy.clearSession();
    NavigationMenu.goToLogin();
    cy.location().should((loc) => {
      expect(loc.href).to.eq(NavigationMenu.loginLink);
    });
    cy.get("#userNameInput").type("kuba");
    cy.get("#passwordInput").type("kuba");
    cy.get("#submitButton").click();

    cy.location().should((loc) => {
      expect(loc.href).to.eq(NavigationMenu.homeLink);
    });
    cy.get("#avatar_icon_button").should("exist");
    cy.get("#avatar_icon_button").click();
    cy.get("#logout_button").should("exist");
    cy.get("#logout_button").click();

    cy.get("#login_link").should("exist");
    cy.get("#login_link").click();
    cy.location().should((loc) => {
      expect(loc.href).to.eq(NavigationMenu.loginLink);
    });
  });
  it("navigate to login on clicking login, passing wrong user credentials, checking if info modal will pop-up", () => {
    cy.clearSession();
    NavigationMenu.goToLogin();
    cy.location().should((loc) => {
      expect(loc.href).to.eq(NavigationMenu.loginLink);
    });
    cy.get("#userNameInput").should("exist");
    cy.get("#passwordInput").should("exist");
    cy.get("#submitButton").should("exist");

    cy.get("#userNameInput").type("wrong user");
    cy.get("#passwordInput").type("password");
    cy.get("#submitButton").click();
    cy.get("#infoModal").should("exist");
  });
});
