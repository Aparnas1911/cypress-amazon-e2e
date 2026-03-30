# Amazon E2E Test Automation (Cypress)

![Cypress Tests](https://github.com/YOUR-USERNAME/YOUR-REPO/actions/workflows/cypress.yml/badge.svg)

---

## 📖 Overview

This project demonstrates an end-to-end (E2E) test automation framework using Cypress.

The test simulates a real user journey on Amazon:

* Search for a product
* Select a product from search results
* Add the product to cart
* Navigate to cart and proceed to checkout

This project highlights practical QA automation skills, including UI testing, handling dynamic elements, and CI/CD integration.

---

## 🧪 Test Scenario

**Amazon E2E Flow:**

1. Launch Amazon website
2. Handle cookie popup
3. Search for a product (iPhone 16 Pro Max)
4. Select first product from results
5. Verify product details
6. Add product to cart
7. Navigate to cart
8. Proceed to checkout

---

## 🛠 Tech Stack

* Cypress
* JavaScript
* Node.js
* GitHub Actions (CI/CD)

---

## 📂 Project Structure

```
cypress/
  e2e/
    amazon-e2e.cy.js
.github/
  workflows/
    cypress.yml
```

---

## ⚙️ Setup Instructions

1. Clone the repository

```
git clone https://github.com/YOUR-USERNAME/YOUR-REPO.git
```

2. Install dependencies

```
npm install
```

3. Run tests locally

```
npx cypress open
```

4. Run tests in headless mode

```
npx cypress run
```

---

## 🔐 Environment Variables

This project uses environment variables for login:

```
Cypress.env('AMAZON_EMAIL')
Cypress.env('AMAZON_PASSWORD')
```

⚠️ Credentials are not stored in the repository for security reasons.

---

## 🚀 CI/CD Integration

This project is integrated with GitHub Actions for Continuous Integration and Continuous Testing.

### 🔄 Workflow

* Triggered automatically on every push
* Installs dependencies using npm
* Runs Cypress tests in headless Chrome
* Provides logs and screenshots for debugging

### 📌 Benefits

* Automated test execution on every commit
* Early detection of bugs
* Simulates real-world QA automation pipelines

---

## ⚠️ Limitations

* Amazon may block automation using CAPTCHA
* Checkout flow may not complete in CI environments
* Test is designed mainly up to cart/checkout navigation

---

## 📸 Screenshots

Screenshots of failed tests are available in:

```
cypress/screenshots/
```

---

## 💡 Key Highlights

* Automated real-world e-commerce user flow
* Implemented dynamic element handling
* Used stable selectors for reliable automation
* Integrated CI/CD using GitHub Actions

---

## 👩‍💻 Author

**Aparna Santhoshkumar**
QA Analyst | Automation Testing | Cypress | Selenium

---
