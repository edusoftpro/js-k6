import http from 'k6/http';
import { check } from 'k6';

export default function () {
  const jar = new http.CookieJar();

  // Add cookie to local jar
  const cookieOptions = {
    domain: 'quickpizza.grafana.com',
    path: '/api/cookies',
    secure: true,
    max_age: 600,
  };
  jar.set('https://quickpizza.grafana.com/api/cookies', 'my_cookie', 'hello world', cookieOptions);

  // Override per-VU jar with local jar for the following request
  const res = http.get('https://quickpizza.grafana.com/api/cookies', { jar });
  check(res, {
    'has status 200': (r) => r.status === 200,
    'cookie has correct value': (r) => r.json().cookies.my_cookie == 'hello world',
  });
}
