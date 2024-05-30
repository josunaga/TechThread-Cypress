export default class ProfilePage{
    logOutBtn = 'div[id="books-wrapper"] button[id="submit"]'

    usernameValueField = 'label[id="userName-value"]'
    mainHeaderPage = 'header a[href="https://demoqa.com"]'

    verifySuccessLogIn(){
        cy.get(this.logOutBtn).should('be.visible');
    }

    clickLogOutBtn(){
        cy.get(this.logOutBtn).should('be.visible').click();
    }

    verifyMainHeader(){
        cy.get(this.mainHeaderPage).should('be.visible');
    }

    verifyUsernameValue(){
        cy.get(this.usernameValueField).should('be.visible');
    }

    verifyURL(path){
        cy.url().should('include', path)
    }
}