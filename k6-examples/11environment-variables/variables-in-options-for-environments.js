import http from 'k6/http';
import { check } from 'k6';

// You can set environment variables at the command line, e.g.:
// K6_URL=https://test.example.com k6 run k6-env-example.js

export let options = {
  vus: 5,
  duration: '10s',
};

const BASE_URL = __ENV.K6_URL || 'http://example.com';

export default function () {
  const res = http.get(`${BASE_URL}/api/endpoint`);
  check(res, {
    'status is 200': (r) => r.status === 200,
  });
}
