import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 25,
  duration: '7s',
  thresholds: {
    'checks{myTag:hola}': ['rate>0.9'],
  },
};

export default function () {
  let res;

  res = http.get('https://quickpizza.grafana.com/api/status/500');
  check(res, {
    'status is 500': (r) => r.status == 500,
  });

  res = http.get('https://quickpizza.grafana.com/api/status/200');
  check(
    res,
    {
      'status is 200': (r) => r.status == 201,
    },
    { myTag: 'hola' }
  );

  sleep(1);
}
