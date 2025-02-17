import { AppFrontend } from 'test/e2e/pageobjects/app-frontend';

const appFrontend = new AppFrontend();

describe('Prefill', () => {
  it('Check Prefill from register and readonly input', () => {
    const userFullName =
      (Cypress.env('testUserName') || '').includes('external') && Cypress.env('environment') !== 'local'
        ? Cypress.env('externalUserFullName')
        : Cypress.env('userFullName');
    cy.goto('changename');
    cy.get(appFrontend.changeOfName.currentName).then((name) => {
      cy.wrap(name).should('be.visible').and('have.value', userFullName).and('have.attr', 'readonly');
    });
  });
});
