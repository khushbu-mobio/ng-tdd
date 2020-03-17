Feature: Go to the Registration Page

   Display Form

Scenario: User Should be able to registration with valid input
  Given I am on the home page
  When I click on register button
  And Open Browser with Registration page 
  And After Entering valid First Name, Last Name & Email, click on 'Registration' button
  Then Redirect to home page