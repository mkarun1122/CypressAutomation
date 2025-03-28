/// <reference types="cypress"/>
/// <reference types="cypress-iframe"/>

import 'cypress-iframe'

describe('Suite Frames',function(){



    it('test Frames -check',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('a[href="mentorship"]:visible').eq(0).click()
        cy.iframe().find('h1[class*="pricing-title"]').should('have.length',2)
        // cy.iframe().find('h1[class*="pricing-title"]').should('have.length',2)

    })
})
