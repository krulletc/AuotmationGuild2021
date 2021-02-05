describe('Example to demonstrate the handling of Shadow Dom in Cypress', () => {
  it('update the content in the editable list', () => {
    cy.visit('https://mdn.github.io/web-components-examples/editable-list/')
    cy.get('editable-list').shadow().find('li').eq(0).find('button').click()
    cy.get('editable-list')
      .shadow()
      .find('li')
      .eq(0)
      .should('contain', 'Second item')
  })
})