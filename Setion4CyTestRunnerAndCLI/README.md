
How to open cypress via CLI  <br>
---------------------------- <br>

.\node_modules\.bin\cypress open <br>
It looks like this is your first time using Cypress: 14.2.0 on Welcome Screen
shows E2E or Components <br>

Add spec files under cypress folder <br>
update specpattern in config file to display on testrunner <br>
After updating specpattern, cypress  scan and list all test specs <br>

Build Cypress Basic test and run from TestRunner  <br>
------------------------------------------------- <br>
Check details in Section2 of Test.js spec file <br>

We have follow one testing framework to write tests <br>
So Cypress follows mocha framework to write test cases <br>

add below code <br>
describe('This is my First Cypress Test Suite- describe block', function(){

    it('My First IT block test1', function(){
        // test cases 
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    })

    it('My First IT block test2', function(){
        // test cases 
        cy.visit('https://www.google.com/')
    })
})


Want to run only one specific test file <br>
-------------------------------------------<br>

npm run cy:run -- --record --spec "cypress/integration/Examples/Test1.js" <br> 

npx cypress run --record --spec  "cypress/integration/Examples/Test1.js" <br>


Ptoject Structure <br>
----------------- <br>
Cypress <br>
Downloads <br>
Fixture <br>
integration / Examples / spec.js <br>
Support <br>
