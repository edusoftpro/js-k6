import http from 'k6/http';
import exec from 'k6/execution';
import { group } from 'k6';

export const options = {
  tags: {
    name: 'value',
  },
  thresholds: {
    'http_reqs{container_group:main}': ['count==0'],
    'http_req_duration{container_group:main}': ['max<1000'],
  }
};

export default function () {
  exec.vu.tags.containerGroup = 'main';

  group('main', function () {
    http.get('https://test.k6.io');
    group('sub', function () {
      http.get('https://quickpizza.grafana.com/');
    });
    http.get('https://quickpizza.grafana.com/api/headers');
  });

  delete exec.vu.tags.containerGroup;

  http.get('https://quickpizza.grafana.com/api/delay/3');
}
