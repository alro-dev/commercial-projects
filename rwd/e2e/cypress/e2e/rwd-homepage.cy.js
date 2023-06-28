import 'cypress-each'

  var rwdPage = 'http://mechanikarwd.pl'

const menuItems = [
    ['/about', 'O nas'],
    ['/service', 'Usługi'],
    ['/book-now','Rezerwacje'],
    ['/contact', 'Kontakt']
]

describe('Home Page - menu', () => {
  it('page is loaded', () => {
    // var rwdPage = 'http://mechanikarwd.pl'
    cy.visit(rwdPage);
    cy.url().should('include', rwdPage);
    });

    it.each(menuItems)('%s page has %s header', (href, text) => {
      // var rwdPage = 'http://mechanikarwd.pl';
      cy.visit(rwdPage);
      cy.get("a.nav-link[href='"+ href + "']").click(); //"a.nav-link[href='/about']"
    })
  })

const footerItems = [
  ['/about', 'O nas'],
  ['/#team', 'Nasz zespół'],
  ['/contact','Kontakt']
]

describe('Home Page - footer', () => {
  it('page is loaded', () => {
    // var rwdPage = 'http://mechanikarwd.pl'
    cy.visit(rwdPage);
    cy.url().should('include', rwdPage);
    });

    it.each(footerItems)('%s page has %s footer', (href, text) => {
      // var rwdPage = 'http://mechanikarwd.pl';
      cy.visit(rwdPage);
      cy.get(".footer-links > li > a[href='"+ href + "']").click({multiple: true}); //"footer-links[href='about']"
      cy.get(".footer-icons").click() //facebook
    });
    
  })

  const footerIcons = [
    ['https://www.facebook.com/RWDiagnoza/', 'facebook'],
    ]

    describe('Home Page - footerFacebookOpen', () => {
      it('page is loaded', () => {
        // var rwdPage = 'http://mechanikarwd.pl'
        cy.visit(rwdPage);
        cy.url().should('include', rwdPage);
        });
    
        it.each(footerIcons)('%s page has %s footer', (href, text) => {
          // var rwdPage = 'http://mechanikarwd.pl';
          cy.visit(rwdPage);
          cy.get("[href='"+ href + "']").click(); //"footer-icons[href='facbook']"
        });
        
      })