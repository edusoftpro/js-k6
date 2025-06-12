// K6 Spike Test Exercise Using Stages

// Task Definition
// The purpose of this exercise is to create and execute a spike test using the stages feature of k6. Participants will learn how to configure stages to simulate a sudden, significant increase in virtual users to assess the system's response to peak load.

// Steps
// 1. Script Creation:
// - Write a k6 script that sends HTTP requests to a specified target endpoint.
// - Define the stages option to create a load profile with a sudden spike in virtual users (VUs).
// 2. Include at least three distinct stages:
// - A warm-up stage with a low number of VUs for a short duration.
// - A spike stage with a significantly higher number of VUs for a brief period to simulate the spike.
// - A recovery stage to observe how the system handles the drop back to a lower load.
// 3. Stage Configuration:
// - For the spike stage, ensure the number of VUs is several times greater than the warm-up stage VUs, and the duration is short (e.g., 10-30 seconds).
// - Configure the duration and target VUs for each stage based on the desired spike intensity and duration.
// 4. Execution:
// - Execute the k6 script from the command line.
// - Monitor the test output and the ramp-up and ramp-down of VUs as per the configured stages.
// 5. Verification:
// - Review the k6 output to verify that the spike in VUs occurred as planned.
// - Analyze the metrics (e.g., response times, error rates) during the spike to assess the system's performance under load.
// - Check for any errors or anomalies that occurred during the spike phase.
// 6. Analysis:
// - Observe how the system recovers after the spike stage ends and the load returns to a lower level.
// - Consider the insights gained about the system's handling of sudden load changes.

