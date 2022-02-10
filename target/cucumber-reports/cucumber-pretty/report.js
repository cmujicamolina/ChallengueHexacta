$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginUser.feature");
formatter.feature({
  "line": 2,
  "name": "User login",
  "description": "",
  "id": "user-login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Valid customer login",
  "description": "",
  "id": "user-login;valid-customer-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@ValidLogin"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "the customer is on the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "enter user \u003cuser\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "enter password \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the customer click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "page shows product title",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "user-login;valid-customer-login;",
  "rows": [
    {
      "cells": [
        "user",
        "password"
      ],
      "line": 14,
      "id": "user-login;valid-customer-login;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 15,
      "id": "user-login;valid-customer-login;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Valid customer login",
  "description": "",
  "id": "user-login;valid-customer-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@ValidLogin"
    },
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "the customer is on the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "enter user standard_user",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "enter password secret_sauce",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the customer click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "page shows product title",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginUserSteps.elClienteSeEncuentraEnLaPaginaDeBusqueda()"
});
formatter.result({
  "duration": 3834641800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 11
    }
  ],
  "location": "LoginUserSteps.enterUserUser(String)"
});
formatter.result({
  "duration": 223792100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 15
    }
  ],
  "location": "LoginUserSteps.enterPasswordPassword(String)"
});
formatter.result({
  "duration": 178137500,
  "status": "passed"
});
formatter.match({
  "location": "LoginUserSteps.theCustomerClickTheLoginButton()"
});
formatter.result({
  "duration": 226539600,
  "status": "passed"
});
formatter.match({
  "location": "LoginUserSteps.pageShowsProductTitle()"
});
formatter.result({
  "duration": 86204300,
  "status": "passed"
});
formatter.after({
  "duration": 698597500,
  "status": "passed"
});
formatter.after({
  "duration": 52800,
  "status": "passed"
});
formatter.after({
  "duration": 37300,
  "status": "passed"
});
formatter.after({
  "duration": 107000,
  "status": "passed"
});
});