describe('Amazon E2E Test - Search, Product, Cart, Checkout', () => {

  beforeEach(() => {
    cy.visit('https://www.amazon.ca/')
  })

  it('Search → Select Product → Add to Cart → Checkout', () => {

    // 🔹 Handle cookie popup (if present)
    cy.get('body').then(($body) => {
      if ($body.find('#sp-cc-accept').length > 0) {
        cy.get('#sp-cc-accept').click()
      }
    })

    // 🔹 Search product
    cy.get('#twotabsearchtextbox')
      .should('be.visible')
      .type('iphone 16 pro max')

    cy.get('#nav-search-submit-button').click()

    // 🔹 Click first product (stable approach)
    cy.get('[data-component-type="s-search-result"]')
      .first()
      .find('h2 a')
      .invoke('removeAttr', 'target') // stay in same tab
      .click()

    // 🔹 Verify product page
    cy.get('#feature-bullets', { timeout: 10000 })
      .scrollIntoView()
      .should('be.visible')
      .and('contain', 'About this item')

    // 🔹 Add to cart
    cy.get('#add-to-cart-button', { timeout: 20000 })
      .should('be.visible')
      .click()

    // 🔹 Go to cart (Amazon sometimes shows this)
    cy.contains('Go to Cart', { timeout: 10000 }).click({ force: true })

    // 🔹 Proceed to checkout
    cy.contains('Proceed to checkout', { timeout: 10000 })
      .should('be.visible')
      .click()

    // 🔹 Login (NOTE: avoid hardcoding in real projects)
    cy.get('#ap_email')
      .should('be.visible')
      .type(Cypress.env('AMAZON_EMAIL'))

    cy.get('#continue').click()

    cy.get('#ap_password')
      .should('be.visible')
      .type(Cypress.env('AMAZON_PASSWORD'))

    cy.get('#signInSubmit').click()

  })

})