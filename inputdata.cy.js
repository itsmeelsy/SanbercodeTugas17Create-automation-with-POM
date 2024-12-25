export default class loginPage {

    static textLogin(){
        return cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]');
    }

    static inputUsername(){
        return cy.get('[name="username"]');
    }
    
    static inputPassword(){
        return cy.get('[name="password"]');
    }

    //static typePassword(){
    //    return cy.get('[name="password"]');
    //}

    static buttonLogin(){
        return cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]');
    }

    static menuDashboard(){
        return cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]');
    }

    static invalidlogin(){
        return cy.get('[class="oxd-alert-content oxd-alert-content--error"]');
    }

    static required(){
        return cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]');
    }

    static forgotPass(){
        return cy.get('[class="oxd-text oxd-text--p orangehrm-login-forgot-header"]');
    }

    static textResetPass(){
        return cy.get('[class="orangehrm-forgot-password-container"]');
    }
       
    static buttonReset(){
        return cy.get('[class="oxd-button oxd-button--large oxd-button--secondary orangehrm-forgot-password-button orangehrm-forgot-password-button--reset"]');
   
    }

    static textSendLink(){
        return cy.get('[class="orangehrm-forgot-password-container"]');
    }

    static buttonCancle(){
        return cy.get('[class="oxd-button oxd-button--large oxd-button--ghost orangehrm-forgot-password-button orangehrm-forgot-password-button--cancel"]');
    }
    
    static menuDropdown(){
        return cy.get('[class="oxd-userdropdown-tab"]');
    }

    static buttonLogout(){
        return cy.get('[class="oxd-userdropdown-link"]');
    }

}
