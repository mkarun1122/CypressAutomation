describe('WebUI Controls Handling', function(){

    it('Test webui -checkbox', function(){
        // test cases 
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption1').as('checkboxctrls') /// alias 
        cy.get('@checkboxctrls').check().should('be.checked').and('have.value','option1')
        cy.get('@checkboxctrls').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"').check(['option2','option3'])



        /// static dropdown handling 
        cy.get('select').select('option2').should('have.value','option2')

        // dynamic dropdown handling 
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($ex1,index, $list)=>{
            if($ex1.text()==="India")
            {
                cy.wrap($ex1).click()
            }
            // cy.log(cy.wrap($ex1.text()))
        })

        // Radio button checked 
        // cy.get('.radioButton').each(($ex2,index,$list)=>{

        //     if(cy.wrap($ex2).value==="radio2"){
        //         cy.wrap($ex2).check()
        //     }
            
        // })
        cy.get('[for="radio2"] > .radioButton').check()
        cy.get('input[value="radio2"]').should('be.checked')

        // check controls are visible/hide 
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')



    })

  

    
})