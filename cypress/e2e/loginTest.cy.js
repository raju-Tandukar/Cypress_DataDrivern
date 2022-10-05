import testData from '../fixtures/logintTestData.json'

describe('empty spec', () => {
  it('Verify Login test', () => {
    cy.visit("http://demo.redmine.org/login")
    for (const data of testData) {      
      cy.get("#username").clear().type(data.name)
      cy.get('#password').type(data.password)
      cy.get("input[name='login']").click()
      if(data.status=='fail')
        cy.get('#flash_error').contains(data.verifyText)
      else
        cy.get('h2').contains('My page')
    }
  })

})