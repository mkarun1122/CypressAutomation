/// <reference types='Cypress'/>

describe(' Same Origin Suite',function(){

    it('Resolve Same Origin using removeall jQuery cmd ',function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').invoke('removeAttr','target').click();

        cy.origin("https://www.qaclickacademy.com/",()=>{

            cy.get('.nav-item a[href="about.html"]').click()
            cy.get('#about-page .section-title h2').should('have.text','Welcome to QAClick Academy ')
 
        })
        


    })

})
