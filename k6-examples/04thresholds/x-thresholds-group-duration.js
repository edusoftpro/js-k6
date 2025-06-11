import http from 'k6/http';
import { group, sleep } from 'k6';

export const options = {
  thresholds: {
    'group_duration{group:::individualRequests}': ['avg < 400'],
    'group_duration{group:::batchRequests}': ['avg < 200'],
  },
  vus: 1,
  duration: '10s',
};

export default function () {
  group('individualRequests', function () {
    http.get('https://quickpizza.grafana.com/api/json?letter=a');
    http.get('https://quickpizza.grafana.com/api/json?letter=b');
    http.get('https://quickpizza.grafana.com/api/json?letter=c');
  });

  group('batchRequests', function () {
    http.batch([
      ['GET', 'https://quickpizza.grafana.com/api/json?letter=a'],
      ['GET', 'https://quickpizza.grafana.com/api/json?letter=b'],
      ['GET', 'https://quickpizza.grafana.com/api/json?letter=c'],
    ]);
  });

  sleep(1);
}
