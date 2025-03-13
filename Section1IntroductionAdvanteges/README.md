- Cypress is next generation front end automation testing tool build for the modern web applications 
- How cypress is unique from other automation tools?
    - Automatically waits for commands and assertions before moving on 
     no more async issues 
    - Ability to test edge test cases by mocking server responces ( \w third party tools & technologies - alter req & resp inject fake responces )
    - Takes snapshots as your tests run, command log ( to trace scenario execution)
    Because of its architectural design , cypress delivers fast, consitent and reliable test execution 
    View videos of your entire tests execution 
    - cypress build on node.js and comes as an packaged as npm modules , As it build on node.js , it uses javascript for writing tests. 
    - Cypress bundles with jQuery and inherit many JQuery methods for UI componets
    - Check cypress Vs Playright vs Nigthwatch trends in node.js npm  

    Topic Covered 
    -------------

    1) JavaScript Fundamentals 
    2) Web Autoamtion with Cypress 
    3) API Automation with Cypress 
    4) Building Cypress Framework with Mocha & Cucumber
    5) Intercepting network responces & browser with cypress 
    6) Database Testing with Cypress 
    7) Single sign-on & accessbility Automation with Cypress 

    Cypress Architecture 
    ---------------------

    Selenium Arch 
    IDE code ---> (HTTP Req / Resp )   Browser Driver ---> Browser 

    Cypress  ---> Browser 
    - allows to modify browser beahviour at run time 
    - Alter the DOM 
    - alter the network Req/Res - inject mocks res/req 

    Cypress Browser Support 
    Chrome 
    Firefox 
    IE
    Electron ( Default browser - uses same chrome engine )
    

    Cypress Tools 
    -------------
    Test Runner 
    Cypress Dashboard 

    
    Testing Types to Support 
    ------------------------

    Unit Testing 
    Integration Testing 
    End to End Testing 


    Reference Document Notes 
    https://docs.cypress.io/app/get-started/why-cypress



