import { loginElements } from '../4-elements/loginElement'

/**
 * @classdesc classe criada para implementar as funcionalidades relacionadas a login
 */
class LoginPage {
    fillLoginFields = (user, password) => {
        cy.get(loginElements.inputEmail()).clear().type(user);
        cy.get(loginElements.inputPassword()).clear().type(password);
    }

    submitLogin = () => {
        cy.get(loginElements.buttonLogin()).click();
    }
    validateRequiredFields = (text) => {
        expect( cy.get(loginElements.labelRequiredFields()).contains(text)).to.be.visible();
    }
}


export const loginPage = new LoginPage()