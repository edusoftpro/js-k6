import http from 'k6/http';
import { check } from 'k6';

export default function () {
  const url = 'https://test.k6.io';
  const res = http.get(url);

  // Check that the response status is 200
  check(res, {
    'status is 200': (r) => r.status === 200,
    // Check that the response body contains a specific string
    'body contains "Collection of simple web-pages"': (r) =>
      r.body && r.body.includes('Collection of simple web-pages'),
  });
}
