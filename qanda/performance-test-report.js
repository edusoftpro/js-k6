// Task: Generate Performance Tests Report

// Code version: k6 1.0.0 - Random Walk, i.e.: Load Test with Random Delays
// Domain: https://example.com/

// Scenario(s): 90-second load test with a random delay up to 10 seconds.
// 1. User GETs the homepage of https://example.com/
// 2. Use thresholds to codify and verify the(ir) SLIs, using the following expectations:
// - Less than 3% of requests return an error.
// - 95% of requests have a response time below 150ms.
// - 99% of requests have a response time below 200ms.

import http from 'k6/http';
import { sleep, check } from 'k6';
import { Trend, Rate } from 'k6/metrics';
import { randomIntBetween } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';

// Custom metrics for SLI evaluation
const errorRate = new Rate('errors');
const responseTime95 = new Trend('response_time_95');
const responseTime99 = new Trend('response_time_99');

export const options = {
  vus: 1, // Number of virtual users (adjust as needed)
  stages: [
    // Load profile of performance tests in stages
    { duration: '15s', target: 100 },
    { duration: '1m', target: 100 },
    { duration: '15s', target: 0 },
  ],
  thresholds: {
    // Less than 3% of requests return an error
    errors: ['rate<0.03'],
    // 95% of requests have a response time below 150ms and 99% of requests have a response time below 200ms
    http_req_duration: ['p(95)<150', 'p(99)<200'],
  },
};

export default function () {
  let randomSleepBetween = randomIntBetween(0, 5); // Random sleep between 0 and 5 seconds
  console.log(`Sleeping for ${randomSleepBetween} seconds`);
  sleep(randomSleepBetween);

  // GET homepage
  const res = http.get('https://example.com/');

  // Track error rate
  const isOK = check(res, {
    'status is 2xx or 3xx': (r) => 200 <= r.status && r.status < 400,
  });
  errorRate.add(!isOK);

  // Add response times for custom metrics
  responseTime95.add(res.timings.duration);
  responseTime99.add(res.timings.duration);

  // Another way of getting random delay up to 5 seconds (0-5s)
  let rndSleep = Math.random() * 5;
  console.log(`Sleeping for additional ${rndSleep.toFixed(2)} seconds`);
  sleep(rndSleep);
}
