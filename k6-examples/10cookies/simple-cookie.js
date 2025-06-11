import http from 'k6/http';

export default function () {
  http.get('https://quickpizza.grafana.com/api/cookies', {
    cookies: {
      my_cookie: 'hello world',
    },
  });
}
