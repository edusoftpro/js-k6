// K6 Cookie Feature Exercise

// Task Definition
// The purpose of this exercise is to explore how k6 handles HTTP cookies using cookie and cookieJar. Participants will learn to set, retrieve, and clear cookies during a test script execution.

// Steps
// 1. Script Creation:
// - Write a k6 script that sends an HTTP request to a target endpoint.
// - Before sending the request, use cookieJar to set a custom cookie.
// - Send the HTTP request and log the response headers, specifically checking for the cookie in the request headers if available.
// 2. Cookie Retrieval:
// - After the request, use cookieJar to retrieve the cookie that was previously set.
// - Log the retrieved cookie to the console to verify its value and properties.
// 3. Cookie Clearing:
// - Use cookieJar to clear all cookies.
// - Send another HTTP request and verify that the cookie is no longer being sent in the request headers or stored in the cookie jar.
// 4. Verification:
// - Run the k6 script and monitor the console output.
// - Verify that the custom cookie was successfully set, retrieved, and cleared.
// - Check the HTTP request headers to ensure the cookie was sent and later removed as expected.

