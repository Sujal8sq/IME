/// <reference types="cypress"/>

class Assignment {

    getAllTitle() {
        return cy.xpath(`//div//h3[@class="ipc-title__text"]`, { timeout: 10000 }).should("exist").should("be.visible");
    }

    title() {
        return cy.xpath(`//span[@data-testid="hero__primary-text"]`, { timeout: 10000 }).should("exist").should("be.visible");
    }

    rating() {
        return cy.xpath(`(//span[@class="sc-d541859f-1 imUuxf"])[2]`, { timeout: 10000 }).should("exist").should("be.visible");
    }

    summary() {
        return cy.xpath(`//span[@data-testid="plot-xs_to_m"]`, { timeout: 10000 }).should("exist").should("be.visible");
    }

    readTitle() {

        const csvHeader = "Title,Rating,Summary\n"; // Define CSV headers
        let movieData = [];

        for (let i = 1; i <= 250; i++) {
            cy.xpath(`(//div[@class="ipc-metadata-list-summary-item__c"]//a//h3)[${i}]`).click();
            cy.wait(2000);

            let titleText = '';
            let ratingText = '';
            let summaryText = '';

            this.title().then(($text) => {
                titleText = $text.text(); // Extract the text
                cy.log('Title:', titleText); // Log or save title
            });

            this.rating().then(($text) => {
                ratingText = $text.text(); // Extract the text
                cy.log('Rating:', ratingText); // Log or save rating      
            });

            this.summary().then(($text) => {
                summaryText = $text.text(); // Extract the text
                cy.log('Summary:', summaryText); // Log or save summary
            });

            cy.then(() => {
                movieData.push(`${titleText},${ratingText},${summaryText}`); // Add each movie's data to the array
            });

            cy.go('back');

            cy.then(() => {
                const csvContent = csvHeader + movieData.join("\n"); // Combine header and data
                cy.writeFile(`cypress/fixtures/movies.csv`, csvContent); // Save to CSV file
            });
        }
    }
}
export default Assignment;