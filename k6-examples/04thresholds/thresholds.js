import http from 'k6/http';

export const options = {
  thresholds: {
    http_req_failed: ['rate<0.01'], // http errors should be less than 1%
    http_req_duration: ['p(95)<100'], // 95% of requests should be below 100ms
    http_req_connecting: ['p(99)<120'], // 99% of connection times should be below 120ms
  },
};

export default function () {
  http.get('https://quickpizza.grafana.com');
}
