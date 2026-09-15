const {
  Given,
  When,
  Then,
  After,
  setDefaultTimeout
} = require("@cucumber/cucumber");

const { request, expect } = require("@playwright/test");

// Cucumber step timeout = 30 seconds
setDefaultTimeout(30000);

let apiContext;
let response;
let responseBody;

Given("create post API is available", async () => {
  apiContext = await request.newContext({
    baseURL: "https://jsonplaceholder.typicode.com",
    timeout: 15000
  });
});

When("user sends create post request with valid details", async () => {
  console.log("Sending POST request...");

  response = await apiContext.post("/posts", {
    data: {
      title: "Jaswani API Test",
      body: "Learning API automation",
      userId: 1
    },
    timeout: 15000
  });

  console.log("POST request completed");

  responseBody = await response.json();
});

Then("response status should be 201", async () => {
  expect(response.status()).toBe(201);
});

Then(
  "response should contain post title {string}",
  async (expectedTitle) => {
    expect(responseBody.title).toBe(expectedTitle);
  }
);

After(async () => {
  if (apiContext) {
    await apiContext.dispose();
  }
});

