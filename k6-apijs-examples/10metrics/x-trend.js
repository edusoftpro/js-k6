import { Trend } from 'k6/metrics';
import { sleep } from 'k6';
import http from 'k6/http';

const serverWaitingTimeOnLogin = new Trend('serverWaitingTimeOnLogin', true);

export const options = {
  vus: 1,
  duration: '1m',
  thresholds: {
    serverWaitingTimeOnLogin: ['p(95) < 200'],
  },
};

export default function () {
  const resp = http.post('https://quickpizza.grafana.com/api/users/token/login', {
    username: 'default',
    password: 'supersecure',
  });

  serverWaitingTimeOnLogin.add(resp.timings.waiting);
  sleep(1);
}
