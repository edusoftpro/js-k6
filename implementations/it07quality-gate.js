import http from "k6/http";
import { sleep } from "k6";

export const options = {
  vus: 10,
  iterations: 100,
  thresholds: {
    // This threshold is intentionally set very low to force failure and trigger abortOnFail
    http_req_duration: [
      {
        threshold: "p(95)<150", // 95th percentile of request duration must be less than 150ms
        abortOnFail: true,
        delayAbortEval: "10s", // Optional: lets the test run for at least 10s before aborting
      },
    ],
    // You can also add a failed request rate threshold for demonstration
    http_req_failed: [
      {
        threshold: "rate<0.00", // No failed requests allowed add for demonstration
        abortOnFail: true,
      },
    ],
  },
};

export default function () {
  http.get("https://test.k6.io");
  sleep(0.2);
}
