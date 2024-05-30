import LoadDelay from '../../pages/uiTestingPlayground/loadDelay'

const loadDelay = new LoadDelay()
let uiTestingPlayground

describe("Exercises in uiTestingPlayground page for Intermediate checkpoint evaluation", () => {
    before(()=>{
        cy.fixture('uiTestingPlayground').then((data) =>{
            uiTestingPlayground = data;
        })
    })

    beforeEach(()=>{
        cy.visit('http://uitestingplayground.com/loaddelay')
    })

    it("USER STORY 2 exercise", () => {
        loadDelay.verifyHeaderDisplayed();
        loadDelay.verifyAndClickBtn();
    })
})