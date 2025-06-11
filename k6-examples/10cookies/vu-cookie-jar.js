import http from 'k6/http';

export default function () {
  const jar = http.cookieJar();
  jar.set('https://quickpizza.grafana.com/api/cookies', 'my_cookie', 'hello world');
  http.get('https://quickpizza.grafana.com/api/cookies');

  console.log('my_cookie: `${my_cookie}`');
}
