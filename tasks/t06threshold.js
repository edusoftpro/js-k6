// K6 Thresholds Feature Exercise

// Task Definition
// The purpose of this exercise is to define and utilize thresholds in k6 to establish pass/fail criteria for performance tests. Participants will configure thresholds based on request durations and error rates, and then execute the script to evaluate the test outcome against these thresholds.

// Steps
// 1. Script Creation:
// - Write a k6 script that sends HTTP requests to a target endpoint.
// - Define thresholds using the options object to specify acceptable values for metrics such as HTTP request durations (e.g., p95, avg) and error rates.
// 2. Threshold Configuration:
// - Establish pass/fail criteria for performance metrics. For instance:
// - http_req_duration p95 must be less than 200ms.
// - http_req_failed rate must be less than 1%.
// - Ensure thresholds are defined using the correct k6 options syntax within the script.
// 3. Execution:
// - Execute the k6 script from the command line.
// - Observe the test output and examine the threshold summary to determine if the defined criteria were met.
// 4. Verification:
// - Review the k6 output to check if any thresholds were exceeded.
// - Verify that the test result (pass/fail) aligns with the defined thresholds and the actual performance metrics.

