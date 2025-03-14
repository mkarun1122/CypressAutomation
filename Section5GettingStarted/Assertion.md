should <br>
-------<br>

Create an assertion, Assertions are automatically retried until they pass or timed out

Below are different version of should assertion

.should(chainers)<br>
.should(chainers, value)<br>
.should(chainers, method, value)<br>
.should(callbackFn)<br>

Exampels <br>
cy.get('.error').should('be.empty') // Assert that .errror is empty 
cy.get('.error').should('be.visible') // Assert that .error classname control should be visible <br>
cy.wrap({foo:'bar'}).its('foo').should('eq','bar) // foo property equals to bar 


cy.get('option:first')
  .should('be.selected')
  .then(($option) => {
    // $option is yielded
  })


  Assert the class is 'form-horizontal' <br> 
  cy.get('form').should('have.class','form-horizental')<br>

  cy.get('input').should('not.have.value', 'Jane')


Assert the anchor element has href attribute

  // have.attr comes from chai-jquery
cy.get('#header a').should('have.attr', 'href')



Chainers	            Assertion
attr(name, [value])	    .should('have.attr', 'bar')
expect($el).to.have.attr('foo', 'bar')

prop(name, [value])	    .should('have.prop', 'disabled', false)
expect($el).to.have.prop('disabled', false)

css(name, [value])	    .should('have.css', 'background-color', 'rgb(0, 0, 0)')
expect($el).to.have.css('background-color', 'rgb(0, 0, 0)')

data(name, [value])	    .should('have.data', 'foo', 'bar')
expect($el).to.have.data('foo', 'bar')

class(className)	    .should('have.class', 'foo')
expect($el).to.have.class('foo')

id(id)	    .should('have.id', 'foo')
expect($el).to.have.id('foo')

html(html)	    .should('have.html', 'I love testing')
expect($el).to.have.html('with Cypress')

text(text)	    .should('have.text', 'I love testing')
expect($el).to.have.text('with Cypress')

value(value)	    .should('have.value', 'test@dev.com')
expect($el).to.have.value('test@dev.com')

visible	    .should('be.visible')
expect($el).to.be.visible

hidden	    .should('be.hidden')
expect($el).to.be.hidden

selected	    .should('be.selected')
expect($option).not.to.be.selected

checked	    .should('be.checked')
expect($input).not.to.be.checked

focus[ed]	    .should('have.focus')
expect($input).not.to.be.focused
expect($input).to.have.focus

enabled	    .should('be.enabled')
expect($input).to.be.enabled
disabled	.should('be.disabled')
expect($input).to.be.disabled
empty	.should('be.empty')
expect($el).not.to.be.empty

exist	.should('exist')
expect($nonexistent).not.to.exist

match(selector)	.should('match', ':empty')
expect($emptyEl).to.match(':empty')

contain(text)	.should('contain', 'text')
expect($el).to.contain('text')

descendants(selector)	.should('have.descendants', 'div')
expect($el).to.have.descendants('div')


/// how to find invisible elements matching with locator  <br>
cy.get('.product:visible').shloud('have.length',4) 

// alternative method to find products or scope reduce to specific DOM area <br>
cy.get('.products').find(.product').shloud('have.length',4) 

https://rahulshettyacademy.com/AutomationPractice/

https://rahulshettyacademy.com/seleniumPractise/#/

https://rahulshettyacademy.com/practice-project



