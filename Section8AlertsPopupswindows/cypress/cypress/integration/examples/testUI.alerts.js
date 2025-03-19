/// <reference types='Cypress'/>

describe(' Handle alerts , popups , Windows Suite',function(){

    it(' Check - Handling Alerts ',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()
        // Cypress Tool auto handles alerts 

        // how to capture the text on the alerts 
        // trigger the event window:alert 
        // capture 2nd argument 
        cy.on('window:alert',(str)=>{
            expect(str).equal('Hello , share this practice page and share your knowledge')
        })


        //handling confirm event 

        cy.on('window:confirm',(str1)=>{
            expect(str1).equal('Hello , Are you sure you want to confirm?')
        })
    })

    it(' Check - handling child tab using cypress & JQuery ',function()>{

    })
    
})
