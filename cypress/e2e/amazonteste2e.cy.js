describe('Amazone Site E2E Test - Search, Product, Cart, Checkout', () => {
 beforeEach(() => {
    cy.visit('https://www.amazon.ca/')})
     
    //Handling pop-up
    it('Search -> Select Product -> Add to cart -> Checkout',() => {
    cy.get('body').then(($body) => {
    if ($body.find('#sp-cc-accept').length) {
    cy.get('#sp-cc-accept').click()
    }

    //Product Search
    cy.get('#twotabsearchtextbox').should('be.visible').type('iphone 16 pro max')
    cy.get('#nav-search-submit-button').click()

    //Selecting the first product
    cy.get('[data-component-type="s-search-result"] h2').first().click() 
    
    //Verifying the product details page
    cy.get('#feature-bullets').should('contain','About this item')

    //Add to cart
    cy.get('#add-to-cart-button').should('be.visible').click()

    //Proceed to checkout
    cy.get('#sc-buy-box-ptc-button').should('be.visible').click()
    })
    }
    )
})