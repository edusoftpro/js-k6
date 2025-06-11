import http from 'k6/http';
import { check } from 'k6';

export default function () {
  const res = http.post('https://quickpizza.grafana.com/api/cookies?my_cookie=hello%20world', {
    redirects: 0,
  });
  const jar = http.cookieJar();
  const cookies = jar.cookiesForURL('https://quickpizza.grafana.com/api/cookies');
  check(res, {
    'has cookie \'my_cookie\'': () => cookies.my_cookie.length > 0,
    'cookie has correct value': () => cookies.my_cookie[0] === 'hello world',
  });
}
