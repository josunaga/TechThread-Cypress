import LoginPage from '../../pages/demoQAPages/loginPage'
import ProfilePage from '../../pages/demoQAPages/profilePage'

const loginPage = new LoginPage();
const profilePage = new ProfilePage();

let demoQA
describe("Exercises in demoQA page for Intermediate checkpoint evaluation", () =>{

    before(()=>{
        cy.fixture('demoQA').then((data) =>{
            demoQA = data;
        })
    })

    beforeEach(()=>{
        cy.visit('https://demoqa.com/login')
    })

    it("USER STORY 1 exercise", ()=>{
        loginPage.verifyWelcomeMsgLogin();
        loginPage.inputCredentials(demoQA.validTestUser, demoQA.validPasswordTestUser);
        profilePage.verifySuccessLogIn();
        profilePage.verifyMainHeader();
        profilePage.verifyUsernameValue();
        profilePage.verifyURL(demoQA.profileURLPath)
        profilePage.clickLogOutBtn();
        loginPage.inputCredentials(demoQA.validTestUser, demoQA.invalidPassword);
        loginPage.errorLoginMsg(demoQA.errorMsg)

    })

})