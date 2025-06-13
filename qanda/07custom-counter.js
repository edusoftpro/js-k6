import http from 'k6/http';
import { Counter, Gauge, Rate, Trend } from 'k6/metrics';
import { check, sleep } from 'k6';

const myCounter = new Counter('cumulative_counter_of_all_requests');
const responseSize = new Gauge('all_responses_size_in_bytes');
const successRate = new Rate('successful_rate_of_all_requests');
const responseTime = new Trend('cumulative_response_time_of_all_requests_in_ms');


export const options = {
  vu: 3, // Number of virtual users
  duration: '3s', // Duration of the test
};

export default function () {
  let res = http.get('https://httpbin.test.k6.io/get');

  myCounter.add(1); // Increment the counter for each request
  responseSize.add(res.body.length); // Record response size in bytes
  successRate.add(check(res, { 'status is 200': (r) => r.status === 200 }));
  responseTime.add(res.timings.duration); // Record response time in ms
  

  let randomSleep = Math.random() * 3;
  console.log(`Sleeping for ${randomSleep.toFixed(2)} seconds`);
  sleep(randomSleep);
}
