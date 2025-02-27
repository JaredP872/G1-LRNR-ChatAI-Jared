describe("Homepage Tests", () => {
  beforeEach(() => {
    cy.visit("/");

    // Wait for the body to be visible and React content to load
    cy.get("body", { timeout: 10000 }).should("be.visible");
    cy.wait(5000); // Extra wait for React content to fully load and render
  });

  it("should display the correct title and logo", () => {
    // Log the body content for debugging
    cy.get("body")
      .invoke("text")
      .then((text) => {
        cy.log("DEBUG - Page content:", text); // Log body content for debugging
      });

    // Check if 'lrnr' text appears anywhere in the body
    cy.get("body").contains("lrnr", { timeout: 10000 }).should("be.visible");

    // Ensure the subtitle is visible
    cy.contains("Your guided path to programming enlightenment", {
      timeout: 10000,
    }).should("be.visible");
  });

  it("should navigate to the Quiz page when 'BEGIN JOURNEY' button is clicked", () => {
    cy.wait(2000); // Ensure button is rendered before clicking

    // Check if button exists and is visible
    cy.get("button")
      .contains(/BEGIN JOURNEY/i, { timeout: 10000 })
      .should("exist")
      .and("be.visible")
      .click();

    // Assert URL includes /quiz after clicking
    cy.url().should("include", "/quiz");
  });

  it("should display feature sections", () => {
    cy.wait(3000); // Allow time for elements to appear

    // Check if feature sections are visible
    cy.contains("Personalized Quizzes", { timeout: 10000 }).should(
      "be.visible"
    );
    cy.contains("Rewarding", { timeout: 10000 }).should("be.visible");
    cy.contains("Personal SME", { timeout: 10000 }).should("be.visible");
  });

  it("should be responsive on mobile", () => {
    cy.viewport("iphone-8");

    // Ensure the 'BEGIN JOURNEY' button is visible on mobile
    cy.contains("button", /BEGIN JOURNEY/i, { timeout: 10000 }).should(
      "be.visible"
    );
  });
});
