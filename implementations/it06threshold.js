import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 5,
  iterations: 20,
  thresholds: {
    // 95th percentile of http_req_duration must be < 200ms
    http_req_duration: ['p(95)<200'],
    // The rate of failed HTTP requests must be < 1%
    http_req_failed: ['rate<0.01'],
  },
};

export default function () {
  http.get('https://test.k6.io');
  sleep(1);
}

