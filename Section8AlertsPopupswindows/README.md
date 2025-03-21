// alerts handling 
cypress automatically takes cares on popups 
1. popup with OK 
2. popup with OK or Confirm
auto accepts 


- Handling alerts  
capture text on the alerts 
        cy.on('window:alert',(str)=>{
                    expect(str).equal('Hello , share this practice page and share your knowledge')
                })

        cy.on('window:confirm',(str1)=>{
            expect(str1).equal('Hello , Are you sure you want to confirm?')
        })

- Handling Same Origin issue 
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').invoke('removeAttr','target').click();

        cy.origin("https://www.qaclickacademy.com/",()=>{

            cy.get('.nav-item a[href="about.html"]').click()
            cy.get('#about-page .section-title h2').should('have.text','Welcome to QAClick Academy ')
 
        })
- Handling WebTable 
        
        it('Check WebTables Prices',function(){

            cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

            cy.get('#product tr td:nth-child(2)').each(($e1,index, $list)=>{

                const itemtext=$e1.text()

                if(itemtext.includes('Python')){

                    cy.get('#product tr td:nth-child(2)').eq(index).next().then(function(price){
                        const pricetext=price.text()
                        expect(pricetext).to.equal('25')
                    })


                }
            })

        })
- handling muse over events 
    
    1. Using JQuery fucntion 'show' using invoke method 
    2. Cypress has inteligence to click invisible elements  using {froce:true}


        it('test Mouse Over - check ',function(){
            cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
            cy.get('div.mouse-hover-content').invoke('show') // jquery execute immediate elements , taken class instead of ID loc
            cy.contains('Top').click()
            cy.url().should('include','top')

        })

        it('test Mouse Over elements in invisible mdoe - using {froce: true}  - check ',function(){
            cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
            // cy.get('div.mouse-hover-content').invoke('show') // jquery execute immediate elements , taken class instead of ID loc
            cy.contains('Top').click({force:true})
            cy.url().should('include','top')
    
        })