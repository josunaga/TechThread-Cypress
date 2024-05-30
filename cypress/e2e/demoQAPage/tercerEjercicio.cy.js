import LoginPage from '../../pages/demoQAPages/loginPage'
import ProfilePage from '../../pages/demoQAPages/profilePage'

const loginPage = new LoginPage();
const profilePage = new ProfilePage();

let demoQA

Cypress.session.clearAllSavedSessions();
describe("Exercises in demoQA page for Intermediate checkpoint evaluation", () =>{
    before(()=>{
        cy.fixture('demoQA').then((data) =>{
            demoQA = data;
        })
    })
    
    beforeEach(() => {
        cy.session('mySession', ()=>{
            cy.visit('https://demoqa.com/login')
            loginPage.inputCredentials(demoQA.validTestUser, demoQA.validPasswordTestUser);
            profilePage.verifyURL('profile')
        })
    });

    it("Check if session was saved", ()=>{
        cy.visit('https://demoqa.com/login')
    })

    it("Check if session was saved", ()=>{
        cy.visit('https://demoqa.com/login')
    })
})