
1. Open ecom URL
2. Find the products 
3. Add To Cart 
4. Find only visible elemnets method ( using visible and Driver Scope reduced to DOM)

Note: See This excercise in Section2 Tests 

Focus Areas 
1. Identifying Locators 
2. IDentifying only visible elements 
3. Exploring Should Assertion 
4. How to reduce cypress driver scope to effectively identify elements in DOM using Find


// Grabbing Text for validations using cypress text commond 
// iterate each element loop and find required and click on the item


// Asyncronous - default node.js (not in sequence )

// how cypress handles async nature - to make execute in sequence of steps 
Answere : its has build in engine to make execute steps in sequence, handing with wrappers to handle these async nature 

It is very important to understand that Cypress commands don't do anything at the moment they are invoked, but rather enqueue themselves to be run later. This is what we mean when we say Cypress commands are asynchronous.

Every async step returns any one of the below  state 
Promise comes in 3 states ( Reject, Resolve and Peding)

this can be implimented using commond .then()
Cypress hiding from you promise to wrappers , take cares automatically 


// understanding  difference between JQuery and Cypress Commonds 

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


        // Handling Async promises in cypress 

        // Alias --> as('name of element')