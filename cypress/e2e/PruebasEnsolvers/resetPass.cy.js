beforeEach(() => {
    cy.visit("https://qa-challenge.ensolvers.com/account/reset/request")
})

it("Iniciar sesion", () => {
    cy.get('[data-cy="emailResetPassword"]').type("prueba@gmail.com")
    cy.get('[data-cy="submit"]').click()
    cy.contains('Check your emails for details on how to reset your password').should('be.visible');

})