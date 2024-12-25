/// <reference types="cypress"/>
import loginPage from "../inputdata.cy";

describe('Login Feature',() => {
    it('Pengguna dapat login menggunakan data valid' ,() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        loginPage.textLogin().should('have.text','Login');
        loginPage.inputUsername().type('Admin');
        loginPage.inputPassword().type('admin123');

        cy.intercept("GET","**/messages").as("message"); 
        cy.intercept("GET","**/employees/action-summary").as("actionsummary"); 
        cy.intercept("POST","**/push").as("push");
        cy.intercept("GET","**/shortcuts").as("shortcuts"); 
        cy.intercept("GET","**/feed?limit=5&offset=0&sortOrder=DESC&sortField=share.createdAtUtc").as("feed");
        cy.intercept("GET","**/subunit").as("subunit");
        cy.intercept("GET","**/locations").as("locations");

        loginPage.buttonLogin().click();
        cy.wait('@message').then((intercept) => {
            expect(intercept.response.statusCode).to.equal(304);
          });

        var alias = [
            "@actionsummary","@push","@shortcuts","@feed","@subunit","@locations"
        ];
        alias.forEach((alias) => {
            cy.wait(alias).then((intercept) => {
                expect(intercept.response.statusCode).to.equal(200);
            });
        });

        
        loginPage.menuDashboard().should('have.text','Dashboard');
    });
});