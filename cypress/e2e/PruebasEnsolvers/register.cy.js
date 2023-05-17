describe("Test suite - conjunto de pruebas login", () => {

    beforeEach(() => {
        cy.visit("https://qa-challenge.ensolvers.com/account/register")
    })

    it("Registrar usuario", () => {

        cy.get('[data-cy="username"]').type("jrendon")
        cy.get('[data-cy="email"]').type("prueba@gmail.com")
        cy.get('[data-cy="firstPassword"]').type("jrendon")
        cy.get('[data-cy="secondPassword"]').type("jrendon")
        cy.get('[data-cy="submit"]').click()
        cy.contains('Registration saved! Please check your email for confirmation').should('be.visible');
    })

})