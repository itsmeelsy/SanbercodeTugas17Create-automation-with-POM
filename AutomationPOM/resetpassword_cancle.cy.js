/// <reference types="cypress"/>

import loginPage from "../inputdata.cy";

describe('Login Feature',() => {
it('Pengguna dapat membatalkan reset password' ,() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.intercept("GET","**/messages").as("messages");

    loginPage.forgotPass().click();

    cy.wait('@messages').then((intercept) => {
      expect(intercept.response.statusCode).to.equal(304);
    });

    loginPage.textResetPass().should('contain','Reset Password'); 
    loginPage.inputUsername().type('Admin');

    cy.intercept("GET","**/messages").as("messages");
    cy.intercept("GET","**/login").as("login");

    loginPage.buttonCancle().click();

    cy.wait('@messages').then((intercept) => {
      expect(intercept.response.statusCode).to.equal(304);
    });
    cy.wait('@login').then((intercept) => {
      expect(intercept.response.statusCode).to.equal(200);
    });

    loginPage.textLogin().should('have.text','Login');
  })
})