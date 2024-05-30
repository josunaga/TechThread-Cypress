export default class LoginPage{

    welcomeMsgLogin = 'form[id="userForm"] div h2'
    loginMsgLogin = 'form[id="userForm"] div h5'
    inputUsernameLogin = 'input[id="userName"]'
    inputPasswordLogin = 'input[id="password"]'
    logInBtn = 'button[id="login"]'

    errorLogInMsg = '#name'
    

    verifyWelcomeMsgLogin(){
        cy.get(this.welcomeMsgLogin).should('have.text', "Welcome,");
        cy.get(this.loginMsgLogin).should('have.text', "Login in Book Store");
    }

    inputCredentials(username,password){
        cy.get(this.inputUsernameLogin).should('be.visible').clear().type(username);
        cy.get(this.inputPasswordLogin).should('be.visible').clear().type(password);
        cy.get(this.logInBtn).should('be.visible').click();
    }

    errorLoginMsg(errorMsg){
        cy.wait(500)
        cy.get(this.errorLogInMsg).invoke('text').should('contains', errorMsg)
    }
};