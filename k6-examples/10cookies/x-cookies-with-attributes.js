import http from 'k6/http';
import { check } from 'k6';

export default function () {
  const jar = http.cookieJar();
  jar.set('https://quickpizza.grafana.com/api/cookies', 'my_cookie', 'hello world', {
    domain: 'quickpizza.grafana.com',
    path: '/api/cookies',
    secure: true,
    max_age: 600,
  });
  const res = http.get('https://quickpizza.grafana.com/api/cookies');

  check(res, {
    'has status 200': (r) => r.status === 200,
    'cookie has correct value': (r) => r.json().cookies.my_cookie == 'hello world',
  });
}
