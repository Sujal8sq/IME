/// <reference types="cypress"/>

import Assignment from "../../page-object/Assignment/Assignment.po.js";

describe("Get details", () => {
    const assignment = new Assignment();

    beforeEach(() => {
        cy.visit("/");
    });

    it("Fetch the title, rating & summary", () => {
        // Call the getMoviesDetails method to extract movie details dynamically
        assignment.readTitle();
    });
});