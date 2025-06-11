import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  thresholds: {
    // 90% of requests must finish within 400ms, 95% within 800, and 99.9% within 2s.
    http_req_duration: ['p(90) < 400', 'p(95) < 80', 'p(99.9) < 200'],
  },
};

export default function () {
  http.get('https://quickpizza.grafana.com');
  sleep(1);
}
