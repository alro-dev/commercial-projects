import 'cypress-each'
var adresPage = 'https://reklama-element.pl/'
const menuItems = [
    ['http://reklama-element.pl/#services', 'Usługi'],
    ['http://reklama-element.pl/kontakt/', 'Kontakt'],
    ['http://reklama-element.pl/#testimonials','Klienci'],
    ['http://reklama-element.pl/portfolio/','Projekty'],
]

describe('Home Page', () => {
  it('page is loaded', () => {
    var rwdPage = 'https://reklama-element.pl/'
    cy.visit(adresPage);
    cy.url().should('include', adresPage);
    });

    it.each(menuItems)('%s page has %s header', (href, text) => {
      var rwdPage = 'https://reklama-element.pl/';
      cy.visit(adresPage);
      cy.get("[href='"+ href + "']").click(); //"[href='adresPage/#services']"
    })
  })