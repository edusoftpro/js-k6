import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '10s', target: 20 },
    { duration: '1m20s', target: 10 },
    { duration: '5s', target: 0 },
  ],
};

export default function () {
  const res = http.get('https://quickpizza.grafana.com/');
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}