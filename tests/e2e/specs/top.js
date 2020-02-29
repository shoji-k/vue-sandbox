// https://docs.cypress.io/api/introduction/api.html

describe("Top page", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.get("span").contains("Login");
    cy.get("span").not("Add");
  });
});
