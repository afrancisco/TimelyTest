/// <reference types="cypress" />
import * as config from "../3-fixtures/config"
import { loginPage } from "../2-pages/loginPage"
import { dashPage } from "../2-pages/dashPage"
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
      loginPage.fillLoginFields(config.USER, config.PASSWORD)
    })

    it('and subimit login', () => {
      loginPage.submitLogin()
      cy.wait(5000)

    })

    it('then redirect login', () => {
      dashPage.checkPageLoad()
    })

  })
  context("login as an invalid user", () => {
    before('given i access timely page', () => {
      cy.visit(config.URL)
    })

    it('when fill required fields with valid login user', () => {
      loginPage.fillLoginFields(config.PASSWORD, config.PASSWORD)

    })

    it('and subimit login', () => {
      loginPage.submitLogin()
    })

    it('then redirect login', () => {
     loginPage.validateRequiredFields("Email is required")
    })

  })
})