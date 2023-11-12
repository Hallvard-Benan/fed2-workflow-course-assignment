describe("User authentification ", () => {
  describe("Log in functionality", () => {
    it("User can log in and access their profile", () => {
      cy.intercept(
        "POST",
        "https://api.noroff.dev/api/v1/social/auth/login"
      ).as("loginRequest");

      cy.visit("http://localhost:5173");
      cy.get("#email").type("first.last@stud.noroff.no");
      cy.get("#password").type("UzI1NiIsInR5cCI");
      cy.get('[data-test="login-btn"]').click();
      cy.get("@loginRequest").should("exist");
      cy.get('[name="my"]').click();
    });

    it("does not allow user to submit invalid form and displays a message", () => {
      cy.intercept(
        "POST",
        "https://api.noroff.dev/api/v1/social/auth/login"
      ).as("loginRequest");

      cy.visit("http://localhost:5173");
      cy.get("#email").type("invalidemail@stud.noroff.no");
      cy.get("#password").type("invalidpassword");
      cy.get('[data-test="login-btn"]').click();
      cy.get("@loginRequest").should("exist");

      cy.get("div").contains("error");
    });

    it("does not allow user to submit incomplete fields", () => {
      cy.intercept(
        "POST",
        "https://api.noroff.dev/api/v1/social/auth/login"
      ).as("loginRequest");
      cy.visit("http://localhost:5173");
      cy.get("#email").type("email");
      cy.get("#password").type("password");
      cy.get('[data-test="login-btn"]').click();
      cy.get("@loginRequest").should("not.exist");
    });
  });

  describe("log out functionality", () => {
    it("user can be logged out with logout button", () => {
      cy.visit("http://localhost:5173");
      cy.get("#email").type("first.last@stud.noroff.no");
      cy.get("#password").type("UzI1NiIsInR5cCI");
      cy.get('[data-test="login-btn"]').click();
      cy.wait(3000);
      cy.window().then((win) => {
        console.log(win.localStorage.access_token);
        expect(win.localStorage).to.have.any.keys("access_token");
      });
      cy.get("a").contains("Sign out").click();
      cy.wait(3000);
      cy.window().then((win) => {
        expect(win.localStorage).to.not.have.any.keys("access_token");
      });
    });
  });
});
