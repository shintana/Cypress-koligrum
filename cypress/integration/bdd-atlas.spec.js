describe('BDD Atlas', () => {
    it ('Visit BDD Atlas Web', () => {
        cy.visit('http://bdd.atlasid.tech/');
        cy.url().should('eq', 'http://bdd.atlasid.tech/');
        cy.url().then((url) => {
            expect(url).to.be.equal('http://bdd.atlasid.tech/');
        })
    })

    it('Type a Quote', () => {
        cy.get('#inputQuote').type('test input quote');
    })

    it('Select colour', () => {
        cy.get('#colorSelect').select('Blue');
    })

    it('Submit a Quote', () => {
        cy.get('#buttonAddQuote').click();
        cy.contains('test').should('exist');
    })

    it('Clear specific quote', () => {
        cy.wait(2000);
        cy.contains('test input').click().should('not.exist');
        cy.wait(2000);
    })


})