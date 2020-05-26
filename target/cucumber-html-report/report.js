$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("MyApplication.feature");
formatter.feature({
  "line": 1,
  "name": "Test Facebook smoke scenario",
  "description": "",
  "id": "test-facebook-smoke-scenario",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open chrome and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter valid \"\u003cUname\u003e\" and valis \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user should be login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Application should be closed",
  "keyword": "And "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "Uname",
        "Password"
      ],
      "line": 10,
      "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "sohel@gmail.com",
        "Selenium@123"
      ],
      "line": 11,
      "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "sohel2@gmail.com",
        "Selenium@123"
      ],
      "line": 12,
      "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials;;3"
    },
    {
      "cells": [
        "sohel3@gmail.com",
        "Selenium@123"
      ],
      "line": 13,
      "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open chrome and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter valid \"sohel@gmail.com\" and valis \"Selenium@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user should be login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Application should be closed",
  "keyword": "And "
});
formatter.match({
  "location": "SmokeTest.open_chrome_and_start_application()"
});
formatter.result({
  "duration": 12459808500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sohel@gmail.com",
      "offset": 15
    },
    {
      "val": "Selenium@123",
      "offset": 43
    }
  ],
  "location": "SmokeTest.i_enter_valid_and_valis(String,String)"
});
formatter.result({
  "duration": 241481400,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.user_should_be_login_successfully()"
});
formatter.result({
  "duration": 116819300,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.application_should_be_closed()"
});
formatter.result({
  "duration": 4095253200,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open chrome and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter valid \"sohel2@gmail.com\" and valis \"Selenium@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user should be login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Application should be closed",
  "keyword": "And "
});
formatter.match({
  "location": "SmokeTest.open_chrome_and_start_application()"
});
formatter.result({
  "duration": 10881014300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sohel2@gmail.com",
      "offset": 15
    },
    {
      "val": "Selenium@123",
      "offset": 44
    }
  ],
  "location": "SmokeTest.i_enter_valid_and_valis(String,String)"
});
formatter.result({
  "duration": 223006500,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.user_should_be_login_successfully()"
});
formatter.result({
  "duration": 75884900,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.application_should_be_closed()"
});
formatter.result({
  "duration": 4089426700,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open chrome and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter valid \"sohel3@gmail.com\" and valis \"Selenium@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user should be login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Application should be closed",
  "keyword": "And "
});
formatter.match({
  "location": "SmokeTest.open_chrome_and_start_application()"
});
formatter.result({
  "duration": 10696223100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sohel3@gmail.com",
      "offset": 15
    },
    {
      "val": "Selenium@123",
      "offset": 44
    }
  ],
  "location": "SmokeTest.i_enter_valid_and_valis(String,String)"
});
formatter.result({
  "duration": 248778100,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.user_should_be_login_successfully()"
});
formatter.result({
  "duration": 94285200,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.application_should_be_closed()"
});
formatter.result({
  "duration": 4099678900,
  "status": "passed"
});
});