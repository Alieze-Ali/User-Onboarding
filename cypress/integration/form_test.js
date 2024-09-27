// First test should be on your project browser window
describe('Open Page', function() {
    it('Opens main page of the project', function() {
        cy.visit('http://localhost:3000/')
    });
});

// Get the Name input and type a name in it.
describe('Name Input', function () {
       it('Gets Name input and type name in it', function () {
        cy.get(':nth-child(1) > input').type('Alieze');
    })
})

// Use an assertion to check if the text inputted contains the name you provided (Hint: use the .should assertion)
describe('Text Input', function () {
    it('Asserts that the text input contains name provided', function() {
        cy.get(':nth-child(1) > input').should('have.value', 'Alieze')  
    })
})

// Get the Email input and type an email address in it
describe('Email Input', function(){
    it('Gets the Email input and type an email address in it', function() {
        cy.get('form > :nth-child(2) > :nth-child(3)').type('alieze_ali@hotmail.com')
    })
})

// Get the password input and type a password in it
describe('Password Text', function() {
    it('Gets the password input and type a password in it', function() {
        cy.get(':nth-child(5) > input').type('123456@1!')
    })

})

 // Set up a test that will check to see if a user can check the terms of service box
 describe('Terms of Service', function() {
     it('Checks to see if a user can check the terms of service box', function() {
        cy.get(':nth-child(7) > input').click()
     })
 })
 
 // Check to see if a user can submit the form data
 describe('User Submit', function() {
     it('Checks to see if a user can submit the form data', function() {
        cy.get('button').click()
     })
 })
 
 // Check for form validation if an input is left empty
 describe('Form Validation', function() {
     it('Checks for form validation if an input is left empty', function() {
         cy.get('input').should('have.attr', 'name', 'email', 'password', 'terms')
     })
 })