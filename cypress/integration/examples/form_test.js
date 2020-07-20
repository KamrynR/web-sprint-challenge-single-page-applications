describe('Test', function () {
    it('Tests for a name', function () {
        cy.visit('http://localhost:3000/pizza');

        cy.get(':nth-child(2) > input');
            .type('james')
            .should('have.value', 'james');

        cy.get('.pepperoni > p > input')
            .should('have.value', 'on');

        cy.get('.canadianBacon > p > input')
            .should('have.value', 'on');

        cy.get('.order-button')
            .click()
    })
})