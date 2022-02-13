/// <reference types="cypress" />
import * as config from "../3-fixtures/config"
import { loginElements } from "../4-elements/loginElement"
// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('validate Login', () => {
  context("login as a valid user", () => {
    before('given i access timely page', () => {
      cy.visit(config.URL)
    })

    it('when fill required fields with valid login user', () => {
      cy.get(loginElements.inputEmail()).type("sda");
      cy.get(loginElements.inputPassword()).type("sda");

    })

    it('and subimit login', () => {
      cy.get(loginElements.buttonLogin()).click();
    })

    it('then redirect login', () => {
      expect("").to.be.empty
    })

  })
  context("login as an invalid user", () => {
    before('given i access timely page', () => {
      cy.visit(config.URL)
    })

    it('when fill required fields with valid login user', () => {
      cy.get(loginElements.inputEmail()).type("sda");
      cy.get(loginElements.inputPassword()).type("sda");

    })

    it('and subimit login', () => {
      cy.get(loginElements.buttonLogin()).click();
    })

    it('then redirect login', () => {
      expect("").to.be.empty
    })

  })
})