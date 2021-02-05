describe('verify the result from my search apears', () => {
  it('should find my twitter user', () => {
    cy.intercept('typeahead-js-twitter-api-proxy.herokuapp.com/demo/search').as('twitterSearch')
    cy.visit('http://twitter.github.io/typeahead.js/')
    cy.get('#demo-input').type('testguilds')
    cy.wait('@twitterSearch')
    cy.get('.ProfileCard-description').should('contain', "Blog, Podcasts & Online Conferences")
  })
});