
describe('empty spec', () => {
  it('Invalid User Name Test', () => {
    cy.visit("http://demo.redmine.org/login")
    cy.get("#username").type("invalidName")
    cy.get('#password').type("ruchira@123")
    cy.get("input[name='login']").click()
    cy.get('#flash_error').contains('Invalid user or password')
  })

  it('Invalid Password Test', () => {
    cy.visit("http://demo.redmine.org/login")
    cy.get("#username").type("ruchira")
    cy.get('#password').type("invalidPassword")
    cy.get("input[name='login']").click()
    cy.get('#flash_error').contains('Invalid user or password')
  })

  it('Invalid Username and Password Test', () => {
    cy.visit("http://demo.redmine.org/login")
    cy.get("#username").type("invalidName")
    cy.get('#password').type("invalidPassword")
    cy.get("input[name='login']").click()
    cy.get('#flash_error').contains('Invalid user or password')
  })

  it('Valid Username and Password Test', () => {
    cy.visit("http://demo.redmine.org/login")
    cy.get("#username").type("ruchira")
    cy.get('#password').type("ruchira@123")
    cy.get("input[name='login']").click()
    cy.get('h2').contains('My page')
  })

})