"use strict";

function login() {
  this.usernameForm = $("input#username");
  this.passwordForm = $("input#password");
  this.loginButton = $("button.radius");
}

module.exports = new login();
