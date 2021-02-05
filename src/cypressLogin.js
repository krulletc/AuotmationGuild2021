describe("Login Page", () => {
  it("should let you log in", () => {
    cy.visit("/login");
    cy.get('#email').type(
      "stephen@dialexa.com"
    );
    cy.get('#password').type("Password123!");
    cy.get(".btn")
      .contains(/login/i)
      .click();
    cy.contains(/dashboard/i).should("exist")
  });
});
