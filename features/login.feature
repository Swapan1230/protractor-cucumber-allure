Feature: To make test login

    @TestLogin
    Scenario: Login to test page
      Given I navigate to test page page
      When I enter username 
      And  I enter password
      And  I submit login
