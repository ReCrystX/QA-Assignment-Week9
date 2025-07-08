const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
import loginPage from '../../pages/LoginPage'
import AddAdminPage from '../../pages/AddAdminPage';

const loginPage = new LoginPage()
const AddAdminPage = new AddAdminPage()

Given('I am logged in as Admin', () => {
  cy.fixture('users').then((users) => {
    const user = users.Admin
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    loginPage.enterUsername(user.username)
    loginPage.enterPassword(user.password)
    loginPage.clickLogin()
  })
})

And('I navigate to Admin page', () => {
  cy.get(':nth-child(1) > .oxd-main-menu-item').click() 
})

When('I click the +Add menu', () => {
    cy.get('.orangehrm-header-container > .oxd-button').click()
})

Then('I add a new admin with username {string} and password {string} with role {string}'), (username, password, role) => {
    AddAdminPage.enterRole(role)
    AddAdminPage.enterEmployeeName()
    AddAdminPage.enterStatus()
    AddAdminPage.enterUsername(username)
    AddAdminPage.enterPassword(password)
    AddAdminPage.confirmPassword(password)
}

And('I click the Save button', () => {
    AddAdminPage.clickSave()
})

Then('I can find the newly made admin by looking up {string} on the search bar', (username) => {
    cy.get(':nth-child(2) > .oxd-input').clear().type(username)
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    cy.get('.oxd-table-card > .oxd-table-row > :nth-child(2) > div').should('contain', username)
})