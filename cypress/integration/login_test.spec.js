context("Verify that the page loaded successfully", () => {
    it("Should open app on https://www.caseative.com/", () => {
      cy.visit("https://www.caseative.com/");
    });
    it('Verify that [Log in] button is visible for user', () => {
        cy.get('#customer_login_link').should('be.visible');
    })
    it('Click [Log in] button', () => {
        cy.get('#customer_login_link').click();
    })
    it('Verify that the user was redirected to the login form ( check url )', () => {
        cy.url().should('eq', 'https://www.caseative.com/account/login');
    })
    it('Verify that the email/password input is visible', () =>{
        cy.get('#customer_email').should('be.visible');
        cy.get('#customer_password').should('be.visible');
    })
    it('Verify that [Log in] button is visible for user', () => {
        cy.get('#customer_login').should('be.visible');
    })
    it('Clear inputs', () => {
        cy.get('#customer_email').clear();
        cy.get('#customer_password').clear();
        cy.get('#Email').clear();
    })
    //Enter correct email and password for successful log in to your account(positive)
    //Enter not valid email/password or both(negative) —
    // Error message: 'Email or password do not match any existing accounts' 
    //Leave password/email or both empty (negative) — 
    //Error message: 'Email or password are blank. Please fill in correct credentials'
    it('Enter the valid credentials to log in to the account', () => {
        cy.get('#customer_email').type('thomasshelbytest@gmail.com');
        cy.get('#customer_password').type('Qwerty11111@')
        cy.get('input.btn').click({ multiple: true }).should('Clicked');
    })
    it('Verify that the user was redirected to the login form ( check url )', () => {
        cy.url().should('eq', 'https://www.caseative.com/account');
    })
    it('Check if the user"s name is “Thomas” at the top right of the window' , () => {
        cy.get('span').should('eq', `Thomas`);
    })
    it('Verify that [Log out] button is visible for user', () => {
        cy.get('#customer_logout_link').should('be.visible');
    })
    it('Click [Log out] button', () => {
        cy.get('#customer_logout_link').click();
    })
    it('Verify that the user was redirected to the main page( check url )', () => {
        cy.url().should('eq', 'https://www.caseative.com/');
    })
  });
   
