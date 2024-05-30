export default class LinksPage{
    createdLink = 'a[id="created"]'

    clickCreatedLink(){
        cy.get(this.createdLink).should('be.visible').click();
    }

    interceptAPI(){
        cy.intercept({
            method: 'GET',
            url: '/created',
        }).as('successfulAction')
        cy.wait('@successfulAction').then(($resp)=>{
            cy.log($resp.response)
        })
    }
}