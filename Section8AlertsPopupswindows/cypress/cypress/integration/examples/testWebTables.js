describe('Handle WebTable suite ',function(){

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
})