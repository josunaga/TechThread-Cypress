export default class LoadDelay{


    loadDelayHeader = 'section div h3'
    loadDelayButton = 'button[class="btn btn-primary"]'

    verifyHeaderDisplayed(){
        cy.get(this.loadDelayHeader, { timeout: 30000 }).contains('Load Delays').should('be.visible');

    }

    verifyAndClickBtn(){
        cy.get(this.loadDelayButton).should('be.visible').click();
    }
}