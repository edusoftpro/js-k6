import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 15,
  duration: '5s',
  thresholds: {
    // the rate of successful checks should be higher than 90%
    checks: ['rate>0.9'],
  },
};

export default function () {
  const res = http.get('https://quickpizza.grafana.com/api/status/500');

  check(res, {
    'status is 500': (r) => r.status == 200,
  });

  sleep(1);
}
