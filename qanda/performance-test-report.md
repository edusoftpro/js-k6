# Performance Test Report

**Author(s):** Adrian Bala  
**Date:** 12 June 2025  
**Code Version:** k6 1.0.0 - Random Walk  
**Tested Domain:** [https://example.com/](https://example.com/)

---

## Test Scenario

- **Test Duration:** 90 seconds in total with Load Test characteristic: 15s Ramp Up + 60s load test + 15s Ramp Down
- **Request Pattern:** Random delay up to 10 seconds between requests  
- **Action:** User issues GET requests to the homepage (`/`) of `https://example.com/`.

---

## Service Level Indicators (SLIs) & Thresholds

| SLI Description                           | Threshold/Criterion               |
| ----------------------------------------- | --------------------------------- |
| Error Rate                                | < 3% of requests return an error  |
| Response Time (95th percentile)           | < 150ms                           |
| Response Time (99th percentile)           | < 200ms                           |

---

## Test Results Summary

| Metric                        | Value/Result         | Threshold Met?      |
|-------------------------------|----------------------|---------------------|
| Total Requests                | 1291 ~ 13.49/s AVG   |                     |
| Error Rate                    | 3.64% 47 out of 1291 |         No          |
| 95th Percentile Response Time | 169.51ms AVG         |         No          |
| 99th Percentile Response Time | 169.51ms AVG         |         Yes         |
| Average Response Time         | 175.91ms AVG         |                     |
| Minimum Response Time         | 113.76ms AVG         |                     |
| Maximum Response Time         | 325.55ms AVG         |                     |

---

## Detailed Observations

- **Error Rate:**  
  _(Describe error occurrences, patterns, or anomalies. Include error codes if available.)_

- **Response Times:**  
  _(Provide insights on response time distribution, spikes, or bottlenecks.)_

- **Threshold Compliance:**  
  _(Summarize which thresholds were met and which were not, with explanations if any threshold failed.)_

---

## Recommendations
1. Optimize server responses using caches or CDN.
2. Review error logs and refactor the site respectively.
3. Scale the resources vertically to improve processing.
