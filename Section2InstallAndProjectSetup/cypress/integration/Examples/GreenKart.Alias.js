describe('GreenKart Tests - Adding Items to cart ',function(){

    it('Test Add Items on Greenkart ecom portal',function(){

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.get('button.search-button').click()
        cy.get('.products').as('productLoc')
        cy.get('@productLoc').find('.product:visible').should('have.length',4)
        cy.get('@productLoc').find('.product').eq(3).contains('ADD TO CART').click()

    })

})