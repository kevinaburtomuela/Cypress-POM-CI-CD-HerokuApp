# Cypress POM CI/CD - HerokuApp

## Overview

This project is an automated end-to-end testing framework built with Cypress and JavaScript, following the Page Object Model (POM) design pattern.

The framework validates critical UI functionalities of the [Herokuapp](https://the-internet.herokuapp.com) application, a widely used practice site for QA automation. It is integrated with a full **CI/CD pipeline using Jenkins**, **Mochawesome reports**, and **Docker** for containerization.

---

## Technologies Used

- JavaScript
- Cypress 15+
- Mochawesome Reports
- Page Object Model (POM)
- Jenkins
- Docker
- ngrok

---

## Project Structure

```text
cypress-pom-herokuapp/
│
├── cypress/
│   ├── e2e/
│   │   └── HomePage/
│   │       └── home.cy.js
│   │
│   ├── pages/
│   │   ├── homePage.js
│   │   ├── dropDownPage.js
│   │   ├── checkBoxPage.js
│   │   ├── sliderPage.js
│   │   ├── inputPage.js
│   │   ├── addRemovePage.js
│   │   ├── floatingMenuPage.js
│   │   ├── loginFormPage.js
│   │   ├── securePage.js
│   │   ├── uploadPage.js
│   │   └── downloadPage.js
│   │
│   ├── selectors/
│   │   ├── dropDownSelector.js
│   │   ├── checkBoxSelector.js
│   │   ├── sliderSelector.js
│   │   ├── InputSelector.js
│   │   ├── addRemoveSelector.js
│   │   ├── floatingMenuSelector.js
│   │   ├── loginFormSelector.js
│   │   ├── secureSelector.js
│   │   ├── uploadSelector.js
│   │   └── downloadSelector.js
│   │
│   ├── fixtures/
│   │   └── upload/
│   │       └── qa.png
│   │
│   ├── downloads/
│   └── reports/
│
├── Dockerfile
├── Jenkinsfile
├── cypress.config.js
├── package.json
└── README.md
```

---

## Test Coverage

### Dropdown
- TC001 — Select the first option
- TC002 — Select the last option

### Checkboxes
- TC003 — Uncheck all checkboxes
- TC004 — Check all checkboxes

### Slider
- TC005 — Move slider to half value (2.5)
- TC006 — Move slider to complete value (5.0)

### Input
- TC007 — Enter the number 10 and validate

### Add/Remove Elements
- TC008 — Add a new element and validate visibility
- TC009 — Remove an element and validate it no longer exists

### Floating Menu
- TC010 — Validate navigation through all floating menu options (Home, News, Contact, About)

### Login
- TC011 — Successful login with valid credentials
- TC012 — Logout from secure area and validate message

### File Management
- TC013 — Download a file and validate it exists locally
- TC014 — Upload an image and validate success message

---

## Installation

Clone the repository:

```bash
git clone https://github.com/kevinaburtomuela/Cypress-POM-CI-CD-HerokuApp.git
cd Cypress-POM-CI-CD-HerokuApp
```

Install dependencies:

```bash
npm install
```

---

## Running Tests

Run all tests in headless mode:

```bash
npm test
```

Run tests with Cypress UI:

```bash
npx cypress open
```

Run a specific spec file:

```bash
npx cypress run --browser chrome --spec "cypress/e2e/HomePage/home.cy.js"
```

---

## Mochawesome Reports

Reports are automatically generated after each test run in:

```
cypress/reports/mochawesome.html
```

Open the file in your browser to view the full report with pass/fail status, test duration, and screenshots on failure.

---

## CI/CD Pipeline — Jenkins

This project uses a **Jenkins pipeline** that triggers automatically on every push to the `master` branch via a **GitHub webhook**.

### Pipeline Stages

| Stage | Description |
|-------|-------------|
| Clean Workspace | Removes files from previous builds |
| Checkout | Clones the repository from GitHub |
| Install Dependencies | Installs Node.js packages |
| Run Cypress Tests | Executes all 14 test cases in Chrome |
| Archive Results | Saves reports, screenshots and videos |
| Publish Report | Publishes Mochawesome HTML report in Jenkins |

### Webhook Setup

This pipeline uses **ngrok** to expose the local Jenkins instance to GitHub webhooks:

```bash
ngrok http 8080
```

Use the generated public URL as the GitHub webhook payload URL:

```
https://YOUR_NGROK_URL/github-webhook/
```

---

## Docker

This project is fully containerized. Pull and run the image with:

```bash
docker pull kevinaburtomuela/cypress-herokuapp:latest
docker run kevinaburtomuela/cypress-herokuapp:latest
```

Build the image locally:

```bash
docker build -t kevinaburtomuela/cypress-herokuapp:latest .
docker push kevinaburtomuela/cypress-herokuapp:latest
```

---

## Author

Kevin Aburto

QA Automation Engineer Portfolio Project
