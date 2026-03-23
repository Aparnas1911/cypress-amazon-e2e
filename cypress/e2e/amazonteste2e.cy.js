
describe('Flipkart E2E Test', () => {

  it('Search for a product and verify results', () => {
    //Visit Amazon
    cy.visit('https://www.amazon.ca/')
    //Search for product
    cy.get('#twotabsearchtextbox').type('iphone 16 pro max')
    cy.get('#nav-search-submit-button').click()
    //Closing the Pop-up
    cy.get('#sp-cc-accept').click({ multiple: true },{force: true})
     //Verify search results
     // cy.contains('Results').scrollIntoView().should('be.visible')
    cy.get('.a-size-base-plus').click
    //Click first product,Viewing the product
    cy.contains('Apple iPhone 16 Pro Max, 256GB, Black Titanium (Renewed)').closest('a').click()
    //Verifying the page
    cy.get('#feature-bullets', { timeout: 10000 }) .scrollIntoView().should('be.visible').contains('About this item')
    //adding to cart
   cy.get('#add-to-cart-button', { timeout: 20000 }).should('be.visible').click()  
   //Proceed to cart
  cy.contains('Proceed to checkout', { timeout: 10000 }).should('be.visible').click()
  //Proceed to cart-Login needed
  cy.get('#ap_email_login').type('aparnasanthosh1119@gmail.com')
  cy.get('#continue').should('be.visible').click()
  cy.get('#ap_password').type("Qwerty@12345")
  cy.get('#signInSubmit').should('be.visible').click()
  cy.get('#verification-code-form').type('08391')

  })
})