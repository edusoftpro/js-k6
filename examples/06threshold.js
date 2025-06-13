import http from 'k6/http';

export const options = {
  thresholds: {
    http_req_duration: ['p(95)<500'], // 95% of requests must be below 500ms
    http_req_failed: ['rate<0.01'], // less than 1% of requests may end up with an error
  },
};

export default function () {
  http.get('https://test.k6.io');
}
