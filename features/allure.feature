Feature: To search allure reports in google

    @AllureScenario
    Scenario: Allure Reports Google
      Given I am on google page
      When I type "allure reports"
      Then I click search button
      Then I clear search textbox
      And I navigate to www.walla.co.il
