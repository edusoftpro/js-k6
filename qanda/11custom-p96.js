// This script measures the response time of requests to httpbin and sets a threshold
// that the 96th percentile of response times must be under 200 milliseconds.
// The Trend metric is used to track the response times, and the threshold is defined
// in the options object. If the threshold is breached, the test will abort immediately
// due to the abortOnFail option being set to true.
// This allows for quick identification of performance issues during testing.

import http from 'k6/http';
import { Trend } from 'k6/metrics';

const respTime = new Trend('custom_response_time_ms', true); // true enables percentiles

export const options = {
  vus: 3, // Number of virtual users
  duration: '1m', // Duration of the test
  thresholds: {
    custom_response_time_ms: [{ threshold: 'p(96) < 200', abortOnFail: true }], // 96th percentile under 200ms
  },
};

export default function () {
  const res = http.get('https://httpbin.test.k6.io/get');
  respTime.add(res.timings.duration);
}
