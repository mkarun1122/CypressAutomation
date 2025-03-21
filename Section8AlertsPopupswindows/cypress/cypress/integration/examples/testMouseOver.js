describe('test Mouse Over - Suite',function(){
 

    /*
    1. Using JQuery fucntion 'show' using invoke method 
    2. Cypress has inteligence to click invisible elements  using {froce:true}
    */

    it('test Mouse Over - check ',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('div.mouse-hover-content').invoke('show') // jquery execute immediate elements , taken class instead of ID loc
        cy.contains('Top').click()
        cy.url().should('include','top')

    })

    it('test Mouse Over elements in invisible mdoe - using {froce: true}  - check ',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        // cy.get('div.mouse-hover-content').invoke('show') // jquery execute immediate elements , taken class instead of ID loc
        cy.contains('Top').click({force:true})
        cy.url().should('include','top')
  
    })
})