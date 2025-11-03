describe('Formulario de contacto', () => {
  it('No debería enviar si los campos están vacíos', () => {
    cy.visit('http://localhost:5173');
    cy.get('button[type="submit"]').click();
    cy.contains('Formulario enviado').should('not.exist');
  });

  it('Debería mostrar mensaje si los campos están completos', () => {
    cy.get('input[name="name"]').type('Erika');
    cy.get('input[name="email"]').type('erika@test.com');
    cy.get('button[type="submit"]').click();
    cy.contains('Formulario enviado').should('exist');
  });
});
