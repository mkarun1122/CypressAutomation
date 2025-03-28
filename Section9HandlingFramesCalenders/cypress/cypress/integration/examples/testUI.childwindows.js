describe(' Suite - Section9 - childwindow, Frames and Calenders handling',function(){


    it('ChildWindows - checks ',function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#opentab').then(function($e1){
            const url  = $e1.prop('href')
            cy.log(url);
            cy.visit(url)

            cy.origin(url,()=>{
                cy.get('.nav-item a[href="about.html"]').click()
                cy.get('#about-page .section-title h2').should('have.text','Welcome to QAClick Academy ')

            })
            
        })

    })
})