import http from 'k6/http';
import { check } from 'k6';

export default function () {
  const jar = http.cookieJar();
  const BASE_URL = 'https://quickpizza.grafana.com/api/cookies';

  http.get(BASE_URL, {
    cookies: {
      cookie1: 'Hi',
      cookie2: 'Hello',
    },
  });

  jar.set(BASE_URL, 'cookie1', 'Hi');
  jar.set(BASE_URL, 'cookie2', 'Hello');

  const res1 = http.get(BASE_URL, { jar });
  check(res1, {
    'res1 has status 200': (r) => r.status === 200,
    'res1 has cookie \'cookie1\'': (r) => r.json().cookies.cookie1 != null,
    'res1 cookie has correct value1': (r) => r.json().cookies.cookie1 == 'Hi',
    'res1 has cookie \'cookie2\'': (r) => r.json().cookies.cookie2 != null,
    'res1 cookie has correct value2': (r) =>
      r.json().cookies.cookie2 == 'Hello',
  });

  // Overwrite cookie1
  jar.set(BASE_URL, 'cookie1', 'Howdy');
  const res2 = http.get(BASE_URL, { jar });
  check(res2, {
    'res2 has status 200': (r) => r.status === 200,
    'res2 has cookie \'cookie1\'': (r) => r.json().cookies.cookie1 != null,
    'res2 cookie has correct value1': (r) =>
      r.json().cookies.cookie1 == 'Howdy',
    'res2 has cookie \'cookie2\'': (r) => r.json().cookies.cookie2 != null,
    'res2 cookie has correct value2': (r) =>
      r.json().cookies.cookie2 == 'Hello',
  });

  // Delete cookie1
  jar.delete(BASE_URL, 'cookie1');

  console.log(JSON.stringify(jar));

  const res3 = http.get(BASE_URL, { jar });
  check(res3, {
    'res3 has status 200': (r) => r.status === 200,
    'res3 hasn\'t cookie \'cookie1\'': (r) =>
      r.json().cookies.cookie1 == null,
    'res3 has cookie \'cookie2\'': (r) => r.json().cookies.cookie2 != null,
    'res3 cookie has correct value2': (r) =>
      r.json().cookies.cookie2 == 'Hello',
  });
}
