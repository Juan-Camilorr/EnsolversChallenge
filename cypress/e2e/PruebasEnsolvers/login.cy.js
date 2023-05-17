describe("Test suite - conjunto de pruebas login", () => {

    beforeEach(() => {
        cy.visit("https://qa-challenge.ensolvers.com/login")
    })

    it("Iniciar sesion", () => {
        cy.get('[data-cy="username"]').type("prueba")
        cy.get('[data-cy="password"]').type("prueba")
        cy.get('[data-cy="submit"]').type("prueba")

    })

    it("Remember Check", () => {
        cy.get('[data-cy="username"]').type("prueba")
        cy.get('[data-cy="password"]').type("prueba")
        cy.get('#rememberMe').click();
        cy.get('[data-cy="submit"]').type("prueba")

    })
})