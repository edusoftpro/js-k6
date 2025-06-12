import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  let responses = http.batch([
    ['GET', 'https://test.k6.io/', null, { tags: { type: 'main' } }],
    ['GET', 'https://test.k6.io/static/css/site.css', null, { tags: { type: 'css' } }],
    ['GET', 'https://test.k6.io/static/js/prisms.js', null, { tags: { type: 'js' } }],
  ]);
  sleep(1);
}
