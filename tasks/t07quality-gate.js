// K6 Quality Gate (Thresholds) Exercise with AbortOnFail

// Task Definition
// The purpose of this exercise is to define and utilize thresholds in k6 with the abortOnFail: true option to immediately halt the test execution when a threshold is breached. Participants will configure thresholds and observe the test termination upon failure.

// Steps
// 1. Script Creation:
// - Write a k6 script that sends HTTP requests to a specified URL.
// - Define thresholds for metrics such as http_req_duration or http_req_failed rate.
// - Set the abortOnFail: true property within the thresholds configuration in the options object.
// 2. Threshold Configuration:
// - Establish a simple threshold that is likely to be breached, for example, a low maximum duration for HTTP requests (e.g., http_req_duration p95 < 1ms).
// - Ensure the abortOnFail: true option is included in the threshold definition.
// 3. Execution:
// - Execute the k6 script from the command line.
// - Observe the test output and note when and if the test is aborted due to a threshold failure.
// 4. Verification:
// - Review the k6 output to confirm that the test was indeed aborted when the specified threshold was exceeded.
// - Verify that the summary output reflects the abrupt termination due to abortOnFail: true.

