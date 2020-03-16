Feature: Go to the Registration Page

   Display Form

   Scenario: Registration Page
    Given I am on the registration page
    # When I add "kshah" in the firstname field
    When I enter "firstname" with "kshah"
    # And I fill "lastname" field with "shah"
    # And I fill "email" field with "kshah@gmail.com"
    # And I click on the button "registration"
    Then I should be redirected on "home"
