const { test, expect } = require('@playwright/test');

test('GET API test', async ({ request }) => {
    const response = await request.get(
        'https://jsonplaceholder.typicode.com/posts/1'
    );

    console.log('Status Code:', response.status());

    expect(response.status()).toBe(200);
});

// API automation practicesssssssssssssssssss
// Working on create post feature