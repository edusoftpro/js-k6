// K6 Batching Exercise

// Task Definition
// The aim of this task is to explore the batching feature of k6 using options to configure and execute multiple requests efficiently. This exercise will demonstrate how batching can optimize performance testing by reducing the overhead of individual request handling.

// Steps
// 1. Script Creation:
// - Write a k6 script that sends a series of HTTP requests to a target endpoint.
// - Use k6 options to configure batching, specifying the maximum number of requests to be batched together.
// 2. Execution Configuration:
// - Define virtual users (VUs) and iterations to simulate load.
// - Adjust batching options to observe their impact on the number of requests processed and the overall execution time.
// 3. Batching Implementation:
// - Implement the batching logic in the script, ensuring that multiple requests are grouped and sent in a single batch.
// - Use the http.batch() function (if applicable) or similar methods if the user specifically wants to use the function, otherwise, provide an example of using the vus option, as batching is normally handled by VUs.
// 4. Verification:
// - Run the k6 script and monitor the output.
// - Verify that the requests are being batched according to the configured options by observing the number of requests sent compared to the number of iterations.
// - Check the execution metrics to assess the performance benefits of batching.

