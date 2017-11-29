"use strict";
const login = require("../pages/loginPage");
const { When, Then } = require("cucumber");

  Then(/^I navigate to test page page$/, function() {
    return browser.get("http://the-internet.herokuapp.com/login");
  });

  Then(/^I enter username$/, function() {
    return login.usernameForm.sendKeys("tomsmith");
  });

  Then(/^I enter password$/, function() {
    return login.passwordForm.sendKeys("SuperSecretPassword");
  });

  Then(/^I submit login$/, function() {
    return login.loginButton.click();
  });
