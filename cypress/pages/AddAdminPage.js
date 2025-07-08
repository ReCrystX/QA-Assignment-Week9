class AddAdminPage {
  enterRole(role) {
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').clear().type(role)
  }

  enterEmployeeName(){
    cy.get('.oxd-autocomplete-text-input > input').type('A')
    cy.wait(2000)
    cy.get('.oxd-autocomplete-dropdown > :nth-child(1)').click()
  }

  enterStatus(){
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click()
    cy.get('.oxd-select-dropdown > :nth-child(2) > span').click()
  }

  enterUsername(username) {
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type(username)
  }

  enterPassword(password){
    cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type(password)
  }

  confirmPassword(password){
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type(password)
  }

  clickSave() {
    cy.get('.oxd-button').click()
  }
}

module.exports = AddAdminPage