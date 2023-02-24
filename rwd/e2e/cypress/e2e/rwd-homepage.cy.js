import 'cypress-each'

const menuItems = [
    ['/about', 'O nas'],
    ['/service', 'Usługi'],
    ['/book-now','Rezerwacje'],
    ['/contact', 'Kontakt']
]

describe('Home Page', () => {
  it('page is loaded', () => {
    var rwdPage = 'http://mechanikarwd.pl'
    cy.visit(rwdPage);
    cy.url().should('include', rwdPage);
    });

    it.each(menuItems)('%s page has %s header', (href, text) => {
      var rwdPage = 'http://mechanikarwd.pl';
      cy.visit(rwdPage);
      cy.get("a.nav-link[href='"+ href + "']").click(); //"a.nav-link[href='/about']"
    })
  })