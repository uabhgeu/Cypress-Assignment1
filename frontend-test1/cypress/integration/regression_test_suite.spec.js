/// <reference types="cypress" />

// This is a first test suite
describe('Regression test suite', function(){
    // This is a test case
    it('Perform valid login tc', function(){
        cy.visit('http://localhost:3000')
    })
})