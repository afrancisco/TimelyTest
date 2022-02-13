class login {
    inputEmail = () => 'input[id="email"]'
    inputPassword = () => 'input[id="password"]'
    checkboxRememberMe = () => 'button[data-testid="button-reativar"]'
    linkForgotPassword = () => 'button[data-testid="button-reativar"]'
    buttonLogin = () => 'button[type="submit"]'
    buttonFacebookLogin = () => 'button[data-testid="button-reativar"]'
    buttonSSOLogin = () => 'button[data-testid="button-reativar"]'
    buttonGoogleLogin = () => 'button[data-testid="button-reativar"]'
    linkCreateAccount = () => 'button[data-testid="button-reativar"]'
    labelRequiredFields = () => 'div[class="help-block text-danger"]'
}
export const loginElements = new login()