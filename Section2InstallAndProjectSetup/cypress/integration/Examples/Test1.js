describe('This is my First Cypress Test Suite- describe block', function(){

    it('My First IT block test1', function(){
        // test cases 
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    })

    it('My First IT block test2', function(){
        // test cases 
        cy.visit('https://www.google.com/')
        cy.get('textarea[name="q"]').type("npm trends").click()

    })

    
})