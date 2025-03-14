describe('GreenKart Tests - Adding Items to cart ',function(){

    it('Test Add Items on Greenkart ecom portal',function(){

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
       
        /*
        const logo = cy.get('.brand')
        cy.log(logo.text())

        TypeError
            logo.text is not a function

        */

            // cypress return  promise here to execute 
        cy.get('.brand').then(function(logotext){
            cy.log(logotext.text()) // text() is also not cypress commond 
        })

    })

})