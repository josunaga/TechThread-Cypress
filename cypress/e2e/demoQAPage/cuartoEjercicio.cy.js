import LinksPage from '../../pages/demoQAPages/linksPage'

const linksPage = new LinksPage();

let demoQA;
describe("Exercises in demoQA page for Intermediate checkpoint evaluation", ()=>{
    
    before(()=>{
        cy.fixture('demoQA').then((data) =>{
            demoQA = data;
        })
    })
    beforeEach(()=>{
        cy.visit('https://demoqa.com/links')
    })

    it("Intercept https://demoqa.com/created", ()=>{
        linksPage.clickCreatedLink()
        //linksPage.interceptAPI()
        cy.request('GET', '/created').as('createdResponse');
        cy.get('@createdResponse').then((response)=>{
            expect(response.status).to.be.eql(201)
            expect(response.statusText).to.be.eql('Created')
        })
    })
})