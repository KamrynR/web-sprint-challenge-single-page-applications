describe('Test', function () {
    it('Tests for a name', function () {
        cy.visit('http://localhost:3000/pizza')

        cy.get(':nth-child(2) > input')
            .should('have.value', '')

        cy.get('.pepperoni > p > input')
            .should('have.value', 'on')

        cy.get('.canadianBacon > p > input')
        .should('have.value', 'on')

        cy.contains('.order-button').click()
    })
})