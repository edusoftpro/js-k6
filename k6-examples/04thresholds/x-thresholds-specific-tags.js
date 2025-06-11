import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  thresholds: {
    'http_req_duration{type:API}': ['p(95)<500'], // threshold on API requests only
    'http_req_duration{type:staticContent}': ['p(95)<200'], // threshold on static content only
  },
};

export default function () {
  const res1 = http.get('https://quickpizza.grafana.com/api/headers', {
    tags: { type: 'API' },
  });
  const res2 = http.get('https://quickpizza.grafana.com/api/json', {
    tags: { type: 'API' },
  });

  const responses = http.batch([
    [
      'GET',
      'https://quickpizza.grafana.com/favicon.ico',
      null,
      { tags: { type: 'staticContent' } },
    ],
    ['GET', 'https://quickpizza.grafana.com/admin', null, { tags: { type: 'staticContent' } }],
  ]);

  sleep(1);
}
