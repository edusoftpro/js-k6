import http from 'k6/http';
import { check } from 'k6';

export default function () {
  const jar = http.cookieJar();
  jar.set('https://quickpizza.grafana.com/api/cookies', 'my_cookie', 'hello world');

  const cookies = {
    my_cookie: {
      value: 'hello world 2',
      replace: true,
    },
  };

  const res = http.get('https://quickpizza.grafana.com/api/cookies', {
    cookies,
  });

  check(res.json(), {
    'cookie has correct value': (b) => b.cookies.my_cookie == 'hello world 2',
  });
}
