
Feature: Create Post API

  Scenario: Create post with valid details

    Given create post API is available
    When user sends create post request with valid details
    Then response status should be 201
    And response should contain post title "Jaswani API Test"

