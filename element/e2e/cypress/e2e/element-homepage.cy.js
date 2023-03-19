import 'cypress-each'

const addressPage = 'https://reklama-element.pl/'

const menuItems = [
  ['menu-item-853', 'Usługi'],
  ['menu-item-30', 'Kontakt'],
  ['menu-item-854','Klienci'],
  ['menu-item-31','Projekty'],
]

describe('Home Page', () => {
  it('page is loaded', () => {
    // const addressPage = 'https://reklama-element.pl/'
    cy.visit(addressPage);
    cy.url().should('include', addressPage);
  });

    it.each(menuItems)('%s page has %s header', (id, text) => {
      // const addressPage = 'https://reklama-element.pl/';
      cy.visit(addressPage);
      cy.get("#" + id).click({force: true}); //"#menu-item-853"
    })
})

const menuIcons = [
  ['https://www.facebook.com/Element-Warsztat-Reklamy-106973381465824', 'facebook'],
]

describe('Home Page - FacebookOpen', () => {
  it('page is loaded', () => {
    // const addressPage = 'https://reklama-element.pl/';
    cy.visit(addressPage);
    cy.url().should('include', addressPage);
    });
    
    it.each(menuIcons)('%s page has %s menu', (href, text) => {
    // const addressPage = 'https://reklama-element.pl/';
        cy.visit(addressPage);
        cy.get("[href='"+ href + "']").click({force: true, multiple: true}); //"menu-icons[href='facebook']"
      });
        
})
