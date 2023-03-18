///<reference types="cypress"/>

context("Home", ()=>{
  beforeEach(()=>{
      cy.visit("http://localhost:3000")
  })
  it("should have home text",()=>{
      cy.get("p").contains("HOME")
  })
})
