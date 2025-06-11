import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  vus: 10,
  duration: '30s',
  cloud: {
    projectID: 12345,
    name: 'script.js',
  },
};

export default function() {
  let res = http.get('https://quickpizza.grafana.com');
  check(res, { 'status is 200': (res) => res.status === 200 });
  sleep(1);
}
