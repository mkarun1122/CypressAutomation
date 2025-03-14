describe('GreenKart Tests - Adding Items to cart ',function(){

    it('Test Add Items on Greenkart ecom portal',function(){

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.get('button.search-button').click()
        cy.get('.product:visible').should('have.length',4)

        cy.get('.products').find('.product').eq(3).contains('ADD TO CART').click()

    })

    it('iterate each element loop and find required and click on the item',function(){

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.get('button.search-button').click()

        cy.get('.products').find('.product').each(($ex1,index,$list)=>{
            const textveg=$ex1.find('h4.product-name').text()
            if(textveg.includes('Cashews'))
            {
                cy.wrap($ex1).find('button').click()
            }
        })
    })


})