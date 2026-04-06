describe('Amazon Site E2E Test - Search, Product, Cart, Checkout', () => {

  beforeEach(() => {
    cy.visit('https://www.amazon.ca/', {
      failOnStatusCode: false
    })

    cy.viewport(1280, 720)

    // wait for page to load
    cy.get('body', { timeout: 20000 }).should('be.visible')

    // handle cookie popup safely
    cy.get('body').then(($body) => {
      if ($body.find('#sp-cc-accept').length) {
        cy.get('#sp-cc-accept').click()
      }
    })
  })

  it('Search -> Select Product -> Add to cart -> Checkout', () => {

    // 🔍 Product Search
    cy.get('#twotabsearchtextbox', { timeout: 20000 })
      .should('be.visible')
      .type('iphone 16 pro max{enter}')

    // wait for results to load
    cy.get('[data-component-type="s-search-result"]', { timeout: 20000 })
      .should('have.length.greaterThan', 0)

    // 🛒 Select first product
    cy.get('[data-component-type="s-search-result"] h2')
      .first()
      .should('be.visible')
      .click()

    // 📄 Verify product page
    cy.get('#feature-bullets', { timeout: 20000 })
      .should('be.visible')
      .and('contain.text', 'About this item')

    // ➕ Add to cart
    cy.get('#add-to-cart-button', { timeout: 20000 })
      .should('be.visible')
      .click()

    // 💳 Proceed to checkout
    cy.get('#sc-buy-box-ptc-button', { timeout: 20000 })
      .should('be.visible')
      .click()
  })
})