// K6 Tag Feature Exercise

// Task Definition
// The purpose of this exercise is to utilize the tag feature in k6 to categorize metrics and request data, and then validate the tagging using JSON output. Participants will learn how to tag requests and data points, and subsequently verify the tag implementation by examining the output in JSON format.

// Steps
// 1. Script Creation:
// - Write a k6 script that sends multiple HTTP requests to a target endpoint.
// - Apply tags to each request or specific data points within the script. Use key-value pairs for tags (e.g., { stage: "production", service: "api" }).
// 2. Execution:
// - Execute the k6 script from the command line.
// - Save the output in JSON format using the --out json= flag.
// 3. JSON Verification:
// - Open the generated JSON output file.
// - Inspect the structure to find the tagged data.
// - Verify that the tags are correctly associated with the corresponding metrics and requests in the JSON file. Check for the key-value pairs that were defined in the script.
// 4. Analysis:
// - Analyze the JSON output to understand how tags are used to categorize and filter metrics.
// - Observe how the presence of tags can aid in analyzing specific subsets of test data.

