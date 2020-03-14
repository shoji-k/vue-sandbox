// https://docs.cypress.io/api/introduction/api.html

describe("Login", () => {
  it("Login", () => {
    cy.visit("/login");

    const name = "test user";
    const password = "password";

    cy.get("input[name=name]").type(name);
    cy.get("input[name=password]").type(password);
    cy.get("button")
      .contains("Login")
      .click();

    cy.get("span").contains("Add");
    cy.get("span").not("Login");
  });
});
