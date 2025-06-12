import http from 'k6/http';

export default function () {
  http.get('https://test.k6.io/login', { tags: { endpoint: 'login', method: 'GET' } });
  http.post('https://test.k6.io/api', { data: { x: 1 } }, { tags: { endpoint: 'api', type: 'rest' } });
}
