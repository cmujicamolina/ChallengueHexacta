@SmokeTest
Feature:  User login Hexacta

  @SearchHexacta
  Scenario Outline: Search login Hexacta

    Given the customer click on the button search

    Examples:
      | user          | password     |
      | standard_user | secret_sauce |